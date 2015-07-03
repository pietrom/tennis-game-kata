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

function renderGameScore(score1, score2) {
	var scores = ['0', '15', '30', '40'];
	var isAdvantage = function(sc1, sc2) {
		return sc1 >= scores.length && sc1 > sc2;
	};
	var baseScore = scores[Math.min((scores.length - 1), score1)];
	return baseScore + (isAdvantage(score1, score2) ? '*' : '');
}

tennis.Game.prototype.getCurrentGameScore = function() {
	var score = {};
	var score1 = this.currentGameScore[this.player1];
	var score2 = this.currentGameScore[this.player2];

	score[this.player1] = renderGameScore(score1, score2);
	score[this.player2] = renderGameScore(score2, score1);

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


// var stateLove = {
// 	next : function() {
// 		return state15;
// 	},

// 	render : function() {
// 		return '0';
// 	}
// };

// var state15 = {
// 	next : function() {
// 		return state30;
// 	},

// 	render : function() {
// 		return '15';
// 	}
// };

// var state30 = {
// 	next : function() {
// 		return  state40;
// 	},

// 	render : function() {
// 		return '30';
// 	}
// };


// var state40 = {
// 	next : function(other) {

// 		return  stateAdvantage;
// 	},

// 	render : function() {
// 		return '40';
// 	}
// };



module.exports = tennis;
