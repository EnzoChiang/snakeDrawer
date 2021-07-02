/*
Snake Painter

In this sketch, you can draw your unique snake with different colour!
press "r" for red, "y" for yellow, "o" for orange, and "g" for green
You can also adjust the body size by pressing "+" or "-"

Designer: Yen-Yi Chiang, n10859543
*/

let head = 0
let eyePosition = 9
let headSize = 30
let bodySize = 5
let rectHeight

//variables for changing colour
let x = 0
let snakeColor

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB)
  background(30, 10, 90, 90);
}

function draw() {
  rectMode(CENTER)

  //press different key resilt in different paint colour
  snakeColor = [random(20, 30), random(0, 10), random(40, 50), random(90, 100)]
  if (key == "r") {
    x = 1
  } else if (key == "y") {
    x = 2
  } else if (key == "g") {
    x = 3
  } else if (key == "o") {
    x = 0
  }

  //Making sure there are only one head been drawn on each snake using (head=0)
  if (mouseIsPressed && head == 0) {

    //Detacting the orientation of the drawing path
    if (pmouseX < mouseX && head == 0) {
      drawHeadLR(9, -25, -30)
    }
    if (pmouseX > mouseX && head == 0) {
      drawHeadLR(9, 25, 30)
    }
    if (pmouseY < mouseY && head == 0) {
      drawHeadUD(9, -25, -30)
    }
    if (pmouseY > mouseY && head == 0) {
      drawHeadUD(9, 25, 30)
    }
  }

  //Drawing snake body only if the head have been drawn(head=1)
  if (mouseIsPressed && head == 1) {
    colorMode(HSB)
    noStroke()
    fill(snakeColor[x], 80, random(70, 100))
    
    square(mouseX - bodySize, mouseY - bodySize, 2 * bodySize)
    fill(snakeColor[x], 80, random(70, 100))
    square(mouseX - bodySize, mouseY + bodySize, 2 * bodySize)
    fill(snakeColor[x], random(80), random(70, 100))
    square(mouseX + bodySize, mouseY + bodySize, 2 * bodySize)
    fill(snakeColor[x], random(80), random(70, 100))
    square(mouseX + bodySize, mouseY - bodySize, 2 * bodySize)
  }

  //Adjust the size of body by pressing +/-
  if (keyIsPressed) {
    if (key == "+") {
      bodySize = bodySize + 0.1
    } else if (key == "-" && bodySize > 0) {
      bodySize = bodySize - 0.1
    }
  }
}

//Initialize the variables when finished previous snake
function mouseReleased() {
  head = 0
  bodySize = 5
}

//drawing head upward, downward or rightward, leftward
function drawHeadLR(eyePosition, rectHeight, headSize) {
  noStroke()
  fill(snakeColor[x], 80, random(80, 100))
  ellipse(mouseX + rectHeight, mouseY, 50, 35)
  ellipse(mouseX + headSize, mouseY, 60, 30)
  rect(mouseX + rectHeight, mouseY, 35, 25)

  strokeWeight(5)
  stroke(1, 1, 1, 0.3);
  point(mouseX + headSize, mouseY + eyePosition);
  point(mouseX + headSize, mouseY - eyePosition)
  
  head = 1;
}

function drawHeadUD(eyePosition, rectHeight, headSize) {
  noStroke()
  fill(snakeColor[x], 80, random(80, 100))
  ellipse(mouseX, mouseY + rectHeight, 35, 50)
  ellipse(mouseX, mouseY + headSize, 30, 60)
  rect(mouseX, mouseY + rectHeight, 25, 35)

  strokeWeight(5)
  stroke(1, 1, 1, 0.3);
  point(mouseX + eyePosition, mouseY + headSize);
  point(mouseX - eyePosition, mouseY + headSize)
  
  head = 1;
}