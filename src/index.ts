import Phaser from "phaser";
import config from "./config.ts";
import BootScene from "../scenes/BootScene.ts";

class Game extends Phaser.Game {
  constructor() {
    super(config);
    this.scene.add("Boot", BootScene);
    this.scene.start("Boot");
  }
}
window.game = new Game();
