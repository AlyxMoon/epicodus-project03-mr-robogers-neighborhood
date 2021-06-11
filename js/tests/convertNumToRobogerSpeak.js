/* global convertNumToRobogerSpeak */

/* eslint-disable-next-line no-unused-vars */
const addTestsForConvertNumToRobogerSpeak = testManager => {
  testManager.addTest({
    func: convertNumToRobogerSpeak,
    description: 'It should turn 0 into "0"',
    expected: '0',
    args: [0],
  })
}
