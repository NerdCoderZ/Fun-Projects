var play; 
var help;
var background;
var menuNumber;

class scene1 extends Phaser.Scene{
	constructor(){
		super({key: 'loading'});
	}



	preload(){
		this.load.image('background', 'assets/loadingpage.png')
	}

	create(){
		//adds the loading screen background
		background = this.add.image(400, 300,'background');

		//adds in the interactive text buttons
		play = this.add.text(280, 420, 'Play Game', {font: 'bold 40px monospace', fill: 'green'});
		help = this.add.text(300, 480, 'Options', {font: 'bold 40px monospace', fill: 'green'});

		//sets the button to interactive
		play.setInteractive({useHandCursor: true});
		help.setInteractive({useHandCursor: true});

		//menu key
		menuNumber = -1;

		play.on('pointerup', function(){

			menuNumber = 0;

		});

		help.on('pointerup', function(){

			menuNumber = 1;

		});

	}

	update(){

		if(menuNumber == 0){

			this.scene.start('playing');

		}

		if(menuNumber == 1){

			this.scene.start('instructions');

		}

	}

}
