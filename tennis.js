var tennis = {	
	whoami: 'The Tennis Game kata',
	Game: function(player1, player2) {
		this.player1 = player1;
		this.player2 = player2;
		this.currentGameScore = {};
		this.currentGameScore[this.player1] = 0;
		this.currentGameScore[this.player2] = 0;
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
