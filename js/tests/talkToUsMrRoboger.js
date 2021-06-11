/* global talkToUsMrRoboger */

/* eslint-disable-next-line no-unused-vars */
const addTestsForTalkToUsMrRoboger = testManager => {
  testManager.addTest({
    description: 'It should return correctly with 0',
    func: talkToUsMrRoboger,
    expected: ['0'],
    args: [0],
  })
}
