'use strict';

// Each turtle will have
// id
// level
// primary color
// secondary color
// shell pattern
// current value
// max value
// age (sprite size is based on age)
// mood (good/evil spectrum)
// a bunch of stats (speed, strength, dexterity, etc)
function Turtle(game) {
	Phaser.Sprite.call(this, game, game.world.randomX, game.world.randomY, 'turtle');

    // anchor point
	this.anchor.set(0.5, 0.5);

    // animations
    // idle
    // walk/crawl
    // hide
    // eat
    // drink
    // sleep
    // dance(?)
    // swim(?)
    // attack(?)
    // poop(?)

    // physics properties
    game.physics.enable(this);
    this.body.collideWorldBounds = true;
    this.body.bounce.set(1);

    this.explore();
    this.state = 'IDLE';
    // constructed in idle behaviour
    // store behaviour as a persistent state

    // init stats (store them so they persist)
}

// inherit from Phaser.Sprite
Turtle.prototype = Object.create(Phaser.Sprite.prototype);
Turtle.prototype.constructor = Turtle;

Turtle.prototype.update = function () {
	// change animations if necessary
	// if state == 'IDLE' then play idle animation
}

Turtle.prototype.explore = function () {
	// turtle will wander around the screen, colliding with walls and other turtles
	/*
	setInterval(function (heck) {
		heck.body.velocity.x = 50 - Math.random() * 100; 
		heck.body.velocity.y = 50 - Math.random() * 100;
	}, 1000 + Math.random() * 1000, this);
	*/
	this.body.velocity.x = game.rnd.realInRange(-200, 200); 
	this.body.velocity.y = game.rnd.realInRange(-200, 200);
}

Turtle.prototype.recolor = function () {
	var palette = game.add.bitmapdata(game.cache.getImage('palette').width, game.cache.getImage('palette').height);
	// add palette.png to bmd
	//game.cache.addBitmapData('shader', bmd);
	var paletteRect = new Phaser.Rectangle(); // ???
}

//TODO: add behaviours (crawl, idle, sleep, swim(?), hide, interact, attack(?), eat, drink, poop)
//TODO: add animations for behaviours