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

function renderGameScore(score) {
	var scores = ['0', '15', '30'];

	if(score >= scores.length)
		return '40';

	return scores[score];
}

tennis.Game.prototype.getCurrentGameScore = function() {
	var score = {};
	var score1 = this.currentGameScore[this.player1];
	var score2 = this.currentGameScore[this.player2];


	score[this.player1] = renderGameScore(score1);
	score[this.player2] = renderGameScore(score2);

	if(score1 > 3 && score1 > score2)
		score[this.player1] += '*';
	if(score2 > 3 && score2 > score1)
		score[this.player2] += '*';

	return score;
};

tennis.Game.prototype.getCurrentSetScore = function() {
	var score = {};
	score[this.player1] = 0;
	score[this.player2] = 0;
	return score;
};

tennis.Game.prototype.scorePoint = function(player) {
	this.currentGameScore[player]++;
};

module.exports = tennis;
