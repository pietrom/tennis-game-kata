var tennis = {	
	whoami: 'The Tennis Game kata',
	Game: function(player1, player2) {
		this.player1 = player1;
		this.player2 = player2;
	}
};

tennis.Game.prototype.getCurrentGameScore = function() {
	var score = {};
	score[this.player1] = 0;
	score[this.player2] = 0;
	return score;
};

tennis.Game.prototype.getCurrentSetScore = function() {
	var score = {};
	score[this.player1] = 0;
	score[this.player2] = 0;
	return score;
};

module.exports = tennis;
