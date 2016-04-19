Rating Utils for Node.js
===============
[![Build Status](https://travis-ci.org/wesleygrimes/rating-utils.svg?branch=master)](https://travis-ci.org/wesleygrimes/rating-utils)
[![Coverage Status](https://coveralls.io/repos/github/wesleygrimes/rating-utils/badge.svg?branch=master)](https://coveralls.io/github/wesleygrimes/rating-utils?branch=master)

Library of helper methods for rating insurance policies

## Features

* Pro-rata factor calculation

## Installation

`npm install rating-utils`

## Usage

```
var rating = require('rating-utils');

//full term endorsement
var result = proRataFactor('2015-01-01', '2015-12-31'); //result should be 1

//mid term endorsement
var result2 = proRataFactor('2015-01-01', '2015-06-30'); //result should be approx .5
```

## Tests

`npm test`

## Contributing

All our welcome to join in the fun.