/* global $ */

/* eslint-disable-next-line no-unused-vars */
class TestManager {
  constructor () {
    this.tests = []
  }

  addTest ({
    func = () => {},
    description = '',
    expected,
    args = [],
  } = {}) {
    this.tests.push(() => {
      const actual = func(...args)

      return {
        description: `${description}`,
        actual,
        expected,
        valid: this.checkActualEqualsExpected(actual, expected),
      }
    })
  }

  addSpacer (description = '') {
    this.tests.push(() => ({
      type: 'spacer',
      description,
    }))
  }

  runTests ({
    logResults = true,
    loggerArgs = {},
  } = {}) {
    const results = this.tests.map(test => test())

    if (logResults) {
      results.forEach(result => this.logResult({
        result,
        ...loggerArgs,
      }))
    }

    return results
  }

  checkActualEqualsExpected (actual, expected) {
    if (Array.isArray(actual) && Array.isArray(expected)) {
      return (
        actual.length === expected.length &&
        actual.every((a, index) => a === expected[index])
      )
    }

    return actual === expected
  }

  logResult ({
    result,
    container = '#output-tests',
    logToConsole = true,
  } = {}) {
    if (result.type === 'spacer') {
      if (logToConsole) {
        console.log(
          `%c${result.description}`,
          'background-color: black; color: white; font-weight: bold; padding: 5px;',
        )
      }

      if (container) {
        $(`<li><h3>${result.description}</h3></li>`)
          .appendTo(container)
          .addClass('py-3 bg-dark text-light list-group-item')
      }

      return
    }

    const incorrectText = `Incorrect | actual: ${result.actual} | expected: ${result.expected}`

    if (logToConsole) {
      console.log(`%c${result.description}`, 'font-weight: bold;')

      if (result.valid) {
        console.log('%c-- passed!', 'background-color: green')
      } else {
        console.log(
          `%c-- ${incorrectText}`,
          'background-color: #290000',
        )
      }
    }

    if (container) {
      const item = $('<li class="list-group-item text-light" />').appendTo(container)

      item.append(`<h6 class="font-bold">${result.description}</h6>`)

      if (result.valid) {
        item.addClass('bg-success')
      } else {
        item
          .addClass('bg-danger')
          .append(`<p>${incorrectText}</p>`)
      }
    }
  }
}
