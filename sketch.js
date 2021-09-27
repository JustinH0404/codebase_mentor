let solved_cube;
let next_Button; 
let back_Button;
let part1;
let part2;
let part3;
let part4;
let part5;
let part6;
let currPart = 5; 
let directions = [];
let pictures = [];
let currDir = 0; 
let vid = [];

function preload() {
  solved_cube = loadImage('assets/solved.png')
  for(let x = 0; x < 6; x++){
    directions[x] = []
    pictures[x] = []
    vid[x] = []
  }
}
function setup() {
    createCanvas(windowWidth,windowHeight);
    cleared()
    textSize(48);
    textFont('Georgia')
    text("HOW TO SOLVE A RUBIK'S CUBE", 100, 100);
    image(solved_cube, 300, 150)
    textSize(20)
    text("Do you want to learn how to solve a Rubik's Cube? Click part 1 to get started!!!", 100, 500)
    dir1()
    dir2()
    dir3()
    dir4()
    dir5()
    dir6()
  }
 
function draw() {
    next_Button.mousePressed(next_click)
    back_Button.mousePressed(back_click)
    part1.mousePressed(p1Click);
    part2.mousePressed(p2Click);
    part3.mousePressed(p3Click);
    part4.mousePressed(p4Click);
    part5.mousePressed(p5Click);
    part6.mousePressed(p6Click);
    for(let i = 0; i < pictures.length; i++){
      for(let j = 0; j < pictures[i].length; j++){
        pictures[i][j].resize(220,230) 
      }
    }
}

//==================================================================================================================
//Creating Directions
//==================================================================================================================

function dir1(){
  directions[0][0] = `Let's get started! The first step to your rubik's cube is to create the white cross
where the non-white edges are connected to their center pieces, similar to 
how the green edge is connected with the green center and the orange edge 
is connected with the orange center.`
  directions[0][1] = `To do this, we first need to create what is called "Daisy". This is when all of the 
white edges are surround the yellow center as shown above. To do this, 
you will have 3 possible scenearios, and the video to the right show you 
how to create "Daisy" for all of them.`
  directions[0][2] = `Once Daisy is created, we have to line up the non-white edges with their centers,
as shown in the picutre by the orange side. To do this, we will just turn 
the top until they match up. `
  directions[0][3] = `Then, turn the front face twice, as shown in the video, to begin creating your 
white cross. Repeat the last two steps for every edge, and the white cross is created.`
  directions[0][4] = "Your white cross is completed! Go to Part 2."

  //adding pictures
  pictures[0][0] = loadImage('assets/p1d0.png')
  pictures[0][1] = loadImage('assets/p1d1.png')
  pictures[0][2] = loadImage('assets/p1d2.png')
  pictures[0][3] = loadImage('assets/p1d3.png')
  pictures[0][4] = loadImage('assets/p1d0.png')

}
function vid1(){
  vid[0][0] = createVideo('assets/p1d0.mov')
  vid[0][1] = createVideo('assets/p1d1.mov')
  vid[0][2] = createVideo('assets/p1d2.mov')
  vid[0][3] = createVideo('assets/p1d3.mov')
  for(let i = 0; i < vid[0].length; i++){
    vidLoad(vid[0][i])
    vid[0][i].position(1000,200)
    vid[0][i].size(400,300)
    vid[0][i].hide()
  }
}
function dir2(){
  directions[1][0] = `The next step should be to create the whole first layer. The white side
should be finished, as well as the a "T" shaped figure on the red, orange,
blue and green sides.`
  directions[1][1] = `To do this, we're going to have to insert the corners onto the white face
where the corner is also oriented in a way that the other two colors are
matched with their center pieces as well.` 
  directions[1][2] = `First, we have to find a white corner on bottom layer. There are three 
possible ways the corners can be oriented, as shown in the video to the right.`
  directions[1][3] = `For the first case, perform the permutation shown in the video to the right`
  directions[1][4] = "For the second case, perform the permutation shown in the video to the right"
  directions[1][5] = "For the third case, perform the permutation shown in the video to the right" 
  directions[1][6] = `If you are in a situation where the corner is on the white layer, but 
oriented incorrectly, put in a separate corner to replace it, then insert
the corner into it's rightful place.`
  directions[1][7] = "Repeat till you get the whole first layer!" 
  //adding pictures
  pictures[1][0] = loadImage('assets/p2d0.png')
  pictures[1][1] = loadImage('assets/p2d1.png')
  pictures[1][2] = loadImage('assets/p2d2.png')
  pictures[1][3] = loadImage('assets/p2d3.png')
  pictures[1][4] = loadImage('assets/p2d4.png')
  pictures[1][5] = loadImage('assets/p2d5.png')
  pictures[1][6] = loadImage('assets/p2d6.png')
  pictures[1][7] = loadImage('assets/p2d0.png')
}
function vid2(){
  vid[1][0] = createVideo('assets/p1d2.mov')
  vid[1][1] = createVideo('assets/p1d3.mov')
  vid[1][2] = createVideo('assets/p1d4.mov')
  vid[1][3] = createVideo('assets/p1d5.mov')
  vid[1][4] = createVideo('assets/p1d6.mov')
  vid[1][5] = createVideo('assets/p1d7.mov')
  vid[1][6] = createVideo('assets/p1d8.mov')
  vid[1][7] = createVideo('assets/p1d9.mov')
  for(let i = 0; i < vid[1].length; i++){
    vidLoad(vid[1][i])
    vid[1][i].position(1000,200)
    vid[1][i].size(400,300)
    vid[1][i].hide()
  }
}
function dir3(){
  directions[2][0] = `Our next job is to insert all the edges into the second layer. By the end 
of this step, your cube should look like it's starting to get completed.`;
  directions[2][1] = `So the first step is so turn the cube so that the white face is on the bottom.
Then, find an edge that has two colors that are not yellow i.e. red and blue
blue and orange, etc. Turn the top so the edge connects with it's center,
making the "T" shape.`
  directions[2][2] = `Then, figure out if the edge goes left or right.`
  directions[2][3] = `If it goes left, then perform this permutation shown in the video`
  directions[2][4] = "If it goes right, then perform this permutation shown in the video"
  directions[2][5] = `Replace it first`
  directions[2][6] = "Repeat until you finish the whole second layer!!"

  //adding pictures
  pictures[2][0] = loadImage('assets/p3d0.png')
  pictures[2][1] = loadImage('assets/p3d1.png')
  pictures[2][2] = loadImage('assets/p3d2.png')
  pictures[2][3] = loadImage('assets/p3d3.png')
  pictures[2][4] = loadImage('assets/p3d4.png')
  pictures[2][5] = loadImage('assets/p3d5.png')
  pictures[2][6] = loadImage('assets/p3d0.png')
}

function dir4(){
  directions[3][0] = `Next, we want to finish the top layer, and get the yellow side all done.`;
  directions[3][1] = `Our first step to do this is to create the yellow cross, as shown here.`
  directions[3][2] = `So you'll have one of three possible cases. The first case we'll cover
is going to be just a yellow dot. For this, perform the algorithm to the right.`
  directions[3][3] = `The next case we're going to be looking at is the horizontal line.
Once again, perform the algorithm shown in the video.`
  directions[3][4] = `The final case we're going to be looking at is almost like an L shape
The algorithm will be to the right in the video.`
  directions[3][5] = `Once we get the cross, we want to get what we call the "fish", 
which is pictured above. By doing this, we want to perform the 
algorithm to the right until we get the fish.`
  directions[3][6] = `Once we finally get the fish, we want to orient it as shown above,
then perform the algorithm one or two more times.`
  //adding pictures
  pictures[3][0] = loadImage('assets/p4d0.png')
  pictures[3][1] = loadImage('assets/p4d1.png')
  pictures[3][2] = loadImage('assets/p4d2.png')
  pictures[3][3] = loadImage('assets/p4d3.png')
  pictures[3][4] = loadImage('assets/p4d4.png')
  pictures[3][5] = loadImage('assets/p4d5.png')
  pictures[3][6] = loadImage('assets/p4d5.png')
  //pictures[3][7] = loadImage('assets/p4d7.png')
}
function dir5(){
  directions[4][0] = `In our second to last step, we need to create "Headlights", where all 
the same color corners are all on the same side, as shown in the blue
and red side `;
  directions[4][1] = `Under most circumstances, you'll have one pair of headlights already.
If this is the case, turn the top so the color of the headlights match up 
it's corresponding side, then turn the cube 180 degrees to have that side 
facing away from you.`
  directions[4][2] = `The front of the cube should like some variation of the picture above,
and once you have your headlights facing away from you, perform the 
algorithm shown in the video to the right.`
  directions[4][3] = `In the event that you have no headlights, then proceed to perform 
the algorithm on any side of the cube, and then one pair of headlights 
should appear.`
  directions[4][4] = "Once you are finished, the cube should look like this."

  //adding pictures
  pictures[4][0] = loadImage('assets/p5d0.png')
  pictures[4][1] = loadImage('assets/p5d1.png')
  pictures[4][2] = loadImage('assets/p5d2.png')
  pictures[4][3] = loadImage('assets/p5d3.png')
  pictures[4][4] = loadImage('assets/p5d0.png')
}
function dir6(){
  directions[5][0] = `You're almost done! This last step will complete the cube.`;
  directions[5][1] = `Now that we have headlights on every side, we need to move the edges
into their respective colors without moving the corners. First, we need 
to identify there is one side completed. If there is, position it to the 
back. `
  directions[5][2] = `If orange is the completed side, the side facing you should look like this:`
  directions[5][3] = `Then, perform the algorithm to the right up to 3 times to solve the cube. 
When you finish, your cube should be completed!`
  //adding pictures
  pictures[5][0] = loadImage('assets/p6d0.png')
  pictures[5][1] = loadImage('assets/p6d1.png')
  pictures[5][2] = loadImage('assets/p6d2.png')
  pictures[5][3] = loadImage('assets/p6d3.png')
}
//==================================================================================================================
//Button Click Functions
//==================================================================================================================

function p1Click(){
  cleared()
  text(directions[0][0], 100,500)
  image(pictures[0][0], 300, 150)
  currPart = 0;
  currDir = 0;
  //vid[0][0].show()
  text("Part " + String(currPart+ 1) + " Step " + String(currDir+1), 1000, 200);
}
function p2Click(){
  cleared()
  text(directions[1][0], 100,500)
  image(pictures[1][0], 300, 150)
  currPart = 1;
  currDir = 0; 
  //vid[1][0].show()
  text("Part " + String(currPart+ 1) + " Step " + String(currDir+1), 1000, 200);
}
function p3Click(){
  cleared()
  text(directions[2][0], 100,500)
  image(pictures[2][0], 300, 150)
  currPart = 2;
  currDir = 0; 
  text("Part " + String(currPart+ 1) + " Step " + String(currDir+1), 1000, 200);
}
function p4Click(){
  cleared()
  text(directions[3][0], 100,500)
  image(pictures[3][0], 300, 150) 
  currPart = 3;
  currDir = 0; 
  text("Part " + String(currPart+ 1) + " Step " + String(currDir+1), 1000, 200);
}
function p5Click(){
  cleared()
  text(directions[4][0], 100,500)
  image(pictures[4][0], 300, 150)
  currPart = 4;
  currDir = 0; 
  text("Part " + String(currPart+ 1) + " Step " + String(currDir+1), 1000, 200);
}
function p6Click(){
  cleared()
  text(directions[5][0], 100,500)
  image(pictures[5][0], 300,150)
  currPart = 5;
  currDir = 0; 
  text("Part " + String(currPart+ 1) + " Step " + String(currDir+1), 1000, 200);
}

//==================================================================================================================
//Next/Back Click Functions
//==================================================================================================================

function next_click(){
  if(currDir+1 < directions[currPart].length){
    cleared()
    textSize(20)
    text(directions[currPart][currDir+1], 100, 500)
    image(pictures[currPart][currDir+1], 300, 150)
    //vid[currPart][currDir].remove()
    currDir+=1; 
    /*if(currPart == 0){
      vid1()
    }
    else if(currPart == 1){
      vid2()
    }
    else if(currPart == 2){
      vid3()
    }
    else if(currPart == 3){
      vid4()
    }
    else if(currPart == 4){
      vid5()
    }
    else {
      vid6()
    }*/
    //vid[currPart][currDir].show()
  }
  text("Part " + String(currPart+ 1) + " Step " + String(currDir+1), 1000, 200);
}
function back_click(){
  if(currDir > 0){
    cleared()
    text(directions[currPart][currDir-1], 100, 500)
    image(pictures[currPart][currDir-1], 300, 150)
    //vid[currPart][currDir].remove()
    currDir-=1
    /*vid[currPart][currDir].show()
    if(currPart == 0){
      vid1()
    }
    else if(currPart == 1){
      vid2()
    }
    else if(currPart == 2){
      vid3()
    }
    else if(currPart == 3){
      vid4()
    }
    else if(currPart == 4){
      vid5()
    }
    else {
      vid6()
    }*/
  }
  text("Part " + String(currPart+ 1) + " Step " + String(currDir+1), 1000, 200);
}


function cleared(){
    background(300);
    textSize(48);
    textFont('Georgia')
    text("HOW TO SOLVE A RUBIK'S CUBE", 100, 100);
    next_Button = createButton("Next");
    next_Button.position(400,600);
    back_Button = createButton("Back");
    back_Button.position(350,600);
    part1 = createButton("Part1: White Cross");
    part1.position(800,200);
    part2 = createButton("Part2: First Layer");
    part2.position(800,250);
    part3 = createButton("Part3: Second Layer");
    part3.position(800,300);
    part4 = createButton("Part4: Top Layer");
    part4.position(800,350);
    part5 = createButton('Part5: "Headlights"');
    part5.position(800,400);
    part6 = createButton("Part6: Last Layer");
    part6.position(800,450);
    textSize(20);
    //text("Video Accompaniment: ", 1000, 150)
}

function vidLoad(__){
  __.loop();
  __.volume(0)
}
