'use strict';

var LoadState = {};

LoadState.preload = function() {
	// load assets
	game.load.image('turtle', 'assets/turtle.png');
	game.load.image('background', 'assets/background.png');
	game.load.image('back_tile', 'assets/back_tile.png');
	game.load.image('palette', 'assets/palette.png');

	// load data
	game.load.json('level', 'data/level.json');
};

LoadState.create = function() {
	// start the game
	game.state.start('setup');
};