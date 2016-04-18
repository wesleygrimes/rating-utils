var should = require('chai').should(),
    rating = require('../index'),
    add = undefined.add;
    
describe('#add', function() {
    it('adds the leftSide and rightSide together', function(){
        add(1,2).should.equal(3);
    });
});