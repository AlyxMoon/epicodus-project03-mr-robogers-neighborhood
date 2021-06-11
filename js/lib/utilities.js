
/* eslint-disable-next-line no-unused-vars */
function validateUserInput (userInput) {
  if (Number.isNaN(userInput)) {
    return 'Sorry, Mr Roboger doesn\'t understand you at all!'
  } else if (userInput < 0) {
    return 'Sorry, Mr Roboger is too positive to understand a number below 0!'
  } else if (userInput > 100) {
    return 'Sorry, Mr Roboger is too tired to talk with a number that big!'
  }
}

/* eslint-disable-next-line no-unused-vars */
function waitFor (timeInMs = 100) {
  return new Promise(resolve => window.setTimeout(resolve, timeInMs))
}

/* eslint-disable-next-line no-unused-vars */
function waitForRange (minTimeInMs = 50, maxtimeInMs = 150) {
  const diff = maxtimeInMs - minTimeInMs
  const delay = Math.floor(Math.random() * diff) + minTimeInMs

  return waitFor(delay)
}
