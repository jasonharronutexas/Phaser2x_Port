/*global Phaser*/

export default class Scene6 extends Phaser.Scene {
  constructor () {
    super("Scene6");
  }
  init(){
  }

  preload(){
    this.width = this.cameras.main.width;
    this.height = this.cameras.main.height;
  }

  create(){
    var centerX = this.width / 2;
    this.cameras.main.setBackgroundColor(0xcc6699);
        //addChangeStateEventListeners();

    var volcano = this.add.sprite(centerX, 500, 'volcano');
      volcano.setScale(0.5);

    var particles0 = this.add.particles('redBall');
    var particles1 = this.add.particles('orBall');
    

    
    

    var emitter1 = particles0.createEmitter({
        lifespan: 3000,
        speedX: { min: -500, max: 500 },
        speedY: { min: -400, max: -100 },
      scale: {start: 1, end: 0},
      blendMode: 'ADD'
    });
emitter1.setPosition(this.width/2, 350);
emitter1.setGravityY(200);
      
          var emitter2 = particles1.createEmitter({
        lifespan: 3000,
        speedX: { min: -500, max: 500 },
        speedY: { min: -400, max: -100 },
      scale: {start: 1, end: 0},
      blendMode: 'ADD'
    });
emitter2.setPosition(this.width/2, 350);
emitter2.setGravityY(200);

   // emitter.maxParticleSpeed.set(300, -300);
   // emitter.minParticleSpeed.set(-300, -100);
   // emitter.gravity = 300;


//    this.time.events.add(2000, function() {
      //emitter.start(false, 5000, 20);
      //this.time.events.loop(500, function() {
      //  if (emitter.on) {
       //   emitter.on = false;
       // } else {
       //   emitter.on = true;
       // }
     // });
      
          this.addChangeSceneEventListeners();
    }
    
  update(){
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