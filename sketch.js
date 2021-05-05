var cat1,cat2,cat3,cat
var mouse,mouse1,mouse2,mouse3,garden


function preload() {
   cat1=loadAnimation("cat1.png"),
   cat2=loadAnimation("cat2.png","cat3.png")
  cat3=loadAnimation("cat4.png")
  mouse1=loadAnimation("mouse1.png")
mouse2=loadAnimation("mouse2.png","mouse3.png")
mouse3=loadAnimation("mouse4.png")
garden=loadImage("garden.png")

  
   //load the images here
}

function setup(){
    createCanvas(1000,800);
 cat=createSprite(900,600)
 cat.addAnimation("tomSleeping",cat1)
 mouse=createSprite(100,600)
 mouse.addAnimation("mouseStanding",mouse1)
    //create tom and jerry sprites here
cat.scale=0.2
mouse.scale=0.2
}

function draw(){ 
  background(garden);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<cat.width/2-mouse.width/2){
cat.velocityX=0
cat.addAnimation("catlastimage",cat3)

cat.x=300
cat.changeAnimation("catlastimage")
mouse.addAnimation("mouselastimage",mouse3)
mouse.changeAnimation("mouselastimage")
}



    drawSprites();

}

function keyPressed(){
if (keyCode===LEFT_ARROW){
    cat.velocityX=-5
    cat.addAnimation("movingcat",cat2)
cat.changeAnimation("movingcat")

mouse.addAnimation("mouseteasing",mouse2)
mouse.changeAnimation("mouseteasing")

}
  //For moving and changing animation write code here


}
