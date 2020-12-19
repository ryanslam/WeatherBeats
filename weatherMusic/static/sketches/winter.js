let snowflakes = []; // array to hold snowflake objects
let heightMap = [];
let abs = []

function setup() {
    createCanvas(windowWidth, windowHeight);
    fill(240);
    
    for(let i = 0; i < windowWidth; i++) {
        if(i < 2) {
            heightMap[i] = windowHeight/1.1
            }
        else {
            heightMap[i] = random(windowHeight/1.5, windowHeight)
        }
    }

  noStroke();
}

function draw() {
  background(20,45,92);

  fill(255);
  rect(0, windowHeight/1.22, windowWidth, windowHeight);
  beginShape();
  drawHill();
  endShape();

  let t = frameCount / 60; // update time

  // create a random number of snowflakes each frame
  for (let i = 0; i < random(5); i++) {
    snowflakes.push(new snowflake()); // append snowflake object
  }

  // loop through snowflakes with a for..of loop
  for (let flake of snowflakes) {
    flake.update(t); // update snowflake position
    flake.display(); // draw snowflake
  }
}

// snowflake class
function snowflake() {
  // initialize coordinates
  this.posX = 0;
  this.posY = random(-50, 0);
  this.initialangle = random(0, 5 * PI);
  this.size = random(2, 5);

  // radius of snowflake spiral
  // chosen so the snowflakes are uniformly spread out in area
  this.radius = sqrt(random(pow(width / 2, 2)));

  this.update = function(time) {
    // x position follows a circle
    let w = 0.2; // angular speed
    let angle = w * time + this.initialangle;
    this.posX = width / 2 + this.radius * sin(angle);

    // different size snowflakes fall at slightly different y speeds
    this.posY += pow(this.size, 0.5);

    // delete snowflake if past end of screen
    if (this.posY > windowHeight) {
      let index = snowflakes.indexOf(this);
      snowflakes.splice(index, 1);
    }
  };

  this.display = function() {
    ellipse(this.posX, this.posY, this.size);
  };
}

const drawHill = () =>{
    curveVertex(-10, windowHeight);
    for(let i = 0; i < heightMap.length; i++) {
        curveVertex(i*250, heightMap[i]/1.1);
    }
}