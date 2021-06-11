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

  let mouthStep = 0
  const animationStates = [
    'M 38,55 C 38,65 65,60 65,53',
    'M 37,56 C 37,66 67,60 65,52',
    'M 36,57 C 38,67 68,60 65,51',
  ]

  if (text.length > 50) {
    $('.interrupt-wrapper').removeClass('hidden')
  }

  let interrupted = false
  $('.interrupt-wrapper button').one('click', () => {
    $(this).attr('disabled', '')
    interrupted = true
  })

  for (let i = 0; i < text.length; i++) {
    if (interrupted) {
      text = text.slice(0, i) + ' ... oh okay, I\'ll stop :('
      interrupted = false
    }

    $('#output').text(text.slice(0, i + 1))

    $('.robot-mouth').attr('d', animationStates[mouthStep])
    if (++mouthStep >= animationStates.length) mouthStep = 0

    const delay = Math.floor(Math.random() * (maxDelay - minDelay)) + minDelay
    await waitFor(delay)
  }

  $('.interrupt-wrapper').addClass('hidden')
  $('.interrupt-wrapper button').removeAttr('disabled')
  $('.robot-mouth').attr('d', animationStates[0])
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

    if (validateUserInput(userInput)) {
      const output = talkToUsMrRoboger(userInput).join(' ')
      await showOutputViaTypewriterEffect(output)
    }

    outputtingToUser = false
    $('form input, form button').removeAttr('disabled')
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
