var heading=0;
var PC1;
var NPC1 = [];

function setup() {
  createCanvas(400,400);
  PC1 = new PC();
  for(i=0;i<15;i++){
    NPC1.push(new NPC());
  }
}

function draw() {
  background(0,0,0);  
  PC1.display();
  for(i=0;i<15;i++){
    NPC1[i].display();
    NPC1[i].move();
  }
}


