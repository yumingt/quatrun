let player;
let blobs = [];
let score = 0;
let minScore = 0;

let playerSprite;
let obstacleSprite;
var ground, gameOverImg;

function preload() {
  playerSprite = loadImage("images/box cat.PNG");
  obstacleSprite = loadImage("images/1pot.PNG");
  backImage = loadImage("images/background.PNG");
  groundImage = loadImage("images/ground.PNG");
  gameOverImg = loadImage("images/game over black.png");
}

function setup() {
  createCanvas(800, 300);
//  createCanvas(windowWidth, windowHeight);
  player = new Player(210, 236, 1920, 800, playerSprite);
//  ground = createSprite(width/2, height-20, width, 40);
    ground = createSprite(width, 54, width, 40);
  ground.addImage(groundImage);
  //ground.scale = 0.7;
  gameOver = createSprite(300,120, 193, 200);
  gameOver.addImage(gameOverImg);
}

function keyPressed() {
  if (key == ' ') {
    player.jump();
  }
}

function draw() {

  //camera.bound.max.x = 1000000;
  background(backImage);
  //player.display();
  gameOver.visible = false;

  score += 0.05;
  fill(255, 255, 255);

  textSize(30);
  text(round(score), 10, 32);

  player.show();
  player.move();

  if (random(1) < 0.03) {
    if (score > minScore) {
      blobs.push(new Blob(obstacleSprite, 800, 300));
      minScore = score + 2 + random(1);
    }
  }

  for (var blob of blobs) {
    blob.setSpeed(8 + sqrt(score) / 5);
    blob.move();
    blob.show();

    if (player.hits(blob)) {
      //print("GAME OVER");
      gameOver.visible = true;
      noLoop();
    }

    if (blob.getX() < -50) {
      blobs.shift();
      print("Removed");
    }
  }

  drawSprites();
}
