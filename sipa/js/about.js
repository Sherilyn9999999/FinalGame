aboutState={
	create:function(){
		game.stage.backgroundColor = "#f28190";
		btnback = game.add.button(330,390, 'backBtn', this.balik);

		game.add.text(110, 200,"This game is a final project for Game Development by:",{fill:'black',font:'20px Times New Roman'});
		game.add.text(110, 250,"SHERILYN VILLANUEVA CADALLO",{fill:'black',font:'20px Times New Roman'});
	},
	update: function(){
	},
	balik: function(){
		game.state.start("menu");
	},
}