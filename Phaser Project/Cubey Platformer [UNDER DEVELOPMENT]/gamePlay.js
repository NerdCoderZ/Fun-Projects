class gamePlay extends Phaser.Scene{
	constructor(){
		super({key: 'playing'});
	}

	preload(){
		this.load.image('gameBg', 'assets/gameBg.png');


	}



	create(){
		
		this.add.image(800, 600, 'gameBg');



	}	
}

