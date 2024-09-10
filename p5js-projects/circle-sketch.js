function setup() {
    createCanvas(400, 400);
  }
  
  function draw() {
    background(220);
    
    // Set the fill color based on the mouse position
    let r = map(mouseX, 0, width, 0, 255);
    let b = map(mouseY, 0, height, 0, 255);
    fill(r, 0, b);
    
    // Draw a circle that follows the mouse
    ellipse(mouseX, mouseY, 50, 50);
  }