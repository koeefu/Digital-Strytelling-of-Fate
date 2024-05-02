let eye;
let imgWidth = 200;
let imgX = 60;
let imgY = 30;

function preload() {
  eye = loadImage("images/eye.svg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  // background(0);

  let imgHeight = ((imgWidth * height) / width) * 1.1;

  // left
  image(eye, imgX, imgY, imgWidth, imgHeight);
  // right
  image(eye, width - imgX - imgWidth, imgY, imgWidth, imgHeight);

  let circleXOne = imgX + imgWidth / 2;
  let circleXTwo = width - imgX - imgWidth / 2;

  let circleY = imgY + imgHeight / 2;

  let moveFactor = (imgHeight - imgWidth / 2.5) / 2;
  moveY(moveFactor);
  moveX(moveFactor);

  fill("black");
  stroke("white");
  strokeWeight(0.8);

  // left
  ellipse(
    circleXOne + moveX(moveFactor),
    circleY + moveY(moveFactor) - 3,
    imgWidth / 2.5
  );
  // right
  ellipse(
    circleXTwo + moveX(moveFactor),
    circleY + moveY(moveFactor) - 3,
    imgWidth / 2.5
  );
}

function moveY(moveHeight) {
  let moveY = map(mouseY, 0, windowHeight, -moveHeight / 3.5, moveHeight);
  return moveY;
}

function moveX(moveWidth) {
  let moveX = map(mouseX, 0, windowWidth, -moveWidth + 3, moveWidth - 3);
  return moveX;
}
