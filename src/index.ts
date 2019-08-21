import Phaser from "phaser";
import config from "./config.ts";
import BootScene from "./scenes/BootScene.ts";
import PreloaderScene from "./scenes/PreloaderScene.ts";
import TitleScene from "./scenes/TitleScene.ts";
import OptionsScene from "./scenes/OptionsScene.ts";
import CreditsScene from "./scenes/CreditsScene.ts";
import Scene0 from "./scenes/Scene0.ts";
import Scene1 from "./scenes/Scene1.ts";
import Scene2 from "./scenes/Scene2.ts";
import Scene3 from "./scenes/Scene3.ts";
import Scene4 from "./scenes/Scene4.ts";
import Scene5 from "./scenes/Scene5.ts";
import Scene6 from "./scenes/Scene6.ts";
import Scene7 from "./scenes/Scene7.ts";
import Scene8 from "./scenes/Scene8.ts";
//import Scene9 from "./Scenes/Scene9.ts";
import Model from "./Model.ts";
//import Button from "./objects/Button.ts";

class Game extends Phaser.Game {
  constructor() {
    super(config);
    const model = new Model();
    this.globals = { model, bgMusic: null };
    this.scene.add("Boot", BootScene);
    this.scene.add("Preloader", PreloaderScene);
    this.scene.add("Title", TitleScene);
    this.scene.add("Options", OptionsScene);
    this.scene.add("Credits", CreditsScene);
    //this.scene.add('Game', GameScene);
    this.scene.add("Scene0", Scene0);
    this.scene.add("Scene1", Scene1);
    this.scene.add("Scene2", Scene2);
    this.scene.add("Scene3", Scene3);
    this.scene.add("Scene4", Scene4);
    this.scene.add("Scene5", Scene5);
    this.scene.add("Scene6", Scene6);
    this.scene.add("Scene7", Scene7);
    this.scene.add("Scene8", Scene8);
    //this.scene.add("Scene9", Scene9);
    this.scene.start("Boot");
  }
}
window.game = new Game();
