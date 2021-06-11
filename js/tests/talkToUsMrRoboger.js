/* global talkToUsMrRoboger */

/* eslint-disable-next-line no-unused-vars */
const addTestsForTalkToUsMrRoboger = testManager => {
  testManager.addSpacer('talkToUsMrRoboger()')

  testManager.addTest({
    description: 'It should return correctly with 0',
    func: talkToUsMrRoboger,
    expected: ['0'],
    args: [0],
  })

  testManager.addTest({
    description: 'It should return correctly with 1',
    func: talkToUsMrRoboger,
    expected: ['0', 'Beep!'],
    args: [1],
  })

  testManager.addTest({
    description: 'It should return correctly with 2',
    func: talkToUsMrRoboger,
    expected: ['0', 'Beep!', 'Boop!'],
    args: [2],
  })

  testManager.addTest({
    description: 'It should return correctly with 3',
    func: talkToUsMrRoboger,
    expected: ['0', 'Beep!', 'Boop!', 'Won\'t you be my neighbor?'],
    args: [3],
  })

  testManager.addTest({
    description: 'It should return correctly with 4',
    func: talkToUsMrRoboger,
    expected: ['0', 'Beep!', 'Boop!', 'Won\'t you be my neighbor?', '4'],
    args: [4],
  })
}
