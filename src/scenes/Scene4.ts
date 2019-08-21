/*global Phaser*/
export default class Scene4 extends Phaser.Scene {
  constructor () {
    super("Scene4");
  }
  init(){
  }

  preload(){

  }

  create(){
    this.cameras.main.setBackgroundColor(0xcc66ff);
   // addChangeStateEventListeners();

    var a1 = this.add.sprite(100, 150, 'adam');
    a1.setScale(0.3);
    var a2 = this.add.sprite(300, 150, 'adam');
    a2.setScale(0.3);
    var a3 = this.add.sprite(500, 500, 'adam');
    a3.setScale(0.3);
    var a4 = this.add.sprite(700, 150, 'adam');
    a4.setScale(0.3);
    var a5 = this.add.sprite(900, 150, 'adam');
    a5.setScale(0.3);
    

    this.tweens.add({
        targets: a1,
        x: 100,
        y: 500,
        ease: 'Cubic',
        duration: 2000,
        //repeat: -1,
        //yoyo: true
    });
    var i = this.tweens.add({
        targets: a2,
        x: 100,
        y: 150,
        ease: 'Elastic',
        duration: 1000
    });

    this.tweens.add({
        targets: a3,
        y: 100, //start from current value <--NOT WORKING
        ease: 'Circle',
        duration: 1500
    });

   this.tweens.add({
        targets: a4,
        x: 500,
       y: 500,
        ease: 'Linear',
        delay: 1000,
        duration: 1000,
        repeat: -1,
        //repeatDelay: 1000,
        yoyo: true
   });
   
    this.tweens.add({
        targets: a5,
        alpha: 0,
        duration: 5000,
        ease: 'Bounce'
    });
    this.addChangeSceneEventListeners();
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
