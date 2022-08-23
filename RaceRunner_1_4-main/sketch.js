var canvas;
var backgroundImage;
var bgImg;
var database;
var form, player;
var playerCount;
var car1, car2, cars, car1Img, car2Img
var gameState
var track
var allPlayers
var fuel, fuels, fuelImg
var powerCoin ,powerCoins , powerCoinsImg

function preload() {
  backgroundImage = loadImage("./assets/background.png");
  car1Img = loadImage("./assets/car1.png");
  car2Img = loadImage("./assets/car2.png");
  track = loadImage("./assets/track.jpg");
  //recompensas
  fuelImg= loadImage("./assets/fuel.png");
  powerCoinsImg= loadImage("./assets/goldCoin.png");
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  bgImg = backgroundImage;
}

function draw() {
  background(bgImg);
  if(playerCount === 2){
      game.update(1);
  }
  if(gameState === 1){
    game.play();
  }

}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}






