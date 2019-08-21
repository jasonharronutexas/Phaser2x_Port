/*global Phaser, firebase*/
export default class Scene9 extends Phaser.Scene {
  constructor () {
    super("Scene9");
  }
  init(){
  }

  preload(){

  }

  create(){
    var fbObj; 
    var hsText = [];
    this.cameras.main.setBackgroundColor(0xffcc66);
    this.addChangeSceneEventListeners();
    this.ref = firebase.database().ref('/');

    for (var i = 1; i < 11; i++) {
      this.add.text(500, 20 + (i * 50), i + '. ', {fontSize: '40px'});
    }

    for (i = 0; i < 10; i++) {
      hsText[i] = this.add.text(570, 20+ ((i + 1) * 50), '', {fontSize: '40px'});
    }

    //var updateHSText = this.updateHSText;
    this.ref.on('value', function(snapshot) {
      fbObj = snapshot.val();
        console.log(fbObj);
       updateHSText2(fbObj.hs);
    }, this);
      
    function updateHSText2(hs) {
        for (var i = 0; i < 10; i++) {
        hsText[i].text = hs[i];
        }
    }
      
    var b1 = this.add.sprite(200, 100, 'button1', 0).setInteractive();
    b1.on('pointerover', function () {
        this.setFrame(1);
        //if(checkSound){sound.play('low')};
    });

    b1.on('pointerout', function () {
        this.setFrame(0);
    });

    b1.on('pointerup', function () {
      var score = Math.round(Math.random() * 100);
      fbObj.hs.push(score);
      fbObj.hs = fbObj.hs.sort(function(a, b) {
        return b - a;
      }).slice(0, 10);
      this.ref.set(fbObj);
      console.log(score);
    }, this);

    var b2 = this.add.sprite(200, 300, 'button2', 0).setInteractive();
    b2.on('pointerover', function () {
        this.setFrame(1);
       // if(checkSound){sound.play('low')};
    });

    b2.on('pointerout', function () {
        this.setFrame(0);
    });

    b2.on('pointerup', function () {
        this.ref.set({hs: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]});
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

