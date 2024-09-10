function setup() {
    createCanvas(400, 400);
    noLoop();
  }
  
  function draw() {
    background(240);
    
    for (let x = 0; x < width; x += 20) {
      for (let y = 0; y < height; y += 20) {
        let r = random(255);
        let g = random(255);
        let b = random(255);
        
        fill(r, g, b);
        noStroke();
        
        if (random() > 0.5) {
          rect(x, y, 20, 20);
        } else {
          ellipse(x + 10, y + 10, 20, 20);
        }
      }
    }
  }
  
  function mousePressed() {
    redraw();
  }