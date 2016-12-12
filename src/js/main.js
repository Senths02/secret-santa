var num = 2000;
var range =20;
var bg =51;

var ax = [];
var ay = [];


function setup() {
  createCanvas(displayWidth, displayHeight);
  for ( var i = 0; i < num; i++ ) {
    ax[i] = displayWidth / 2;
    ay[i] = displayHeight / 2;
  }
  frameRate(25);
}


function draw() {
  background(bg);

  //  // Shift all elements 1 place to the left
  // for ( var i = 1; i < num; i++ ) {
  //   ax[i - 1] = ax[i];
  //   ay[i - 1] = ay[i];
  // }

  // // Put a new value at the end of the array
  // ax[num - 1] += random(-range, range);
  // ay[num - 1] += random(-range, range);

  // // Constrain all points to the screen
  // ax[num - 1] = constrain(ax[num - 1], 0, displayWidth);
  // ay[num - 1] = constrain(ay[num - 1], 0, displayHeight);

  // // Draw a line connecting the points
  // for ( var j = 1; j < num; j++ ) {
  //   var val = j / num * 204.0 + 51;
  //   noFill();
  //   strokeWeight(val/100);
  //   stroke(val);
  //   bezier(ax[j - 1], ay[j - 1], ax[j], ay[j], ax[j+1], ay[j+1], ax[j+2], ay[j+2]);
  // }
}


function mouseClicked(){
    // noFill();
    // stroke('#fae');
    // //line(100,100,200,200)
    // bezier(10, 10, 15, 15, 20, 15, 30, 10); 
    if(bg==51){
      bg=10;
      background(bg);
    }
    else{
      bg=51;
      background(bg);
    }

    return false;
}



