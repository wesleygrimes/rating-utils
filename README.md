Rating Utils for Node.js
===============
[![Build Status](https://travis-ci.org/wesleygrimes/rating-utils.svg?branch=master)](https://travis-ci.org/wesleygrimes/rating-utils)
[![Coverage Status](https://coveralls.io/repos/github/wesleygrimes/rating-utils/badge.svg?branch=master)](https://coveralls.io/github/wesleygrimes/rating-utils?branch=master)

Library of helper methods for rating insurance policies

## Features

* Prorata utilities to get prorate factor, and calculate net change premium
* Many more features to come, just getting started

## Installation

`npm install rating-utils`

## Usage

```
var rating = require('rating-utils'),
    prorata = rating.prorata;

//full term endorsement
var result = prorata.getProrateFactor('2015-01-01', '2015-12-31'); //result should be 1

//mid term endorsement
var result2 = prorata.getProrateFactor('2015-01-01', '2015-06-30'); //result should be approx .5

//calculate net change premium of mid-term endorsement
var newFullTermAmount = 100;
var prevFullTermAmount = 0;
var policyEffectiveDate = '2015-01-01';
var revisionEffectiveDate = '2015-06-30';
var netchange = prorata.getNetChangeAmount(newFullTermAmount, prevFullTermAmount, policyEffectiveDate, revisionEffectiveDate);

```

## Tests

`npm test`

## Contributing

All our welcome to join in the fun.