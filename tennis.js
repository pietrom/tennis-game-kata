var GameScore = require('./game-score');
var SetScore = require('./set-score');

var tennis = {	
	whoami: 'The Tennis Game kata',
	Game: function(player1, player2) {
		this.players = [player1, player2];
		this.resetGameScore = function() {
			this.currentGameScore = new GameScore(this.players);
		};
		this.resetGameScore();
		this.currentSetScore = new SetScore(this.players);
	}
};

tennis.Game.prototype.getCurrentGameScore = function() {
	return this.currentGameScore.render();
};

tennis.Game.prototype.getCurrentSetScore = function() {
	return this.currentSetScore.render();
};

tennis.Game.prototype.scorePoint = function(player) {
	this.currentGameScore.scorePoint(player);
	if(this.currentGameScore.isCompleted()) {
		this.resetGameScore();
		this.currentSetScore.winsGame(player);
	}	
};

module.exports = tennis;
