
/* eslint-disable-next-line no-unused-vars */
function convertNumToRobogerSpeak (num) {
  const numAsString = num.toString()

  if (numAsString.includes('3')) {
    return 'Won\'t you be my neighbor?'
  }

  if (numAsString.includes('2')) {
    return 'Boop!'
  }

  if (numAsString.includes('1')) {
    return 'Beep!'
  }

  return numAsString
}
