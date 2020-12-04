//Create variables here
var dog ;
var happyDog;
var database;
var foodS;
var foodStock;
function preload()
{
  //load images her
  dog1 = loadImage("Dog.png");
  dog2 = loadImage("happydog.png");
}

function setup() {
	createCanvas(500, 500);
  dog = createSprite(250,250,20,20);
  dog.addImage(dog1);
  dog.scale = 0.1;
  var foodStock = database.ref('Food');
   foodStock.on("value",readStock,showError);
  
}


function draw() { 
  background(46,139,87) ;

  if(key)
  drawSprites();
  //add styles here
  
}



