var palette = game.add.bitmapData(
	g_game.spriteAtlas.assets.frames.palette.frame.w, 
	g_game.spriteAtlas.assets.frames.palette.frame.h);

var paletteRect = new Phaser.Rectangle(
	g_game.spriteAtlas.assets.frames.palette.frame.x,
	g_game.spriteAtlas.assets.frames.palette.frame.y,
	g_game.spriteAtlas.assets.frames.palette.frame.w,
	g_gmae.spriteAtlas.assets.frames.palette.frame.h);

palette.copyRect('assetImage', paletteRect, 0, 0);
palette.update();

g_game.teams = ['grey', 'blue', 'cyan', 'green', 'yellow', 'orange', 'brown', 'red'];

var colorLookup = {};
var x, y;
var pixel, team;
for (y = 0; y < g_game.teams.length; y++) {
	team = g_game.teams[y];
	colorLookup[team] = [];
	for (x = 1; x < 8; x++) {
		pixel = palette.getPixelRGB(4 * x, 6 * y);
		colorLookup[team].push(pixel);
	}
}

g_game.unitTypes = ['soldier', 'motorbike', 'tank', 'sniper'];

// each sprite has 3 frames
var bmdUnits = game.add.bitmapData(
	g_game.spriteAtlas.assets.frames.soldier.frame.w * 3,
	g_game.spriteAtlas.assets.frames.soldier.frame.h * g_game.teams.length * g_game.unitTypes.length);

var atlasData = { frames: {} };

for (y = 0; y < g_game.teams.length; y++) {
	team = g_gmae.teams[y];

	// iterate unit types
	for (var u = 0; u < g_game.unitTypes.length; u++) {
		// iterate frames for each unit
		for (var f = 0; f < 3; f++) {
			// frames are named sprite, sprite1, sprite2
			var unitTypes = g_game.unitTypes[u] + (f ? f : '');
			// get frame dimensions from original texture atlas
			var frame = g_game.spriteAtlas.assets.frames[unitType].frame;

			// detination location in the new texture atlas
			var destX = f * frame.w;
			var destY = (y * g_game.unitTypes.length + u) * frame.h;
			// copy original sprite
			bmdUnits.copyRect('assetImage', new Phaser.Rectangle(frame.x, frame.y, frame.w, frame.h), destX, destY);
			// important, otherwise we can't read the pixel values
			bmdUnits.update();

			// use the blue pixel values of the original to look up the corresponding palette values
			for (i = 0; i < colorLookup.blue.length; i++) {
				bmdUnits.replaceRGB(
					colorLookup.blue[i].r, colorLookup.blue[i].g, colorLookup.blue[i].b, colorLookup.blue[i].a,
					colorLookup[team][i].r, colorLookup[team][i].g, colorLookup[team][i].b, colorLookup[team][i].a, new Phaser.Rectangle(destX, destY, frame.w, frame.h));
			}

			// add this sprite to our new texture atlas definition file
			atlasData.frames[team + unitType] = { frame: { x: destX, y: destY, w: frame.w, h: frame.h } };
		}
	}
}	

bmdUnits.update();

game.cache.addTextureAtlas('units', '', bmdUnits.canvas, atlasData, Phaser.Loader.TEXTURE_ATLAS_JSON_HASH);

this.game.add.sprite(10, 10, 'units', 'redsoldier');