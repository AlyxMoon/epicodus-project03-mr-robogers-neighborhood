/* global convertNumToRobogerSpeak */

/* eslint-disable-next-line no-unused-vars */
const addTestsForConvertNumToRobogerSpeak = testManager => {
  testManager.addSpacer('convertNumToRobogerSpeak()')

  testManager.addTest({
    func: convertNumToRobogerSpeak,
    description: 'It should turn 0 into "0"',
    expected: '0',
    args: [0],
  })

  testManager.addTest({
    func: convertNumToRobogerSpeak,
    description: 'It should turn 1 into "Beep!"',
    expected: 'Beep!',
    args: [1],
  })

  testManager.addTest({
    func: convertNumToRobogerSpeak,
    description: 'It should turn 2 into "Boop!"',
    expected: 'Boop!',
    args: [2],
  })

  testManager.addTest({
    func: convertNumToRobogerSpeak,
    description: 'It should turn 3 into "Won\'t you be my neighbor?"',
    expected: 'Won\'t you be my neighbor?',
    args: [3],
  })

  testManager.addTest({
    func: convertNumToRobogerSpeak,
    description: 'It should turn 4 into "4"',
    expected: '4',
    args: [4],
  })

  testManager.addTest({
    func: convertNumToRobogerSpeak,
    description: 'It should turn 5 into "5"',
    expected: '5',
    args: [5],
  })

  testManager.addTest({
    func: convertNumToRobogerSpeak,
    description: 'It should turn 6 into "6"',
    expected: '6',
    args: [6],
  })

  testManager.addTest({
    func: convertNumToRobogerSpeak,
    description: 'It should turn 7 into "7"',
    expected: '7',
    args: [7],
  })

  testManager.addTest({
    func: convertNumToRobogerSpeak,
    description: 'It should turn 8 into "8"',
    expected: '8',
    args: [8],
  })

  testManager.addTest({
    func: convertNumToRobogerSpeak,
    description: 'It should turn 9 into "9"',
    expected: '9',
    args: [9],
  })

  testManager.addTest({
    func: convertNumToRobogerSpeak,
    description: 'It should turn 10 into "Beep!"',
    expected: 'Beep!',
    args: [10],
  })

  testManager.addTest({
    func: convertNumToRobogerSpeak,
    description: 'It should turn 12 into "Boop!"',
    expected: 'Boop!',
    args: [12],
  })

  testManager.addTest({
    func: convertNumToRobogerSpeak,
    description: 'It should turn 13 into "Won\'t you be my neighbor?"',
    expected: 'Won\'t you be my neighbor?',
    args: [13],
  })

  testManager.addTest({
    func: convertNumToRobogerSpeak,
    description: 'It should turn 14 into "Beep!"',
    expected: 'Beep!',
    args: [14],
  })

  testManager.addTest({
    func: convertNumToRobogerSpeak,
    description: 'It should turn 21 into "Boop!"',
    expected: 'Boop!',
    args: [21],
  })

  testManager.addTest({
    func: convertNumToRobogerSpeak,
    description: 'It should turn 23 into "Won\'t you be my neighbor?"',
    expected: 'Won\'t you be my neighbor?',
    args: [23],
  })

  testManager.addTest({
    func: convertNumToRobogerSpeak,
    description: 'It should turn 32 into "Won\'t you be my neighbor?"',
    expected: 'Won\'t you be my neighbor?',
    args: [32],
  })

  testManager.addTest({
    func: convertNumToRobogerSpeak,
    description: 'It should turn 40 into "40"',
    expected: '40',
    args: [40],
  })
}
