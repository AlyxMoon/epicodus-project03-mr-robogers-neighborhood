/* global $,
  TestManager,
  talkToUsMrRoboger,
  addTestsForConvertNumToRobogerSpeak,
  addTestsForTalkToUsMrRoboger,
  validateUserInput,
  waitForRange,
*/

class MouthAnimationManager {
  constructor () {
    this.animationStates = [
      'M 38,55 C 38,65 65,60 65,53',
      'M 37,56 C 37,66 67,60 65,52',
      'M 36,57 C 38,67 68,60 65,51',
    ]

    this.sadState = 'M 34,61 C 38,53 63,50 65,57'

    this.state = 0
    this.sad = false
  }

  getInitialState () {
    return this.animationStates[0]
  }

  getNextState () {
    if (this.sad) return this.sadState

    if (this.state >= this.animationStates.length) {
      this.state = 0
    }

    return this.animationStates[this.state++]
  }

  makeSad () {
    this.sad = true
  }
}

const showOutputViaTypewriterEffect = async text => {
  const mouthAnimations = new MouthAnimationManager()

  if (text.length > 50) {
    $('.interrupt-wrapper').removeClass('hidden')
  }

  let interrupted = false
  let handledInterrupted = false
  $('.interrupt-wrapper button').one('click', () => {
    interrupted = true
    mouthAnimations.makeSad()
  })

  for (let i = 0; i < text.length; i++) {
    if (interrupted && !handledInterrupted) {
      text = text.slice(0, i) + ' ... oh okay, I\'ll stop :('
      handledInterrupted = true
    }

    $('#output').text(text.slice(0, i + 1))
    $('.robot-mouth').attr('d', mouthAnimations.getNextState())

    await waitForRange()
  }

  $('.interrupt-wrapper').addClass('hidden')

  if (!interrupted) {
    $('.robot-mouth').attr('d', mouthAnimations.getInitialState())
  }
}

const handleUserInput = () => {
  let outputtingToUser = false

  const setVisualStateForOutput = (outputting = true) => {
    if (outputting) {
      outputtingToUser = true
      $('#output').empty()
      $('form input, form button').attr('disabled', '')
    } else {
      outputtingToUser = false
      $('form input, form button').removeAttr('disabled')
    }
  }

  $('form').on('submit', async (event) => {
    event.preventDefault()
    if (outputtingToUser) return

    setVisualStateForOutput(true)

    const userInput = parseInt($('input', event.currentTarget).val())

    const errorMessage = validateUserInput(userInput)

    if (errorMessage) {
      $('<div role="alert" />')
        .appendTo('#output')
        .addClass('alert alert-danger')
        .text(errorMessage)
    } else {
      const output = talkToUsMrRoboger(userInput).join(' ')
      await showOutputViaTypewriterEffect(output)
    }

    setVisualStateForOutput(false)
  })

  $('#input-toggle-tests').on('change', () => {
    $('.test-section, .input-section').toggleClass('d-none')
  })
}

const main = () => {
  const testManager = new TestManager()
  addTestsForConvertNumToRobogerSpeak(testManager)
  addTestsForTalkToUsMrRoboger(testManager)
  testManager.runTests()

  handleUserInput()
}

$(main)
