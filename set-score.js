var _ = require('lodash');

var SetScore = function(players) {
	this.players = players;
	this.score = [0, 0];
};

SetScore.prototype.winsGame = function(player) {
	this.score[this.players.indexOf(player)]++;
};

SetScore.prototype.render = function() {
	var score = {};
	score[this.players[0]] = this.score[0];
	score[this.players[1]] = this.score[1];
	return score;
};

module.exports = SetScore;