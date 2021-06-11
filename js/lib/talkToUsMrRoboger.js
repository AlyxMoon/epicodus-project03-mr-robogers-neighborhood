/* global convertNumToRobogerSpeak */

/* eslint-disable-next-line no-unused-vars */
function talkToUsMrRoboger (num) {
  return [...Array(num + 1)].map((_, i) => convertNumToRobogerSpeak(i))
}
