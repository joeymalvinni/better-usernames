<p align="center">
    <img src="https://i.imgur.com/901w4o4.png"/></img>
    <br>
    <p align="center">A fast, advanced, and customizable username framework for <a href="http://nodejs.org">Node.js</a></p>
</p>
<p align="center">
  <a href="https://travis-ci.com/joeymalvinni/random-usernames">
    <img alt="Build Status" src="https://travis-ci.com/joeymalvinni/random-usernames.svg?branch=main">
  </a>
  <a href="https://opensource.org/licenses/Apache-2.0">
	<img alt="Apache 2.0 License" src="https://img.shields.io/badge/License-Apache%202.0-blue.svg">
  </a>
  <a href="https://github.com/joeymalvinni/random-usernames/contributors/">
	<img alt="Github contributors" src="https://img.shields.io/github/contributors/joeymalvinni/random-usernames.svg">
  </a>
  <a href="https://snyk.io/test/github/joeymalvinni/random-usernames/">
	<img alt="Snyk vulnerabilities" src="https://snyk.io/test/github/joeymalvinni/random-usernames/badge.svg?targetFile=package.json">
  </a>
  <a href="https://github.com/joeymalvinni/random-usernames/pulls">
	<img alt="PRs welcome" src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg">
  </a>
</p>

<br>

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/package/better-usernames).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install better-usernames
```

## Features

  * Sort word category order
  * Custom formatters
  * Capitalization helper
  * Word seperation
  * Focus on high performance

## Quick Start

  The quickest way to get started with random-usernames is to use the module in a script and output a username as shown below:

  Install the executable:

```bash
$ npm install -g better-usernames
```

  Make an `index.js` file and give it the following contents:
  
```js
const generateUsername = require('random-usernames');

console.log(generateUsername());
```

  Test the application:

```bash
$ node index.js
```

  Verify that the console output is as expected.

## Examples

  To view the examples, clone the Random Usernames repo and install the dependencies:

```bash
$ git clone git://github.com/joeymalvinni/random-usernames.git
$ cd random-usernames
```

  Then run whichever example you want:

```bash
$ node examples/advanced
```

## Tests

  To run the test suite, run `npm test`:

```bash
$ npm test
```

## Contributing

[Contributing Guide](Contributing.md)

## Authors

The author of random-usernames is [Joey Malvinni](https://github.com/joeymalvinni)

[List of all contributors](https://github.com/joeymalvinni/random-usernames/graphs/contributors)

## License

  [Apache 2.0](LICENSE)
