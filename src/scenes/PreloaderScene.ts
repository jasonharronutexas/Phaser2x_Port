/*global Phaser*/
export default class PreloaderScene extends Phaser.Scene {
  constructor() {
    super("Preloader");
  }

  init() {
    this.readyCount = 0;
  }

  preload() {
    var width = this.cameras.main.width;
    var height = this.cameras.main.height;
    this.cameras.main.setBackgroundColor(0x007777);

    // add logo image
    this.load.image("logo", "./assets/elements_logo.png");
    var logo = this.add.image(width / 2, 270, "logo");
    logo.setScale(0.8);

    // display progress bar
    var progressBar = this.add.graphics();
    var progressBox = this.add.graphics();
    progressBox.fillStyle(0x222222, 0.8);
    progressBox.fillRect(width / 2 - 250, 470, width / 2 - 30, 50);

    var loadingText = this.make.text({
      x: width / 2,
      y: height / 2 + 150,
      text: "Loading...",
      style: {
        font: "20px monospace",
        fill: "#ffffff"
      }
    });
    loadingText.setOrigin(0.5, 0.5);

    var percentText = this.make.text({
      x: width / 2,
      y: height / 2 + 195,
      text: "0%",
      style: {
        font: "18px monospace",
        fill: "#ffffff"
      }
    });
    percentText.setOrigin(0.5, 0.5);

    var assetText = this.make.text({
      x: width / 2,
      y: height / 2 + 250,
      text: "",
      style: {
        font: "18px monospace",
        fill: "#ffffff"
      }
    });
    assetText.setOrigin(0.5, 0.5);

    // update progress bar
    this.load.on("progress", function(value) {
      percentText.setText(parseInt(value * 100, 10) + "%");
      progressBar.clear();
      progressBar.fillStyle(0xffffff, 1);
      progressBar.fillRect(width / 2 - 240, 480, (width / 2 - 50) * value, 30);
    });

    // update file progress text
    this.load.on("fileprogress", function(file) {
      assetText.setText("Loading asset: " + file.key);
    });

    // remove progress bar when complete
    this.load.on(
      "complete",
      function() {
        progressBar.destroy();
        progressBox.destroy();
        loadingText.destroy();
        percentText.destroy();
        assetText.destroy();
        //this.scene.start("Title");
        this.ready();
        //move logo
        this.tweens.add({
          targets: logo,
          x: width / 2,
          y: 120,
          scale: 0.4,
          ease: "Cubic",
          duration: 2000
          //repeat: -1,
          //yoyo: true
        });
      }.bind(this)
    );

    this.timedEvent = this.time.delayedCall(3000, this.ready, [], this);

    // load assets needed in our game
    this.load.image("blueButton1", "assets/ui/blue_button02.png");
    this.load.image("blueButton2", "assets/ui/blue_button03.png");
    this.load.image("phaserLogo", "assets/logo.png");
    this.load.image("box", "assets/ui/grey_box.png");
    this.load.image("checkedBox", "assets/ui/blue_boxCheckmark.png");
    this.load.audio("bgMusic", ["assets/TownTheme.mp3"]);

    //Scene0 Assets
    this.load.spritesheet("adam", "assets/spritesheets/adamSheet.png", {
      frameHeight: 370,
      frameWidth: 240
    });
    this.load.image("tree", "assets/backgrounds/treeBG.png");

    //Scene1 Assets
    this.load.image("tiles", "assets/tilesets/tuxmon-sample-32px-extruded.png");
    this.load.tilemapTiledJSON("map", "assets/tilemaps/tuxemon-town.json");

    // An atlas is a way to pack multiple images together into one texture. I'm using it to load all
    // the player animations (walking left, walking right, etc.) in one image. For more info see:
    //  https://labs.phaser.io/view.html?src=src/animation/texture%20atlas%20animation.js
    // If you don't use an atlas, you can do the same thing with a spritesheet, see:
    //  https://labs.phaser.io/view.html?src=src/animation/single%20sprite%20sheet.js
    this.load.atlas(
      "atlas",
      "assets/atlas/atlas.png",
      "assets/atlas/atlas.json"
    );

    //Scene1_old Assets
    this.load.tilemapTiledJSON("field", "assets/tilemaps/field.json");
    this.load.image("grassTiles", "assets/tilemaps/grassTiles.png");
    this.load.image("rockTiles", "assets/tilemaps/rockTiles.png");
    //this.load.image('adam', 'assets/sprites/adam.png');

    //Scene2 Assets
    this.load.image("base", "assets/sprites/cannonBase.png");
    this.load.image("barrel", "assets/sprites/cannonBarrel.png");
    this.load.image("bullet", "assets/sprites/bullet.png");

    //Scene3 Assets
    this.load.spritesheet("button1", "assets/spritesheets/button1.png", {
      frameHeight: 145,
      frameWidth: 271
    });
    this.load.spritesheet("button2", "assets/spritesheets/button2.png", {
      frameHeight: 139,
      frameWidth: 305
    });
    this.load.spritesheet("button3", "assets/spritesheets/button3.png", {
      frameHeight: 130,
      frameWidth: 301
    });
    this.load.audio("pops", "assets/sounds/buttonPops.mp3");

    //Scene5 Assets
    this.load.image("platform", "assets/sprites/platform.png");

    //Scene6 Assets
    this.load.image("volcano", "assets/sprites/volcano.png");
    this.load.image("redBall", "assets/sprites/redBall.png");
    this.load.image("orBall", "assets/sprites/orBall.png");

    //Scene7 Assets
    this.load.image("arrow", "assets/sprites/arrow.png");

    //Scene8 Assets
    this.load.script(
      "webfont",
      "//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js"
    );

    //Credits Assets
    this.load.image("tatertot", "assets/sprites/tatertot.png");
  }

  ready() {
    //this.scene.start('Title');
    this.readyCount++;
    if (this.readyCount === 2) {
      this.scene.start("Title");
    }
  }
}
