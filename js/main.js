'use strict';

var game = new Phaser.Game(800, 400, Phaser.AUTO, 'game');
game.state.add('setup', SetupState);
game.state.add('load', LoadState);
game.state.start('load');