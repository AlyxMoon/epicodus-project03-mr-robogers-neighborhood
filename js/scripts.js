/* global $, TestManager, addTestsForConvertNumToRobogerSpeak */

const main = () => {
  const testManager = new TestManager()

  addTestsForConvertNumToRobogerSpeak(testManager)

  testManager.runTests()
}

$(main)
