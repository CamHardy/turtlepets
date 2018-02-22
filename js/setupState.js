'use strict';

var SetupState = {};

SetupState.init = function () {
	// init input
	game.time.advancedTiming = true;

	// create any groups here
	this.turtles = [];

	// turtles are turtles
	// decorations are sprites that cannot be interacted with
	// items are sprites that can be interacted with (food, toys, etc.)
	// maybe have other entities like trees?

	//this.turtles = game.add.group();
	//this.decorations = game.add.group();
	//this.items = game.add.group();
};

SetupState.create = function () {
	// create level
	this._spawnBackTile();
	this._loadLevel(game.cache.getJSON('level'));
};

SetupState.update = function () {
	// handle input
	// handle collisions
	// update stuff (turtles, items, decorations, etc.)
};

SetupState.render = function () {
	// show fps
	game.debug.text(game.time.fps || '--', 2, 14, '#cccccc');
};

SetupState._spawnBackground = function () {
	this.background = game.add.image(0, 0, 'background');
	this.background.width = game.width;
	this.background.height = game.height;
};

SetupState._spawnBackTile = function () {
	this.backtile = game.add.tileSprite(0, 0, game.width, game.height, 'back_tile');
};

SetupState._loadLevel = function (data) {
	this._spawnTurtle(data.turtles);
	//data.decorations.forEach(this._spawnDecoration, this);
	//data.items.forEach(this._spawnItem, this);

	for (var i = 0; i < 10; i++) {
		do {
			this.turtle = new Turtle(game);
		}
		while (this.turtle.body.embedded);

		game.add.existing(this.turtle);
		this.turtles.push(this.turtle);
		//this.turtles[i].body.angularVelocity = 500 - 100 * i;
	}
};

SetupState._spawnTurtle = function (turtles) {
	turtles.forEach(function)
	// spawn turtles and add it to the array/group
	let turtle = new Turtle(game);
	game.add.existing(turtle);
	this.turtles.push(turtle);

	// replace with this once groups are implemented:
	//let turtle = new Turtle(game);
	//this.turtles.add(turtle);
}

SetupState._spawnDecoration = function () {
	// spawn decorations
	let deco = this.decorations.create(decoration.x, decoration.y, '')
}

SetupState._spawnItem = function () {
	// spawn item
}
