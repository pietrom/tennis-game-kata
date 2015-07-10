var _ = require('lodash');

var GameScore = function(players) {
	this.players = players;	
	this.score = [0, 0];
};

GameScore.prototype.scorePoint = function(player, onCompleted) {
	this.score[this.players.indexOf(player)]++;
	if(this.isCompleted()) {
		onCompleted.call();
		this.score = [0, 0];
	}
};

GameScore.prototype.isCompleted = function() {
	var max = _.max(this.score);
	var min = _.min(this.score);
	return (max >= 4 && (max - min > 1));
};

function renderGameScore(score1, score2) {
	var scores = ['0', '15', '30', '40'];
	var isAdvantage = function(sc1, sc2) {
		return sc1 >= scores.length && sc1 > sc2;
	};
	var baseScore = scores[Math.min((scores.length - 1), score1)];
	return baseScore + (isAdvantage(score1, score2) ? '*' : '');
}

GameScore.prototype.render = function() {
	var score = {};

	score[this.players[0]] = renderGameScore(this.score[0], this.score[1]);
	score[this.players[1]] = renderGameScore(this.score[1], this.score[0]);

	return score;
};

module.exports = GameScore;