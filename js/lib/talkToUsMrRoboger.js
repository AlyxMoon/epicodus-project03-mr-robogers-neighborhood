/* global convertNumToRobogerSpeak */

/* eslint-disable-next-line no-unused-vars */
function talkToUsMrRoboger (num) {
  const responses = []

  for (let i = 0; i <= num; i++) {
    responses.push(convertNumToRobogerSpeak(i))
  }

  return responses
}
