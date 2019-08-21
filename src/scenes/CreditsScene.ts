/*global Phaser*/
/*jshint -W030 */
export default class CreditsScene extends Phaser.Scene {
  constructor () {
    super('Credits');
  }

preload() {
    this.width = this.cameras.main.width;
    this.height = this.cameras.main.height;
}

  create () {
    this.creditsText = this.add.text(0, 0, 'Credits', { fontSize: '32px', fill: '#fff' });
    this.madeByText = this.add.text(0, 0, 'Created By: Jason Harron', { fontSize: '26px', fill: '#fff' });
    
      var tatertot = this.add.sprite(0, 0, 'tatertot');
    tatertot.setScale(0.4);
    
      this.assistedByText = this.add.text(0, 0, 'Executive Producer: Tater Tot the Corgi', { fontSize: '26px', fill: '#fff' });
    this.zone = this.add.zone(this.width/2, this.height/2, this.width, this.height);

    Phaser.Display.Align.In.Center(
      this.creditsText,
      this.zone
    );

    Phaser.Display.Align.In.Center(
      this.madeByText,
      this.zone
    );
      
          Phaser.Display.Align.In.Center(
      tatertot,
      this.zone
    );
      
    Phaser.Display.Align.In.Center(
      this.assistedByText,
      this.zone
    );

    this.madeByText.setY(1000);
    tatertot.setY(1600);
    this.assistedByText.setY(1200);

    this.creditsTween = this.tweens.add({
      targets: this.creditsText,
      y: -100,
      ease: 'Power1',
      duration: 3000,
      delay: 1000,
      onComplete: function () {
        this.destroy;
      }
    });

    this.madeByTween = this.tweens.add({
      targets: this.madeByText,
      y: -300,
      ease: 'Power1',
      duration: 8000,
      delay: 1000,
      onComplete: function () {
        this.destroy;
      }
    });
      
      
    this.assistedByTween = this.tweens.add({
      targets: this.assistedByText,
      y: -100,
      ease: 'Power1',
      duration: 8000,
      delay: 1000,
      onComplete: function () {
        this.destroy;
      }
    });
      
    var timeline = this.tweens.createTimeline();
    
    timeline.add({
      targets: tatertot,
      y: 300,
      ease: 'Power1',   
      duration: 8000,
      delay: 1000,
    });
      timeline.add({
          targets: tatertot,
          alpha: 0,
          duration: 1000,

      });
      timeline.add({
        targets: tatertot,
          delay: 1000,
        onComplete: function () {
            tatertot.destroy;
            this.scene.start('Title');
        }.bind(this)
      });
      
      timeline.play();
      
  }
}