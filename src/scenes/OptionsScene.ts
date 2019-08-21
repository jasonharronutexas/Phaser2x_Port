/*global Phaser*/
import Button from "/objects/Button.ts";

export default class OptionsScene extends Phaser.Scene {
  constructor() {
    super("Options");
  }

  preload() {
    this.width = this.cameras.main.width;
    this.height = this.cameras.main.height;
  }

  create() {
    this.cameras.main.setBackgroundColor(0x007777);
    this.model = this.sys.game.globals.model;

    this.text = this.add.text(this.width / 2 - 75, 100, "Options", {
      fontSize: 40
    });
    this.musicButton = this.add.image(this.width / 2 - 125, 200, "checkedBox");
    this.musicText = this.add.text(this.width / 2 - 75, 190, "Music Enabled", {
      fontSize: 24
    });

    this.soundButton = this.add.image(this.width / 2 - 125, 300, "checkedBox");
    this.soundText = this.add.text(this.width / 2 - 75, 290, "Sound Enabled", {
      fontSize: 24
    });

    this.musicButton.setInteractive();
    this.soundButton.setInteractive();

    this.musicButton.on(
      "pointerdown",
      function() {
        this.model.musicOn = !this.model.musicOn;
        this.updateAudio();
      }.bind(this)
    );

    this.soundButton.on(
      "pointerdown",
      function() {
        this.model.soundOn = !this.model.soundOn;
        this.updateAudio();
      }.bind(this)
    );

    this.menuButton = new Button(
      this,
      this.width / 2,
      500,
      "blueButton1",
      "blueButton2",
      "Menu",
      "Title"
    );

    this.updateAudio();
  }

  updateAudio() {
    if (this.model.musicOn === false) {
      this.musicButton.setTexture("box");
      if (this.model.bgMusicPlaying === true) {
        this.sys.game.globals.bgMusic.stop();
      }
      this.model.bgMusicPlaying = false;
    } else {
      this.musicButton.setTexture("checkedBox");
      if (this.model.bgMusicPlaying === false) {
        this.sys.game.globals.bgMusic.play();
        this.model.bgMusicPlaying = true;
      }
    }

    if (this.model.soundOn === false) {
      this.soundButton.setTexture("box");
    } else {
      this.soundButton.setTexture("checkedBox");
    }
  }
}
