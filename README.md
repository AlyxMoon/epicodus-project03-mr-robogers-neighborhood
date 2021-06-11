# Epicodus | Independent Project 03 | Mr Roboger's Neighborhood

##### Table of Contents
1. [Description](#description)
2. [Setting Up The Project](#setting-up-the-project)
3. [Explanation of Code](#explanation-of-code)
4. [Objectives](#objectives)
   - [Further Exploration Objectives](#further-exploration-objectives)
5. [Tests](#tests)
   - [convertNumToRobogerSpeak](#describe-convertnumtorobogerspeak)
6. [Sources and Libraries](#sources-and-libraries)
   - [External Libraries Used](#external-libraries-used)

## Description

This is my third independent project for the Epicodus bootcamp program. The goal is to make a small web application that takes a numeric input from the user and returns a range of numbers, with some substituted for specific strings.

Tests will be utilized to check behavior.

- **Author**: Allister Moon Kays
- **Live Website Link**: [https://alyxmoon.github.io/epicodus-project02-mr-robogers-neighborhood/](https://alyxmoon.github.io/epicodus-project02-mr-robogers-neighborhood/)
- **Copyright**: MIT License

## Setting Up The Project
1. Download the files or clone the repository to your computer
2. Open the project folder in your code editor of choice
3. No special tooling is required to preview the site when developing. You can either open the index.html file directly, or use any tool to start a develop server which serves the index.html for
   - for example, in VScode, open the command palette and search for `live server: open with live server`

Optionally, you can set up your project to make use of `eslint`, which is a tool that parses your files to help find errors and enforce code style. You can configure VScode to read the eslint rules and present this information to you, and even fix mistakes when you save! However, since that set up may change on the user, I leave it up to you to figure out how to configure VScode (or whichever code editor you use) to use eslint.

To set up `eslint` though, you need the following:
1. Install `node.js` on your computer
2. Install `npm` or `yarn` on your computer. The following instructions will assume you use `yarn`, and you'll have to look up how to do the commands in `npm` if you choose to use it instead.
3. After you have this repository on your computer, open a command line in the root of this repository.
4. Run `yarn` to install the dependencies, these can be found in the `package.json` file under `devDependencies`
5. You can now run `yarn run lint` to manually lint your code and see any errors/warnings (this uses the script as defined in `package.json`)
6. Optionally, if you have configured VScode to use linting, it will show you the rules directly in the file without having to do anything!

## Explanation of Code

## Objectives
- JavaScript business logic and user interface logic are separate.
- Tests are included for each behavior and code is committed after each test passes.
- Application implements a loop and works as expected.
- The user can use the application repeatedly and see new results.
- All previous objectives have been met.
- Required functionality is in place by the deadline.
- Project demonstrates understanding of this week's concepts. If prompted, you are able to discuss your code with an instructor using correct terminology.

- Project is in a presentable, portfolio-quality state.
- Code is clean, well-refactored, and easy-to-read. This includes correct indentation, spacing, and including only necessary comments and debugging tools.
- Variable names are descriptive and use lower camel case (e.g. myVariableExample).
- Commits are made regularly with clear messages that finish the phrase "It will…".
- Project README that includes, bare minimum:
  - author name
  - program name
  - detailed setup instructions
  - description
  - copyright and license information

### Further Exploration Objectives
- Add images, styling, and custom animations.
- Implement different behaviors/effects/images for different inputs.
- Include an option that returns the output in reversed order (beginning with the largest number).
- Add a second form field that takes a name as an input. Then update the output so that the program states "Won't you be my neighbor, {name}?" instead of "Won't you be my neighbor?"

## Tests

#### Describe: convertNumToRobogerSpeak()

```
description: 'It should turn 0 into "0"',
expected: '0',
Code: convertNumToRobogerSpeak(0),
```

```
description: 'It should turn 1 into "Beep!"',
expected: 'Beep!',
Code: convertNumToRobogerSpeak(1),
```

```
description: 'It should turn 2 into "Boop!"',
expected: 'Boop!',
Code: convertNumToRobogerSpeak(2),
```

```
description: 'It should turn 3 into "Won\'t you be my neighbor?"',
expected: 'Won\'t you be my neighbor?',
Code: convertNumToRobogerSpeak(3),
```

```
description: 'It should turn 4 into "4"',
expected: '4',
Code: convertNumToRobogerSpeak(4),
```

```
description: 'It should turn 5 into "5"',
expected: '5',
Code: convertNumToRobogerSpeak(5),
```

```
description: 'It should turn 6 into "6"',
expected: '6',
Code: convertNumToRobogerSpeak(6),
```

```
description: 'It should turn 7 into "7"',
expected: '7',
Code: convertNumToRobogerSpeak(7),
```

```
description: 'It should turn 8 into "8"',
expected: '8',
Code: convertNumToRobogerSpeak(8),
```

```
description: 'It should turn 9 into "9"',
expected: '9',
Code: convertNumToRobogerSpeak(9),
```

```
description: 'It should turn 10 into "Beep!"',
expected: 'Beep!',
Code: convertNumToRobogerSpeak(10),
```

```
description: 'It should turn 12 into "Boop!"',
expected: 'Boop!',
Code: convertNumToRobogerSpeak(12),
```

```
description: 'It should turn 13 into "Won\'t you be my neighbor?"',
expected: 'Won\'t you be my neighbor?',
Code: convertNumToRobogerSpeak(13),
```

```
description: 'It should turn 14 into "14"',
expected: '14',
Code: convertNumToRobogerSpeak(14),
```

```
description: 'It should turn 21 into "Boop!"',
expected: 'Boop!',
Code: convertNumToRobogerSpeak(21),
```

```
description: 'It should turn 23 into "Won\'t you be my neighbor?"',
expected: 'Won\'t you be my neighbor?',
Code: convertNumToRobogerSpeak(23),
```

```
description: 'It should turn 32 into "Won\'t you be my neighbor?"',
expected: 'Won\'t you be my neighbor?',
Code: convertNumToRobogerSpeak(32),
```

```
description: 'It should turn 40 into "40"',
expected: '40',
Code: convertNumToRobogerSpeak(40),
```

## Sources and Libraries

### External Libraries Used
- Bootstrap v5.0.1
- jQuery v3.6.0
