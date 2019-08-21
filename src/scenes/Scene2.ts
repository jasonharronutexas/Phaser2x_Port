/*global Phaser*/
export default class Scene2 extends Phaser.Scene {
  constructor () {
    super('Scene2');
  }
  init(){
  }

  preload(){
    this.width = this.cameras.main.width;
    this.height = this.cameras.main.height;
  }

  create(){
    this.cameras.main.setBackgroundColor(0x008080);
    var barrel, bullets, velocity = 1000, enemy, bullet, enemyGroup;
    var centerX = this.width / 2;
    var centerY = this.height / 2; 
    this.nextFire = 0;
    this.fireRate = 200;

    var base = this.add.sprite(centerX, centerY, 'base');
    base.setScale(0.3);



  // this.bullets = this.physics.add.group( {
  //    defaultKey: 'bullet',
  //    maxSize: 10,
  //    checkWorldBounds: true,   
 //     outOfBoundsKill: true
 //  });
    
//    Phaser.Actions.ScaleXY(this.bullets.getChildren(), -0.5, -0.5); //<static> ScaleXY(items, scaleX [, scaleY] [, stepX] [, stepY] [, index] [, direction])

    //bullets.enableBody = true;
    //bullets.physicsBodyType = Phaser.Physics.ARCADE;
    //bullets.createMultiple(50, 'bullet');
   // bullets.setAll('checkWorldBounds', true);
   // bullets.setAll('outOfBoundsKill', true);
   // bullets.setAll('anchor.y', 0.5);
   // bullets.setAll('scale.x', 0.85);
   // bullets.setAll('scale.y', 0.85);

    this.barrel = this.add.sprite(centerX, centerY, 'barrel');
    this.barrel.setScale(0.4);
   
    this.bullets = this.physics.add.group ({
        defaultKey: 'bullet',
        maxSize: 10

    });
      
    this.bullets.children.iterate(function (child) {

        child.setScale(0.3);

});
    //this.bulletsGroup.createMultiple(10, 'bullet');
      
      //this.bullet = this.physics.add.sprite(this.barrel.x, this.barrel.y, 'bullet').setScale(0.5);
   //this.bullet.disableBody(true, true);
   // barrel.anchor.setTo(0.3, 0.5);

   
    this.enemyGroup = this.physics.add.group( {
      key: 'adam',
      repeat: 2,
      setXY: {
        x: 100,
        y: 100,
        stepX: 0,
        stepY: 200
      },
    });
   
    this.enemyGroup.children.iterate(function (child) {

        child.setScale(0.3);

});
      this.bigOne = this.physics.add.sprite(900, 300, 'adam');
      this.bigOne.flipX = true;

      this.enemyGroup.add(this.bigOne);


    this.input.on('pointermove', function(pointer) {
      var BetweenPoints = Phaser.Math.Angle.BetweenPoints;
      var angle = Phaser.Math.RAD_TO_DEG * BetweenPoints(this.barrel, pointer);
        this.barrel.setAngle(angle);
    }, this);
  
    this.input.on('pointerdown', this.shoot, this);

    this.addChangeSceneEventListeners();
  }
    
    

shoot(pointer) {
    var BetweenPoints = Phaser.Math.Angle.BetweenPoints;
    var angle = BetweenPoints(this.barrel, pointer); //Returns in RADs
    var velocityFromRotation = this.physics.velocityFromRotation;
    var velocity = new Phaser.Math.Vector2();
    velocityFromRotation(angle, 600, velocity);
    var bullet = this.bullets.get();
    bullet.setScale(0.3);
    bullet.setAngle(Phaser.Math.RAD_TO_DEG * angle);
    bullet.enableBody(true, this.barrel.x, this.barrel.y, true, true).setVelocity(velocity.x, velocity.y);
    
    

    }

  update(){
        this.bullets.children.each(function(b) {
            if (b.active) {
                 this.physics.add.overlap(b, this.enemyGroup, this.hitEnemy, null, this);
                if (b.y < 0) {
                    b.setActive(false);
                } else if (b.y > this.height) {
                    b.setActive(false);
                } else if (b.x < 0 ) {
                    b.setActive(false);
                } else if (b.x > this.width) {
                    b.setActive(false);
                }
            }
        }.bind(this));

  }

hitEnemy(bullet, enemy) {
    console.log('hit');
    enemy.disableBody(true, true);
    bullet.disableBody(true, true);
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


    /*
    if(game.time.now > nextFire) {
      nextFire = game.time.now + fireRate;
      console.log('firing');
      bullet = bullets.getFirstDead();
      bullet.reset(barrel.x, barrel.y);

      game.physics.arcade.moveToPointer(bullet, velocity);
      bullet.rotation = game.physics.arcade.angleToPointer(bullet);
    }
  }
)
    /*
    barrel.rotation = game.physics.arcade.angleToPointer(barrel);
    if (game.input.activePointer.isDown) {
      this.fire();
    }

    game.physics.arcade.overlap(bullets, enemy, this.hitEnemy);
    game.physics.arcade.overlap(enemyGroup, bullets, this.hitGroup);
  }

  fire() {
    if(game.time.now > nextFire) {
      nextFire = game.time.now + fireRate;
      console.log('firing');
      bullet = bullets.getFirstDead();
      bullet.reset(barrel.x, barrel.y);

      game.physics.arcade.moveToPointer(bullet, velocity);
      bullet.rotation = game.physics.arcade.angleToPointer(bullet);
    }
  }

  hitEnemy() {
    console.log('hit');
    enemy.kill();
    bullet.kill();
  }

hitGroup(e) {
    bullet.kill();
    e.kill();
  }
  
};
*/
