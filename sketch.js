var serial; // variable to hold an instance of the serialport library
var portName = 'COM3'; //rename to the name of your port
var datain; //some data coming in over serial!
var xPos = 0;

let player;
let blobs = [];
let score = 0;
let minScore = 0;

let playerSprite;
let obstacleSprite;
var ground, gameOverImg;

function preload() {
  playerSprite = loadImage("box cat.PNG");
  obstacleSprite = loadImage("1pot.PNG");
  backImage = loadImage("background.PNG");
  groundImage = loadImage("ground.PNG");
  gameOverImg = loadImage("game over black.png")
}

function setup() {
  serial = new p5.SerialPort();       // make a new instance of the serialport library
  serial.on('list', printList);       // set a callback function for the serialport list event
  serial.on('connected', serverConnected); // callback for connecting to the server
  serial.on('open', portOpen);        // callback for the port opening
  serial.on('data', serialEvent);     // callback for when new data arrives
  serial.on('error', serialError);    // callback for errors
  serial.on('close', portClose);      // callback for the port closing

  serial.list();                      // list the serial ports
  serial.open(portName);              // open a serial port
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

// get the list of ports:
function printList(portList) {
 // portList is an array of serial port names
 for (var i = 0; i < portList.length; i++) {
 // Display the list the console:
   print(i + " " + portList[i]);
 }
}

function serverConnected() {
  print('connected to server.');
}

function portOpen() {
  print('the serial port opened.')
}

function serialError(err) {
  //print('Something went wrong with the serial port. ' + err);
  print(err);
}

function portClose() {
  print('The serial port closed.');
}

function serialEvent() {
  if (serial.available()) {
      datain = Number(serial.readLine());
    	//console.log(datain);
  }
}

function graphData(newData) {
  // map the range of the input to the window height:
  var yPos = map(newData, 0, 255, 0, height);
  // draw the line in a pretty color:
  stroke(255, 0, 80);
  line(xPos, height, xPos, height - yPos);
  // at the edge of the screen, go back to the beginning:
  if (xPos >= width) {
    xPos = 0;
    // clear the screen by resetting the background:
    background(0x08, 0x16, 0x40);
  } else {
    // increment the horizontal position for the next reading:
    xPos++;
  }
}



function draw() {

  background(backImage);
  //player.display();
  gameOver.visible = false;

  if (datain == 1) {
    player.jump();
  }

  score += 0.05;
  fill(255, 255, 255);

  textSize(30);
  text(round(score), 10, 32);

  player.show();
  player.move();

  if (random(1) < 0.03) {
    if (score > minScore) {
      blobs.push(new Blob(obstacleSprite));
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