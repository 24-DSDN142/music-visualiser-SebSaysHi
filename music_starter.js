
let cheer
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(counter==0){
cheer = loadImage("Cheering-1.png")
  }
  background(200)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
//Images in Front

image(cheer,0,800,1000,200)


 //Semi Circle DP
 fill(170,8,8)
arc(500,500,500,500, 90,270)

fill(20)
arc(470,500,350,350, 90,270)

fill(255)
triangle(450,550,330,400,350,500)

 //Semi Circle WV
 fill(255,170,8)
 arc(500,500,500,500, 270,90)




fill(0)
 rect(600,450,160,200)
 triangle(680,400,800,200,520,350)
 triangle(800,200,850,25,520,350)
 triangle(520,550,680,550,520,675)

 fill(255)
 triangle(550,550,670,400,650,500)
 //Music Visualization


}