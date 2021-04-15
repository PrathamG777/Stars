var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg
var fairy, fairyImg;

var sound;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImg = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	
	sound = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	sound.play();

	//create fairy sprite and add animation for fairy
	fairy = createSprite(100,600,50,50);
	fairy.addAnimation("fairyFlying",fairyImg);
	fairy.scale = 0.15;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;

	var engine = Engine.create();
	var world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

  //write code to stop star in the hand of fairy
  if (star.isTouching(fairy)){
	  Matter.Body.setStatic(starBody,true);
  }

drawSprites();
keyPressed();
}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	//write code to move fairy left and right
	if (keyDown("right_arrow")){
		fairy.x = fairy.x + 3;
	  }
	  
	if (keyDown("left_arrow")){
		fairy.x = fairy.x - 3;
	  }
	
}
