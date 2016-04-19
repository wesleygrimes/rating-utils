/*!
 * rating-utils
 * Copyright(c) 2016 Wes Grimes
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 * @private
 */

var moment = require("moment");
require("twix");

/**
 * Determine proratafactor given original eff date and revision eff date
 * @param {String} policyEffectiveDate
 * @param {String} revisionEffectiveDate
 * @return {Number}
 */

module.exports = function(policyEffectiveDate, revisionEffectiveDate) {
    var actualDays = moment(policyEffectiveDate).twix(revisionEffectiveDate).length("days");
    var effPlusYear = moment(policyEffectiveDate).add(1, "years").subtract(1, "days");
    var daysIfFullYear = moment(policyEffectiveDate).twix(effPlusYear).length("days");
    return (actualDays / daysIfFullYear).toPrecision(4);
}