menuState = {
	create: function(){
		bg = game.add.image(0,0,"bg");
		btnplay = game.add.button(330,350, 'start', this.laro);
		btnhelp = game.add.button(330,390, 'help', this.tulong);
		btnabout = game.add.button(330,430, 'about', this.tungkol);
	},
	update: function(){
		
	},
	laro: function(){
		game.state.start("play");
	},
	tulong:function(){
		game.state.start("help");
	},
	tungkol:function(){
		game.state.start("about");
	}
}