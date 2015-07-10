var should = require('should');
var tennis = require('../tennis');

function assertScoreIs(score, v1, v2) {
	score.Alberto.should.equal(v1);
	score.Stefano.should.equal(v2);
};

function scorePoints(game, player, count) {
	for(var i = 0; i < count; i++) {
		game.scorePoint(player);
	}
}

describe('Tennis', function() {
  describe('setup', function() {
    it('initial game score is 0 for both players', function() {
      var game = new tennis.Game('Alberto', 'Stefano');
	  var score = game.getCurrentGameScore();
	  assertScoreIs(score, '0', '0');
    });
	
	it('initial set score is 0 for both players', function() {
      var game = new tennis.Game('Alberto', 'Stefano');
	  var score = game.getCurrentSetScore();
	  assertScoreIs(score, 0, 0);
    });
  });
  
  describe('play a game', function() {
  	it('score a point', function() {
  		var game = new tennis.Game('Alberto', 'Stefano');
  		game.scorePoint('Alberto');
  		var score = game.getCurrentGameScore();
  		assertScoreIs(score, '15', '0');
  	});

    it('both players score a point', function() {
      var game = new tennis.Game('Alberto', 'Stefano');
      game.scorePoint('Stefano');
      game.scorePoint('Alberto');
      var score = game.getCurrentGameScore();
      assertScoreIs(score, '15', '15');
    });

    it('a player scores three points', function() {
      var game = new tennis.Game('Alberto', 'Stefano');
	  scorePoints(game, 'Stefano', 3);
      var score = game.getCurrentGameScore();
      assertScoreIs(score, '0', '40');
    });

    it('the game is advantage for Alberto', function() {
      var game = new tennis.Game('Alberto', 'Stefano');
      scorePoints(game, 'Stefano', 3);
      
      scorePoints(game, 'Alberto', 4);
      
      var score = game.getCurrentGameScore();
      assertScoreIs(score, '40*', '40');
    });
	
	it('the game is deuce after advantage', function() {
      var game = new tennis.Game('Alberto', 'Stefano');
      scorePoints(game, 'Stefano', 3);
      
      scorePoints(game, 'Alberto', 4);
	  
	  game.scorePoint('Stefano');
      
      var score = game.getCurrentGameScore();
      assertScoreIs(score, '40', '40');
    });

	it('one player wins a game', function() {
      var game = new tennis.Game('Alberto', 'Stefano');
      scorePoints(game, 'Stefano', 4);
      var score = game.getCurrentGameScore();
      assertScoreIs(score, '0', '0');
	  assertScoreIs(game.getCurrentSetScore(), 0, 1);
    });
  });
})