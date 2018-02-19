[![CircleCI](https://circleci.com/gh/dijonkitchen/Set-TDD.svg?style=svg)](https://circleci.com/gh/dijonkitchen/Set-TDD)

[![codecov](https://codecov.io/gh/dijonkitchen/Set-TDD/branch/master/graph/badge.svg)](https://codecov.io/gh/dijonkitchen/Set-TDD)

# Set

Building the Set class in Javascript with test-driven development. To learn more about foundational mathematics and continue building incremental functionality, with fast tests, and complete coverage for inexpensive adaptability.

You can see details on how this was built with the [conventional commits](https://conventionalcommits.org/) in the [`git log`](https://github.com/dijonkitchen/Set-TDD/commits/master)!

Background:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
https://en.wikipedia.org/wiki/Set_theory

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them

```sh
brew install node
brew install yarn
```

### Installing

To compile the Typescript to cross-platform compatible Javascript, run:
```sh
yarn run build
```

## Running the tests

Testing was done with [Jest](https://facebook.github.io/jest/).

To run tests:

```sh
yarn test
```

For development, you can watch for changes with:
```sh
yarn test --watch
```
