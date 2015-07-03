var should = require('should');
var tennis = require('../tennis');

describe('Tennis', function(){
  describe('setup', function() {
    it('should return 0 for current game score', function() {
      var game = new tennis.Game('Alberto', 'Stefano');
	  var score = game.getCurrentGameScore();
	  score.Alberto.should.equal(0);
	  score.Stefano.should.equal(0);
    });
  })
})