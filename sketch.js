let mic;
let a;

//var volhistory = [];

function setup() {
	createCanvas(windowWidth, windowHeight);
	colorMode(HSB, height, height, height);
  a = width/2;
  noStroke();

	mic = new p5.AudioIn();
	mic.start();
}

function draw() {
	var micLevel = mic.getLevel();

  micLevel = mic.getLevel();
  let y = micLevel * 5000;

  fill (y, height, height);
  rect(a, 0, 60, y)
  a = a - 0.5;
  if (a < 0){
    a = height;
  }
}

function touchStarted() {
	getAudioContext().resume();
}
