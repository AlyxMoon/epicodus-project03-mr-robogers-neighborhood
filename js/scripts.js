/* global $, TestManager, talkToUsMrRoboger, addTestsForConvertNumToRobogerSpeak, addTestsForTalkToUsMrRoboger */

const handleUserInput = () => {
  $('form').on('submit', (event) => {
    event.preventDefault()

    const userInput = $('input', event.currentTarget).val()
    const response = talkToUsMrRoboger(parseInt(userInput))

    $('#output').text(response.join(' '))
  })
}

const main = () => {
  const testManager = new TestManager()

  addTestsForConvertNumToRobogerSpeak(testManager)
  addTestsForTalkToUsMrRoboger(testManager)

  testManager.runTests()

  handleUserInput()
}

$(main)
