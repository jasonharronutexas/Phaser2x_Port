/*global Phaser*/
export default class GameScene extends Phaser.Scene {
  constructor () {
    super('Game');
  }
  init(){
  }

  preload(){

  }

  create(){
    var centerX = 1500 / 2;
    var centerY = 1000 / 2; 

    var treeBG = this.add.sprite(2813 / 2, centerY, 'tree');

    this.player = this.physics.add.sprite(100, 400, 'adam'); //(x, y, 'name')
    this.player.setScale(0.7); //Scale sprite to 70% of original size
    this.player.setCollideWorldBounds(true);
    this.physics.world.setBounds(0, 250, 2813, 750); 
    this.anims.create({
        key: 'walk',
        frames: this.anims.generateFrameNumbers('adam', { start: 0, end: 4 }),
        frameRate: 10,
        repeat: -1
    });
    this.anims.create({
        key: 'idle',
        frames: this.anims.generateFrameNumbers('adam', { start: 0, end: 0 }),
        frameRate: 10,
        repeat: -1
    });
        
    this.cameras.main.setBounds(0, 0, 2813, 1000);
    this.cameras.main.startFollow(this.player);
    
    this.addChangeSceneEventListeners();

  }

  update() {
    
    var speed = 6;

    var cursors = this.input.keyboard.createCursorKeys();

    if (cursors.left.isDown){
      this.player.x -= speed;
      this.player.anims.play('walk', true);
      this.player.flipX = true;
    //this.player.setVelocityX(-160);
    }
    else if (cursors.right.isDown){
      this.player.x += speed;
      this.player.anims.play('walk', true); 
      this.player.flipX = false;
    }
    else {
      this.player.anims.play('idle', true);
    }
    if (cursors.up.isDown){
      this.player.y -= speed;
    //this.player.setVelocityX(-160);
    }
    else if (cursors.down.isDown){
      this.player.y += speed;
    }
    else {

    }
      
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
    //this.input.keyboard.on('keydown_ONE', function (event) {
    //  this.scene.start('Scene9');
    //}, this);
  }
}



/*

function changeScene(i, sceneNum){
  console.log('Scene' + sceneNum);
  this.scene.start('Scene' + sceneNum);
}

function addKeyCallback(key, fn, args){
  this.input.keyboard.addKey(key).onDown.add(fn, null, null, args);
}

function addChangeSceneEventListeners(){
  
  addKeyCallback(Phaser.Keyboard.ZERO, changeScene, 0);
  addKeyCallback(Phaser.Keyboard.ONE, changeScene, 1);
  addKeyCallback(Phaser.Keyboard.TWO, changeScene, 2);
  addKeyCallback(Phaser.Keyboard.THREE, changeScene, 3);
  addKeyCallback(Phaser.Keyboard.FOUR, changeScene, 4);
  addKeyCallback(Phaser.Keyboard.FIVE, changeScene, 5);
  addKeyCallback(Phaser.Keyboard.SIX, changeScene, 6);
  addKeyCallback(Phaser.Keyboard.SEVEN, changeScene, 7);
  addKeyCallback(Phaser.Keyboard.EIGHT, changeScene, 8);
  addKeyCallback(Phaser.Keyboard.NINE, changeScene, 9);
}
*/