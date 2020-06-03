var back;
var menuNum;
var control;

class instruction extends Phaser.Scene{
	constructor(){
		super({key: 'instructions'});
	}

	preload(){

		this.load.image('background', 'assets/loadingpage.png')

	}



	create(){

		this.add.image(400, 300,'background');

		control = this.add.text(320, 420, 'Controls', {font: 'bolder 30px monospace', fill: 'green'});
		control.setInteractive({useHandCursor: true});

		this.add.text();

		back = this.add.text(480, 550, 'Back To Main Menu', {font: 'bolder 30px monospace', fill: 'green'});
		back.setInteractive({useHandCursor: true});

		menuNum = -1;

		back.on('pointerup', function(){
			
			menuNum = 0;

		});

		control.on('pointerup', function(){

			menuNum = 1;

		});

	}

	update(){

		if(menuNum == 0){

			this.scene.start('loading');

		}

		if(menuNum == 1){

			this.scene.start('gameControls');

		}




	}


}