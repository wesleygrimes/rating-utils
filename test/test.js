var chai = require('chai'),
    expect = chai.expect,
    rating = require('../index'),
    prorata = rating.prorata,
    chaistats = require("chai-stats");
    
chai.use(chaistats);  
    
describe('#proRataFactor', function() {
    it('policy term 2015-01-01 to 2015-12-31 s/b factor of 1', function(){
        var result = prorata.getProrateFactor('2015-01-01', '2015-12-31');
        expect(result).to.almost.equal(1, 3);
    });
    
    it('policy term 2015-01-01 to 2015-06-30 s/b factor of .5', function(){
        var result = prorata.getProrateFactor('2015-01-01', '2015-06-30');
        expect(result).to.almost.equal(.5,1);
    });
    
    it('policy term 2015-01-01 to 2015-06-30 new full term of $100 s/b prorated to $49', function(){
        var result = prorata.getNetChangeAmount(100, 0, '2015-01-01', '2015-06-30');
        expect(result).to.almost.equal(49,1);
    });
    
});