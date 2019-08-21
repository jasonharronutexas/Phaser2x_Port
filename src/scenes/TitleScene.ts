/*global Phaser*/
import Button from "/objects/Button.ts";

export default class TitleScene extends Phaser.Scene {
  constructor() {
    super("Title");
  }
  preload() {
    this.width = this.cameras.main.width;
    this.height = this.cameras.main.height;
  }
  create() {
    // add logo image
    var logo = this.add.image(this.width / 2, 120, "logo");
    logo.setScale(0.4);

    this.cameras.main.setBackgroundColor(0x007777);

    // Game
    this.gameButton = new Button(
      this,
      this.width / 2,
      this.height / 2 - 40,
      "blueButton1",
      "blueButton2",
      "Play",
      "Scene1"
    );

    // Options
    this.optionsButton = new Button(
      this,
      this.width / 2,
      this.height / 2 + 50,
      "blueButton1",
      "blueButton2",
      "Options",
      "Options"
    );

    // Credits
    this.creditsButton = new Button(
      this,
      this.width / 2,
      this.height / 2 + 140,
      "blueButton1",
      "blueButton2",
      "Credits",
      "Credits"
    );

    // FullScreen

    var x = this.width / 2 - 100;
    var y = this.height / 2 + 220;

    var FSbutton = this.add.sprite(x, y, "blueButton1").setInteractive();
    var FStext = this.add.text(x, y, "FullScreen", {
      fontSize: "32px",
      fill: "#fff"
    });
    Phaser.Display.Align.In.Center(FSbutton, FStext);

    // this.add(FSbutton);
    // this.add(FStext);

    FSbutton.on(
      "pointerdown",
      function() {
        this.scale.toggleFullscreen();
        if (!this.scale.isFullscreen) {
          this.scale.startFullscreen();
        }
      },
      this
    );
    FSbutton.on("pointerover", function() {
      FSbutton.setTexture("blueButton2");
    });

    FSbutton.on("pointerout", function() {
      FSbutton.setTexture("blueButton1");
    });

    //this.scene.add.existing(this);

    //fade in buttons
    this.tweens.add({
      targets: this.gameButton,
      alpha: { from: 0, to: 1 },
      duration: 500,
      ease: "Linear"
    });

    this.tweens.add({
      targets: this.optionsButton,
      alpha: { from: 0, to: 1 },
      duration: 500,
      ease: "Linear"
    });

    this.tweens.add({
      targets: this.creditsButton,
      alpha: { from: 0, to: 1 },
      duration: 500,
      ease: "Linear"
    });

    this.tweens.add({
      targets: FSbutton,
      alpha: { from: 0, to: 1 },
      duration: 500,
      ease: "Linear"
    });
    this.tweens.add({
      targets: FStext,
      alpha: { from: 0, to: 1 },
      duration: 500,
      ease: "Linear"
    });

    this.model = this.sys.game.globals.model;
    if (this.model.bgMusicPlaying === false) {
      this.bgMusic = this.sound.add("bgMusic", { volume: 0.5, loop: true });
      this.bgMusic.play();
      if (this.model.musicOn === true) {
        //this.bgMusic.play();
        this.model.bgMusicPlaying = true;
        this.sys.game.globals.bgMusic = this.bgMusic;
      } else {
        this.model.bgMusicPlaying = false;
        this.bgMusic.stop();
        this.sys.game.globals.bgMusic = this.bgMusic;
      }
    }
  }

  centerButton(gameObject, offset = 0) {
    Phaser.Display.Align.In.Center(
      gameObject,
      this.add.zone(
        this.width / 2,
        this.height / 2 - offset * 100,
        this.width,
        this.height
      )
    );
  }

  centerButtonText(gameText, gameButton) {
    Phaser.Display.Align.In.Center(gameText, gameButton);
  }
  fullScreen() {
    console.log("Level Up!");
  }
}
