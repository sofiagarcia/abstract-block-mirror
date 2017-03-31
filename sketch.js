var video;
var vScale = 6;

var slider;

function setup() {
  createCanvas(640, 480);
  pixelDensity(1);

  slider = createSlider(0, 255, 77);
}

function draw() {
  background(41);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
  video.hide();
  
  loadPixels();
  for(var y = 0; y < video.height; y++){
    for(var x = 0; x < video.width; x++){
      var index = (x + y * video.width)*4;
      var r = video.pixels[index+0];
      var g = video.pixels[index+1];
      var b = video.pixels[index+2];
      
      var bright = (r+g+b)/3;
      
      var threshold = slider.value();
      
      if (bright > threshold) {
        fill(255);
      } else {
        fill(0);
      }
      
    
      noStroke()
      rectMode(CENTER);
      rect(x*vScale, y*vScale, vScale, vScale);
      
   
    }
  }
  
  
}
