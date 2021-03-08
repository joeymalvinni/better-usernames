<p align="center">
    <img src="logos/RandomUsernamesLogo.png"/></img>
    <br>
    <p align="center">Fast, advanced, customizable username framework for <a href="http://nodejs.org">Node</a></p>
</p>
<p align="center">
  <a href="https://travis-ci.com/joeymalvinni/random-usernames">
    <img alt="Build Status" src="https://travis-ci.com/joeymalvinni/random-usernames.svg?branch=main">
  </a>
  <a href="https://opensource.org/licenses/Apache-2.0">
	<img alt="Apache 2.0 License" src="https://img.shields.io/badge/License-Apache%202.0-blue.svg">
  </a>
</p>

<br>

## Installation

This is a [Node.js](https://nodejs.org/en/) module available through the
[npm registry](https://www.npmjs.com/).

Before installing, [download and install Node.js](https://nodejs.org/en/download/).
Node.js 0.10 or higher is required.

If this is a brand new project, make sure to create a `package.json` first with
the [`npm init` command](https://docs.npmjs.com/creating-a-package-json-file).

Installation is done using the
[`npm install` command](https://docs.npmjs.com/getting-started/installing-npm-packages-locally):

```bash
$ npm install random-usernames
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
$ npm install -g random-usernames
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

The author of Express is [Joey Malvinni](https://github.com/joeymalvinni)

[List of all contributors](https://github.com/joeymalvinni/random-usernames/graphs/contributors)

## License

  [MIT](LICENSE)
  


[npm-image]: https://img.shields.io/npm/v/express.svg
[npm-url]: https://npmjs.org/package/express
[downloads-image]: https://img.shields.io/npm/dm/express.svg
[downloads-url]: https://npmcharts.com/compare/express?minimal=true
[travis-image]: https://img.shields.io/travis/expressjs/express/master.svg?label=linux
[travis-url]: https://travis-ci.org/expressjs/express
[appveyor-image]: https://img.shields.io/appveyor/ci/dougwilson/express/master.svg?label=windows
[appveyor-url]: https://ci.appveyor.com/project/dougwilson/express
[coveralls-image]: https://img.shields.io/coveralls/expressjs/express/master.svg
[coveralls-url]: https://coveralls.io/r/expressjs/express?branch=master