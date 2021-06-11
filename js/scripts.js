/* global $, TestManager, talkToUsMrRoboger, addTestsForConvertNumToRobogerSpeak, addTestsForTalkToUsMrRoboger */

const waitFor = timeInMs => {
  return new Promise(resolve => window.setTimeout(resolve, timeInMs))
}

const validateUserInput = (userInput) => {
  let message = ''

  if (Number.isNaN(userInput)) {
    message = 'Sorry, Mr Roboger doesn\'t understand you at all!'
  } else if (userInput < 0) {
    message = 'Sorry, Mr Roboger is too positive to understand a number below 0!'
  } else if (userInput > 100) {
    message = 'Sorry, Mr Roboger is too tired to talk with a number that big!'
  }

  if (message) {
    $('<div role="alert" />')
      .appendTo('#output')
      .addClass('alert alert-danger')
      .text(message)
  }

  return !message
}

const showOutputViaTypewriterEffect = async text => {
  const minDelay = 50
  const maxDelay = 150

  for (let i = 0; i < text.length; i++) {
    $('#output').text(text.slice(0, i))

    const delay = Math.floor(Math.random() * (maxDelay - minDelay)) + minDelay
    await waitFor(delay)
  }
}

const handleUserInput = (testManager) => {
  let outputtingToUser = false

  $('form').on('submit', async (event) => {
    event.preventDefault()

    if (outputtingToUser) return
    outputtingToUser = true
    $('#output').empty()
    $('form input, form button').attr('disabled', '')

    const userInput = parseInt($('input', event.currentTarget).val())
    const output = talkToUsMrRoboger(userInput).join(' ')

    if (validateUserInput(userInput)) {
      await showOutputViaTypewriterEffect(output)
    }

    outputtingToUser = false
    $('form input, form button').removeAttr('disabled')
    $('#output').text(output)
  })

  $('#input-toggle-tests').on('change', (event) => {
    const testModeActive = event.target.checked

    $('.test-section, .input-section').toggleClass('d-none')
    $('#output-tests').html('')

    if (testModeActive) {
      testManager.runTests({
        loggerArgs: {
          container: '#output-tests',
          logToConsole: false,
        },
      })
    }
  })
}

const main = () => {
  const testManager = new TestManager()

  addTestsForConvertNumToRobogerSpeak(testManager)
  addTestsForTalkToUsMrRoboger(testManager)

  testManager.runTests({
    loggerArgs: { container: '' },
  })

  handleUserInput(testManager)
}

$(main)
