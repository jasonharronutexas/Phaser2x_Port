/*global Phaser*/
export default class BootScene extends Phaser.Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    this.load.image("logo", "./assets/elements_logo.png");
    this.centerX = this.cameras.main.width / 2;
    this.centerY = this.cameras.main.height / 2;
  }

  create() {
    //var logo = this.add.image(this.centerX, this.centerY, "logo");
    this.scene.start("Preloader");
  }
}
