var gamestate="start"

function preload(){
 bg1=loadImage("bg1.jpg")
 bg2=loadImage("bg2.png")
 start=loadImage("start.png")
}

function setup() {

  createCanvas(windowWidth,windowHeight);
  
  playButton=createSprite(width/2,height/2)
  playButton.addImage(start)
}

function draw() { 
  if(gamestate=='start'){
    background(bg1);
    if(mousePressedOver(playButton)){
      gamestate="play"
    }
  }
  if(gamestate=="play"){
    background("bg2")
    playButton.visible=false
    
  }

  
  drawSprites();

}
