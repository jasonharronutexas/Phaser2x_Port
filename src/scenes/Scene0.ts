/*global Phaser*/
export default class Scene0 extends Phaser.Scene {
  constructor() {
    super("Scene0");
  }
  init() {}

  preload() {}

  create() {
    var centerY = 1000 / 2;

    this.treeBG = this.add.sprite(2813 / 2, centerY, "tree");

    this.player = this.physics.add.sprite(100, 400, "adam"); //(x, y, 'name')
    this.player.setScale(0.7); //Scale sprite to 70% of original size
    this.player.setCollideWorldBounds(true);
    this.physics.world.setBounds(0, 250, 2813, 750);
    this.anims.create({
      key: "walk",
      frames: this.anims.generateFrameNumbers("adam", { start: 0, end: 4 }),
      frameRate: 10,
      repeat: -1
    });
    this.anims.create({
      key: "idle",
      frames: this.anims.generateFrameNumbers("adam", { start: 0, end: 0 }),
      frameRate: 10,
      repeat: -1
    });

    this.cameras.main.setBounds(0, 0, 2813, 1000);
    this.cameras.main.startFollow(this.player);

    this.addChangeSceneEventListeners();
  }

  update() {
    var speed = 6;

    var cursors = this.input.keyboard.createCursorKeys();
    // var cursors = this.joyStick.createCursorKeys();

    if (cursors.left.isDown) {
      this.player.x -= speed;
      this.player.anims.play("walk", true);
      this.player.flipX = true;
      //this.player.setVelocityX(-160);
    } else if (cursors.right.isDown) {
      this.player.x += speed;
      this.player.anims.play("walk", true);
      this.player.flipX = false;
    } else {
      this.player.anims.play("idle", true);
    }
    if (cursors.up.isDown) {
      this.player.y -= speed;
      //this.player.setVelocityX(-160);
    } else if (cursors.down.isDown) {
      this.player.y += speed;
    } else {
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

  dumpJoyStickState() {
    var cursorKeys = this.joyStick.createCursorKeys();
    var s = "Key down: ";
    for (var name in cursorKeys) {
      if (cursorKeys[name].isDown) {
        s += name + " ";
      }
    }
    s += "\n";
    s += "Force: " + Math.floor(this.joyStick.force * 100) / 100 + "\n";
    s += "Angle: " + Math.floor(this.joyStick.angle * 100) / 100 + "\n";
    this.text.setText(s);
  }
}
