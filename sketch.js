var mario, marioRunning, mariocolided, bg, bgimage
function preload() {
    mario_running = loadAnimation(
        "./images/mar1.png",
        "./images/mar2.png",
        "./images/mar3.png",
        "./images/mar4.png",
        "./images/mar4.png",
        "./images/mar6.png",
        "./images/mar7.png"
    );

    bgImage = loadImage("./images/bgnew.jpg");

}

function setup() {

    createCanvas(1000, 600);

    bg = createSprite(500, 300, 1000, 600);
    bg.addImage(bgImage);
    bg.scale = 0.5

    mario = createSprite(100, 500, 30, 30)
    mario.addAnimation('running', mario_running)
    mario.scale = 0.3
    //mario.addAnimation('label', var of the loaded animation)
    ground = createSprite(500, 580, 1000, 10)
    ground.visible=false

}

function draw() {
    mario.collide(ground)
    if (keyDown("space")) { mario.velocityY = -10 }
    mario.velocityY += 0.5
    drawSprites()
}
