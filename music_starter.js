
let cheer
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  if(counter==0){
cheer = loadImage("Cheering-1.png")
  }
  background(90,9,9)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
//Music Visualzation







//theater
fill(30)
rect(0,0,2000,1550)

//subwoofers

fill(70,9,9)
rect(100,800,160,25)


fill(70,9,9)
rect(900,800,160,25)


fill(70)
rect(100,650,150,300)

fill(70)
rect(900,650,150,300)



//Cheering

image(cheer,0,750,1000,250)
fill(150)

image(cheer,0,800,1000,250)
fill(150)


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
 triangle(800,200,800,50,520,350)
 triangle(520,550,680,550,520,675)

 fill(255)
 triangle(550,550,670,400,650,500)




 
}