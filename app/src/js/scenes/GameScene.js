export default class GameScene extends Phaser.Scene {

    constructor() {
        super('GameScene');
        this.assetsBasePath = '/app/img/assets';
    }

    init() {
        this.playerSpeed = 1.5;
        this.enemySpeed = 2;
        this.enemyMaxY = 280;
        this.enemyMinY = 80;
    }

    preload() {

        this.loadAssets({
                name: 'background',
                path: 'background.png'
            },
            {
                name: 'player',
                path: 'player.png'
            },
            {
                name: 'dragon',
                path: 'dragon.png'
            },
            {
                name: 'treasure',
                path: 'treasure.png'
            },
            {
                name: 'dragon',
                path: 'dragon.png'
            }
            );
    }


    /**
     * Упрощённая функция загрузки изображений для спрайтов
     * */
    loadAssets(...imgCfg) {
        imgCfg.forEach((img) => {
            this.load.image(img.name, `${this.assetsBasePath}/${img.path}`);
        });
    }

    create() {
        const bg = this.add.sprite(0, 0, 'background');
        bg.setOrigin(0, 0);

        this.treasure = this.add.sprite(this.sys.game.config.width - 80, this.sys.game.config.height/2, 'treasure');
        this.treasure.setScale(0.6);

        this.player = this.add.sprite(40, this.sys.game.config.height / 2, 'player');
        this.player.setScale(0.5);

        this.enemies = this.add.group({
            key: 'dragon',
            repeat: 5,
            setXY: {
                x: 110,
                y: 100,
                stepX: 80,
                stepY: 20
            }
        });

        Phaser.Actions.ScaleXY(this.enemies.getChildren(), -0.5, -0.5);

        Phaser.Actions.Call(this.enemies.getChildren(), (enemy) => {
            enemy.speed = Math.random() * 2 + 1;
        });

        this.isPlayerAlive = true;

        this.cameras.main.resetFX();

    }

    update() {

        if (!this.isPlayerAlive){
            return false;
        }

        if (this.input.activePointer.isDown) {
            // console.log('click!');
            if (this.input.activePointer.x < this.player.x)
                this.player.x -= this.playerSpeed;
            else
                this.player.x += this.playerSpeed;

            if (this.input.activePointer.y < this.player.y)
                this.player.y -= this.playerSpeed;
            else if (this.input.activePointer.y > this.player.y)
                this.player.y += this.playerSpeed;
        }

        if (Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(),
                this.treasure.getBounds()))
        {
            this.gameOver();
        }

        let enemies = this.enemies.getChildren();
        let numEnemies = enemies.length;

        let enemiesToDestroy = [];

        for (let i = 0; i < numEnemies; i++) {

            enemies[i].y += enemies[i].speed;
            if (enemies[i].y >= this.enemyMaxY && enemies[i].speed > 0) {
                enemies[i].speed *= -1;
            }
            else if (enemies[i].y <= this.enemyMinY && enemies[i].speed < 0) {
                enemies[i].speed *= -1;
            }

            if(Phaser.Geom.Intersects.RectangleToRectangle(this.player.getBounds(),
                    enemies[i].getBounds()))
            {
                enemiesToDestroy.push(enemies[i]);
                // this.gameOver();
                // break;
            }
        }

        enemiesToDestroy.forEach((enemy) => {
            enemy.destroy();
        });


    }


    gameOver() {
        // flag to set player is dead
        this.isPlayerAlive = false;

        // shake the camera
        this.cameras.main.shake(500);

        // fade camera
        this.time.delayedCall(250, () => {
            this.cameras.main.fade(250);
        }, []);

        // restart game
        this.time.delayedCall(500, () => {
            this.scene.restart();
        }, []);

        // this.scene.restart();
    }
}