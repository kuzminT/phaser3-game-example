import GameScene from './scenes/GameScene';


window.onload = function () {
    let gameScene = new GameScene;

    const config = {
        type: Phaser.Auto,
        width: 640,
        height: 360,
        scene: gameScene,
    };

    new Phaser.Game(config);
};