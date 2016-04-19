var moment = require("moment");
require("twix");

/**
 * Rating utils, library of helper methods for rating insurance policies
 * 
 * @param {String} policyEffectiveDate
 * @param {String} revisionEffectiveDate
 * @return {Float}
 */
module.exports = {
    proRataFactor: function(policyEffectiveDate, revisionEffectiveDate) {
        var actualDays = moment(policyEffectiveDate).twix(revisionEffectiveDate).length("days");
        var effPlusYear = moment(policyEffectiveDate).add(1, "years").subtract(1, "days");
        var daysIfFullYear = moment(policyEffectiveDate).twix(effPlusYear).length("days");
        return (actualDays/daysIfFullYear).toPrecision(4);
    }
};