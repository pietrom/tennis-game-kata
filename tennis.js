function createCurrentGameScore(pl1, pl2) {
	var currentGameScore = {};
	currentGameScore[pl1] = 0;
	currentGameScore[pl2] = 0;
	return currentGameScore;
};

var tennis = {	
	whoami: 'The Tennis Game kata',
	Game: function(player1, player2) {
		this.player1 = player1;
		this.player2 = player2;
		this.currentGameScore = createCurrentGameScore(player1, player2);
	}
};

tennis.Game.prototype.getCurrentGameScore = function() {
	return this.currentGameScore;
};

tennis.Game.prototype.getCurrentSetScore = function() {
	var score = {};
	score[this.player1] = 0;
	score[this.player2] = 0;
	return score;
};

tennis.Game.prototype.scorePoint = function(player) {
	this.currentGameScore[player] += 15;
};

module.exports = tennis;
