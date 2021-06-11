/* global $, TestManager, talkToUsMrRoboger, addTestsForConvertNumToRobogerSpeak, addTestsForTalkToUsMrRoboger */

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

const handleUserInput = (testManager) => {
  $('form').on('submit', (event) => {
    event.preventDefault()
    $('#output').empty()

    const userInput = parseInt($('input', event.currentTarget).val())

    if (validateUserInput(userInput)) {
      $('#output').text(talkToUsMrRoboger(userInput).join(' '))
    }
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
