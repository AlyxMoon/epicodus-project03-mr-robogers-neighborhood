/* global $, TestManager, convertNumToRobogerSpeak, talkToUsMrRoboger */

const main = () => {
  const testManager = new TestManager({
    func: talkToUsMrRoboger,
  })

  testManager.addTest({
    func: convertNumToRobogerSpeak,
    description: 'It should turn 0 into "0"',
    expected: '0',
    args: [0],
  })

  testManager.runTests()
}

$(main)
