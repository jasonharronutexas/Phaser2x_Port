/*global Phaser*/

export default class Scene7 extends Phaser.Scene {
  constructor () {
    super("Scene7");
  }
  init(){
  }

  preload(){
    this.width = this.cameras.main.width;
    this.height = this.cameras.main.height;
  }

  create(){
    var arrow, startPointX, startPointY, endPointX, endPointY, swipeDirection, leeway = 80;
    var centerX = this.width / 2;
    var centerY = this.height / 2;

    this.cameras.main.setBackgroundColor(0xa6ff4d);
   // addChangeStateEventListeners();
    arrow = this.add.sprite(centerX, centerY, 'arrow');
    
    var downX, upX, downY, upY, threshold = 80;

    this.input.on('pointerdown', function (pointer) {
      downX = pointer.x;
      downY = pointer.y;
    });   

    this.input.on('pointerup', function (pointer) {
      upX = pointer.x;
      upY = pointer.y;
      if (upX < downX - threshold){
        //console.log("swipeleft");
        swipeDirection = 270;
      } else if (upX > downX + threshold) {
        //console.log("swiperight");
        swipeDirection = 90;
      } else if (upY < downY - threshold) {
        //console.log("swipeup");
        swipeDirection = 0;
      } else if (upY > downY + threshold) {
        //console.log("swipedown");
        swipeDirection = 180;
      }
      arrow.angle = swipeDirection;
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
