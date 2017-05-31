helpState = {
	
	create:function(){
	    game.stage.backgroundColor="#f0f0f0";
		btnback = game.add.button(330,390, 'backBtn', this.balik);

		game.add.text(110, 200,"1.You need to catch the material so that you will have a score.",{fill:'black',font:'15px Times New Roman'});
         game.add.text(110, 250,"2.But remember do not let the material to touch the ground otherwise your game is over.",{fill:'black',font:'15px Times New Roman'});
	}, 
    update:function(){

    },
    balik: function(){
		game.state.start("menu");
	},
}