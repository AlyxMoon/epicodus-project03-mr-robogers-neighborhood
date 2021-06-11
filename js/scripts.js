/* global $, TestManager, talkToUsMrRoboger, addTestsForConvertNumToRobogerSpeak, addTestsForTalkToUsMrRoboger */

const handleUserInput = (testManager) => {
  $('form').on('submit', (event) => {
    event.preventDefault()

    const userInput = $('input', event.currentTarget).val()
    const response = talkToUsMrRoboger(parseInt(userInput))

    $('#output').text(response.join(' '))
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
