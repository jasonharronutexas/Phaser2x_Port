/*global Phaser*/

export default class Scene3 extends Phaser.Scene {
  constructor () {
    super("Scene3");
  }
  init(){
  }

  preload(){

  }

  create(){
      this.model = this.sys.game.globals.model;
      console.log(this.model.soundOn);
      var checkSound = this.model.soundOn;
      //game.stage.backgroundColor = '#1a1aff';
    //addChangeStateEventListeners();

    var sound = this.sound.add('pops');
    sound.addMarker({
      name:'low', 
      start: 0.15, 
      duration: 0.5
    });
    sound.addMarker({
      name:'high', 
      start: 1.1, 
      duration: 1.5
    });


    var b1 = this.add.sprite(200, 100, 'button1', 0).setInteractive();
    b1.on('pointerover', function () {
        this.setFrame(1);
        if(checkSound){sound.play('low');}
    });

    b1.on('pointerout', function () {
        this.setFrame(0);
    });

    b1.on('pointerup', function () {
        if(checkSound){sound.play('high');}
        this.scene.start('Scene0');
    }, this);

    var b2 = this.add.sprite(500, 100, 'button2', 0).setInteractive();
    b2.on('pointerover', function () {
        this.setFrame(1);
        if(checkSound){sound.play('low');}
    });

    b2.on('pointerout', function () {
        this.setFrame(0);
    });

    b2.on('pointerup', function () {
        if(checkSound){sound.play('high');}
        this.scene.start('Scene1');
    }, this);

    var b3 = this.add.sprite(800, 100, 'button3', 0).setInteractive();
    b3.on('pointerover', function () {
        this.setFrame(1);
        if(checkSound){sound.play('low');}
    });

    b3.on('pointerout', function () {
        this.setFrame(0);
    });

    b3.on('pointerup', function () {
        if(checkSound){sound.play('high');}
        this.scene.start('Scene2');
    }, this);
  }

    addChangeSceneEventListeners(){
    this.input.keyboard.on('keydown_ZERO', function (event) {
      this.scene.start('Scene0');
    }, this);
    this.input.keyboard.on('keydown_ONE', function (event) {
      this.scene.start('Scene1');
    }, this);
    this.input.keyboard.on('keydown_TWO', function (event) {
      this.scene.start('Scene2');
    }, this);
    this.input.keyboard.on('keydown_THREE', function (event) {
      this.scene.start('Scene3');
    }, this);
    this.input.keyboard.on('keydown_FOUR', function (event) {
      this.scene.start('Scene4');
    }, this);
    this.input.keyboard.on('keydown_FIVE', function (event) {
      this.scene.start('Scene5');
    }, this);
    this.input.keyboard.on('keydown_SIX', function (event) {
      this.scene.start('Scene6');
    }, this);
    this.input.keyboard.on('keydown_SEVEN', function (event) {
      this.scene.start('Scene7');
    }, this);
    this.input.keyboard.on('keydown_EIGHT', function (event) {
      this.scene.start('Scene8');
    }, this);
    this.input.keyboard.on('keydown_ESC', function (event) {
      this.scene.start('Title');
    }, this);
    this.input.keyboard.on('keydown_NINE', function (event) {
      this.scene.start('Scene9');
    }, this);
  }
}