var should = require('should');
var tennis = require('../tennis');

describe('Tennis', function(){
  describe('setup', function() {
    it('initial game score is 0 for both players', function() {
      var game = new tennis.Game('Alberto', 'Stefano');
	  var score = game.getCurrentGameScore();
	  score.Alberto.should.equal(0);
	  score.Stefano.should.equal(0);
    });
	
	it('initial set score is 0 for both players', function() {
      var game = new tennis.Game('Alberto', 'Stefano');
	  var score = game.getCurrentSetScore();
	  score.Alberto.should.equal(0);
	  score.Stefano.should.equal(0);
    });
  });
  
  describe('play a game', function() {
	it('score a point', function() {
		var game = new tennis.Game('Alberto', 'Stefano');
		game.scorePoint('Alberto');
		var score = game.getCurrentGameScore();
		score.Alberto.should.equal(15);
		score.Stefano.should.equal(0);
	});
  });
})