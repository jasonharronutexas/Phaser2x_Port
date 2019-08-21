/*global Phaser*/

export default class Scene5 extends Phaser.Scene {
  constructor () {
    super("Scene5");
  }
  init(){
  }

  preload(){

  }

  create(){
    var accel = 400, platform, platformGroup;
    this.cameras.main.setBackgroundColor(0xff99dd);
    
//    addChangeStateEventListeners();
    var centerX = 1500 / 2;
    this.player = this.physics.add.sprite(600, 500, 'adam');
    this.player.setScale(0.3);
    platform = this.physics.add.sprite(0, 500, 'platform');
    platformGroup = this.physics.add.group();
    platformGroup.create(350, 375, 'platform');
    platformGroup.create(650, 200, 'platform');
    platformGroup.create(900, 500, 'platform');
    platformGroup.add(platform); //add the missing platform to the platform group

    this.player.body.gravity.y = 500;
    this.player.body.bounce.y = 0.3;
    this.player.body.drag.x = 400;
    this.player.body.collideWorldBounds = true;

    platform.body.immovable = true;
    platformGroup.children.iterate(function (child) {
        child.body.immovable = true; 
    });

    this.physics.add.collider(this.player, platformGroup);

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
      
          this.addChangeSceneEventListeners();
  }



  update(){
    
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
      
  /*
    game.physics.arcade.collide(adam, [platform, platformGroup]);
    if (game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
      adam.body.acceleration.x = -accel;
    } else if (game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      adam.body.acceleration.x = accel;
    } else {
      adam.body.acceleration.x = 0;
    }
    if (game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
      adam.body.velocity.y = -300;
    }
    */
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
