/*global Phaser, WebFont*/
/*jshint -W040 */

export default class Scene8 extends Phaser.Scene {
  constructor() {
    super("Scene8");
  }
  init() {}

  preload() {}

  create() {
    WebFont.load({
      google: {
        families: ["Candal", "Finger Paint", "Montserrat"]
      }
    });
    this.cameras.main.setBackgroundColor(0x99e6e6);
    //addChangeStateEventListeners();

    var text =
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ultrices enim sem, quis interdum velit blandit eget. Suspendisse mollis est a lectus dictum ornare. Donec a suscipit magna. Sed mauris turpis, tristique quis ante ut, ullamcorper facilisis nisl. Proin quis orci faucibus, congue nisi ac, imperdiet justo. Donec scelerisque, libero.";
    this.spellOutText(100, 75, 800, text, 28, 20, "#fff", "Candal");
    //this.spellOutText(100, 600, 1100, text, 40, 20, '#000', 'Montserrat');
    this.spellOutText(100, 350, 800, text, 28, 40, "#000", "Finger Paint");

    this.addChangeSceneEventListeners();
  }

  spellOutText(x, y, width, text, fontSize, speed, fill, font) {
    var sentence = this.add.text(x, y, "", {
      fontSize: fontSize,
      fill: fill,
      fontFamily: font
    });
    var currentLine = this.add.text(10, 10, "", {
      fontSize: fontSize,
      fontFamily: font
    });
    currentLine.alpha = 0;
    var index = 0;
    var that = this; //Work around for trying to call a this within nested function
    var timer;

    startLoop(that);

    function startLoop(that) {
      timer = that.time.addEvent({
        delay: speed,
        callback: addChar,
        callbackScope: this,
        loop: true
      });
    }

    function addChar() {
      sentence.text += text[index];
      currentLine.text += text[index];

      if (currentLine.width > width && text[index] === " ") {
        sentence.text += "\n";
        currentLine.text = "";
      }
      if (index >= text.length - 1) {
        timer.remove();
        console.log("stop");
      }
      index++;
    }
  }

  addChangeSceneEventListeners() {
    this.input.keyboard.on(
      "keydown_ZERO",
      function(event) {
        this.scene.start("Scene0");
      },
      this
    );
    this.input.keyboard.on(
      "keydown_ONE",
      function(event) {
        this.scene.start("Scene1");
      },
      this
    );
    this.input.keyboard.on(
      "keydown_TWO",
      function(event) {
        this.scene.start("Scene2");
      },
      this
    );
    this.input.keyboard.on(
      "keydown_THREE",
      function(event) {
        this.scene.start("Scene3");
      },
      this
    );
    this.input.keyboard.on(
      "keydown_FOUR",
      function(event) {
        this.scene.start("Scene4");
      },
      this
    );
    this.input.keyboard.on(
      "keydown_FIVE",
      function(event) {
        this.scene.start("Scene5");
      },
      this
    );
    this.input.keyboard.on(
      "keydown_SIX",
      function(event) {
        this.scene.start("Scene6");
      },
      this
    );
    this.input.keyboard.on(
      "keydown_SEVEN",
      function(event) {
        this.scene.start("Scene7");
      },
      this
    );
    this.input.keyboard.on(
      "keydown_EIGHT",
      function(event) {
        this.scene.start("Scene8");
      },
      this
    );
    this.input.keyboard.on(
      "keydown_ESC",
      function(event) {
        this.scene.start("Title");
      },
      this
    );
    this.input.keyboard.on(
      "keydown_NINE",
      function(event) {
        this.scene.start("Scene9");
      },
      this
    );
  }
}
