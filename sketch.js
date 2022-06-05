//criando as váriaveis
var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostjumping, ghostImg;
var invisibleBlockGroup, invisibleBlock;

var gameState = "play";
var gamestate = "end";

var BordasGroup, BordaInferior, BordaSuperior, BordaDireita, BordaEsquerda;

var random;

//carregando os pngs
function preload() {
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-jumping.png", "ghost-standing.png");
  spookySound = loadSound("spooky.wav");
}

//definindo as principais funções
function setup() {
  createCanvas(600, 600);

  tower = createSprite(300, 300);
  tower.addImage("tower", towerImg);
  tower.velocityY = 5;

  ghost = createSprite(300, 300, 60, 60);
  ghost.addImage("ghost-jumping", ghostImg);
  ghost.scale = 0.5;

  // estas bordas irão interferir na dinâmica do jogo, elas servirão de barreira, para que o player não passe do limite
  //da tela.

  BordaInferior = createSprite(600, 600, 1300, 10);
  BordaSuperior = createSprite(600, 0, 1300, 10);
  BordaEsquerda = createSprite(0, 600, 10, 1300);
  BordaDireita = createSprite(600, 600, 10, 1300);
}

// função de desenhar
function draw() {
  background(200);

  if (tower.y > 400) {
    tower.y = 300;
  }

  drawSprites();

  if (gameState === "play") {
    if (keyDown("left_arrow")) {
      ghost.x = ghost.x - 9;
    }
    if (keyDown("right_arrow")) {
      ghost.x = ghost.x + 9;
    }
    if (keyDown("d")) {
      ghost.y = ghost.y - 10;
    }
    if (keyDown("down_arrow")) {
      ghost.y = ghost.y + 2;
    }
    //gravity
    ghost.velocityY = ghost.velocityY = 5.0;

    // se o ghost tocar em uma das bordas ele morre
    if (BordaInferior.isTouching(ghost)) {
      gameState = "end";
    }
  }
  if (gameState === "end") {
    tower.velocityY = 0;
    ghost.velocityY = +5;
  }
}

function spawndoorsGroup() {
  if (framecount % 0 === 100) {
    var climber = createSprite(400, 400, 75, 40);
    climber.scale = 0.9;
  }
  // matemática aleatória para dar spawn em climbers;

  var Itens_Aleatórios = math.round(random(1, 2));

  if (world.framecount % 150 == 0) {
  }
  if (Itens_Aleatórios == 1) {
    CreateClimber();
  } else if (Itens_Aleatórios == 2) {
    CreateDoor();
  }
}

function CreateDoor() {
  Door.scale = 0.5;
  Door = createSprite(400, math.round(random(40, 400)));
  Door = "door.png";
}

function CreateClimber() {
  Climber.scale = 0.6;
  Climber = createSprite(200, math.round(random(30, 300)));
  Climber = "climber.png";
}
