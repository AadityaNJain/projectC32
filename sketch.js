const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;
var bird, slingshot;
var score = 0;

var gameState = "onSling";

function preload() {
    getBgImg();
}

function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(770,320,70,70);
    pig1 = new Pig(700, 160);
    log1 = new Log(735,220,300,300);

    box3 = new Box(700,260,70,70);
    box4 = new Box(770,260,70,70);
    pig3 = new Pig(770, 160);

    log3 =  new Log(735,340,300, PI/2);
    box5 = new Box(740,200,70,70);
    log4 = new Log(735,140,150, PI/2);
    log5 = new Log(735,180,150, PI/2);

    bird = new Bird(200,50);
    bird.shapeColour = "white";

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:50});

    score = 0
}

function draw(){
    //if(backgroundImg)
    background("black");
    Engine.update(engine);
    textSize(35);
    text("score: " + score, 400,100);
    //fill("white");
    //text("Score: " + score,width-300,50);
    //strokeWeight(4);
    box1.display();
    box1.score()
    box2.display();
    box2.score();
    ground.display();
    pig1.display(); 
    pig1.score();
    log1.display();
    log1.score();

    box3.display();
    box3.score();
    box4.display();
    box4.score();
    pig3.display();
    pig3.score();
    log3.display();
    log3.score();

    box5.display();
    box5.score();
    log4.display();
    log4.score();
    log5.display();
    log5.score();

    bird.display();

    platform.display();

    slingshot.display();    

    console.log(score);
    //score.display();
}

function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}


function mouseReleased(){
    slingshot.fly();
   // gameState = "launched";
}

function keyPressed(){
    if(keyCode === 32){
    slingshot.attach(bird.body);
    //bird.trajectory =[];
    }
}

async function getBgImg(){
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    var hour = dateTime.slice(11,13);
    if(hour >= 06 && hour <= 19){
       // backgroundImg = loadImage("sprites/bg.png"); 
    }else{
       // backgroundImg = loadImage("sprites/bg2.jpg");
    }
}