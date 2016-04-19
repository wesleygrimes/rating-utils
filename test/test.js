var chai = require('chai'),
    expect = chai.expect,
    rating = require('../index'),
    proRataFactor = rating.proRataFactor,
    chaistats = require("chai-stats");
    
chai.use(chaistats);  
    
describe('#proRataFactor', function() {
    it('policy term 2015-01-01 to 2015-12-31 s/b factor of 1', function(){
        var result = proRataFactor('2015-01-01', '2015-12-31');
        expect(result).to.almost.equal(1, 3);
    });
    
    it('policy term 2015-01-01 to 2015-06-30 s/b factor of .5', function(){
        var result = proRataFactor('2015-01-01', '2015-06-30');
        expect(result).to.almost.equal(.5,1);
    });
    
});