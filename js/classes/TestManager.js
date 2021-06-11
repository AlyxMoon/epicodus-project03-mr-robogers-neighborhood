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
        description: `${func.name}: ${description}`,
        actual,
        expected,
        valid: actual === expected,
      }
    })
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

  logResult ({
    result,
    container = '#output-tests',
    logToConsole = true,
  } = {}) {
    if (logToConsole) {
      console.log(`%c ${result.description}`, 'font-weight: bold;')

      if (result.valid) {
        console.log('%c -- passed!', 'background-color: green')
      } else {
        console.log(
          `%c -- Incorrect | actual: ${result.actual} | expected: ${result.expected}`,
          'background-color: #290000',
        )
      }
    }

    if (container) {
      // do stuff
    }
  }
}
