let step = 0; 
function setup(){
   createCanvas(500, 600);
   //   sand color
   background(213, 167, 121);
   colorMode(RGB);
   
   noStroke();
   fill(152, 215, 221);
   rect(0, 0, width, 3*height/5);
}

function draw(){
   seaFoam();

}

function seaFoam(){
   noStroke();
   fill(255);
   // background(213, 167, 121);
   let n = map(noise(step), 0, 1, 3*height/6, 3*height/4); 
   step += 0.5;
 
   ellipse(step, n, 20, 20, 0.5);

}