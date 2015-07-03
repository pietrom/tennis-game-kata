var should = require('should');
var tennis = require('../tennis');

describe('Tennis', function(){
  describe('setup', function() {
    it('should return 0-0 for a new game', function() {
      var game = new tennis.Game('Alberto', 'Stefano');
	  game.score().should.equal('0 - 0');
    });
  })
})