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
var config = require("config");
var moment = require("moment");
require("twix");

var rounding = config.get("prorata.rounding");

/**
 * Determine proratafactor given original eff date and revision eff date
 * @param {String} policyEffectiveDate
 * @param {String} revisionEffectiveDate
 * @return {Number}
 */

function getProrateFactor(policyEffectiveDate, revisionEffectiveDate) {
    var actualDays = moment(policyEffectiveDate).twix(revisionEffectiveDate).length("days");
    var effPlusYear = moment(policyEffectiveDate).add(1, "years").subtract(1, "days");
    var daysIfFullYear = moment(policyEffectiveDate).twix(effPlusYear).length("days");
    
    if (rounding.enabled) {
        return (actualDays / daysIfFullYear).toPrecision(rounding.precision);    
    }
    else {
        return (actualDays / daysIfFullYear);    
    }
}

/**
 * Calculate net change amount new full term, previous full term, original eff date and revision eff date
 * @param {Number} newFullTermAmount
 * @param {Number} prevFullTermAmount
 * @param {String} policyEffectiveDate
 * @param {String} revisionEffectiveDate
 * @return {Number}
 */
function getNetChangeAmount(newFullTermAmount, prevFullTermAmount, policyEffectiveDate, revisionEffectiveDate) {
    var netChangeUnadjusted = newFullTermAmount - prevFullTermAmount;
    var netChangeAdjusted = netChangeUnadjusted * getProrateFactor(policyEffectiveDate, revisionEffectiveDate);
    return Math.round(netChangeAdjusted, 0);
}

 module.exports = {
     getProrateFactor: getProrateFactor,
     getNetChangeAmount: getNetChangeAmount
 };