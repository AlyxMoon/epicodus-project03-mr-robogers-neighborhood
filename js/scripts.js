/* global $, TestManager, addTestsForConvertNumToRobogerSpeak, addTestsForTalkToUsMrRoboger */

const main = () => {
  const testManager = new TestManager()

  addTestsForConvertNumToRobogerSpeak(testManager)
  addTestsForTalkToUsMrRoboger(testManager)

  testManager.runTests()
}

$(main)
