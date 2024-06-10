const datas = [
  {
    general: "non-religious",
    religion: "Agnostic",
    fate: "Yes",
    vary: "Changeable",
    comment:
      "This person is non-religious, follows Agnostic, believes in fate (Yes), and thinks fate is Changeable",
  },
  {
    general: "religious",
    religion: "Christian",
    fate: "Yes",
    vary: "Changeable",
    comment:
      "This person is religious, follows Christian, believes in fate (Yes), and thinks fate is Changeable",
  },
  {
    general: "non-religious",
    religion: "Atheist",
    fate: "Yes",
    vary: "Changeable",
    comment:
      "This person is non-religious, follows Atheist, believes in fate (Yes), and thinks fate is Changeable",
  },
  {
    general: "non-religious",
    religion: "Agnostic",
    fate: "No",
    vary: "Changeable",
    comment:
      "This person is non-religious, follows Agnostic, believes in fate (No), and thinks fate is Changeable",
  },
  {
    general: "unsure",
    religion: "Not sure",
    fate: "Yes",
    vary: "Changeable",
    comment:
      "This person is unsure, follows Not sure, believes in fate (Yes), and thinks fate is Changeable",
  },
  {
    general: "religious",
    religion: "Buddhist",
    fate: "No",
    vary: "Changeable",
    comment:
      "This person is religious, follows Buddhist, believes in fate (No), and thinks fate is Changeable",
  },
  {
    general: "religious",
    religion: "Christian",
    fate: "Yes",
    vary: "Changeable",
    comment:
      "This person is religious, follows Christian, believes in fate (Yes), and thinks fate is Changeable",
  },
  {
    general: "religious",
    religion: "Buddhist",
    fate: "Yes",
    vary: "Changeable",
    comment:
      "This person is religious, follows Buddhist, believes in fate (Yes), and thinks fate is Changeable",
  },
  {
    general: "non-religious",
    religion: "Agnostic",
    fate: "Yes",
    vary: "Changeable",
    comment:
      "This person is non-religious, follows Agnostic, believes in fate (Yes), and thinks fate is Changeable",
  },
  {
    general: "non-religious",
    religion: "Agnostic",
    fate: "Yes",
    vary: "Changeable",
    comment:
      "This person is non-religious, follows Agnostic, believes in fate (Yes), and thinks fate is Changeable",
  },
  {
    general: "non-religious",
    religion: "Atheist",
    fate: "No",
    vary: "Changeable",
    comment:
      "This person is non-religious, follows Atheist, believes in fate (No), and thinks fate is Changeable",
  },
  {
    general: "non-religious",
    religion: "Agnostic",
    fate: "No",
    vary: "Changeable",
    comment:
      "This person is non-religious, follows Agnostic, believes in fate (No), and thinks fate is Changeable",
  },
  {
    general: "unsure",
    religion: "Not sure",
    fate: "Yes",
    vary: "Changeable",
    comment:
      "This person is unsure, follows Not sure, believes in fate (Yes), and thinks fate is Changeable",
  },
  {
    general: "religious",
    religion: "Christian",
    fate: "Yes",
    vary: "Predetermined",
    comment:
      "This person is religious, follows Christian, believes in fate (Yes), and thinks fate is Predetermined",
  },
  {
    general: "non-religious",
    religion: "Atheist",
    fate: "Yes",
    vary: "Changeable",
    comment:
      "This person is non-religious, follows Atheist, believes in fate (Yes), and thinks fate is Changeable",
  },
  {
    general: "non-religious",
    religion: "Atheist",
    fate: "No",
    vary: "Changeable",
    comment:
      "This person is non-religious, follows Atheist, believes in fate (No), and thinks fate is Changeable",
  },
  {
    general: "non-religious",
    religion: "Atheist",
    fate: "No",
    vary: "Changeable",
    comment:
      "This person is non-religious, follows Atheist, believes in fate (No), and thinks fate is Changeable",
  },
  {
    general: "non-religious",
    religion: "Atheist",
    fate: "Yes",
    vary: "Changeable",
    comment:
      "This person is non-religious, follows Atheist, believes in fate (Yes), and thinks fate is Changeable",
  },
  {
    general: "religious",
    religion: "Buddhist",
    fate: "Yes",
    vary: "Changeable",
    comment:
      "This person is religious, follows Buddhist, believes in fate (Yes), and thinks fate is Changeable",
  },
  {
    general: "non-religious",
    religion: "Atheist",
    fate: "Yes",
    vary: "Changeable",
    comment:
      "This person is non-religious, follows Atheist, believes in fate (Yes), and thinks fate is Changeable",
  },
  {
    general: "religious",
    religion: "Buddhist",
    fate: "Yes",
    vary: "Changeable",
    comment:
      "This person is religious, follows Buddhist, believes in fate (Yes), and thinks fate is Changeable",
  },
  {
    general: "non-religious",
    religion: "Agnostic",
    fate: "No",
    vary: "Changeable",
    comment:
      "This person is non-religious, follows Agnostic, believes in fate (No), and thinks fate is Changeable",
  },
  {
    general: "religious",
    religion: "Christian",
    fate: "Yes",
    vary: "Changeable",
    comment:
      "This person is religious, follows Christian, believes in fate (Yes), and thinks fate is Changeable",
  },
  {
    general: "religious",
    religion: "Buddhist",
    fate: "Yes",
    vary: "Predetermined",
    comment:
      "This person is religious, follows Buddhist, believes in fate (Yes), and thinks fate is Predetermined",
  },
  {
    general: "religious",
    religion: "Catholic",
    fate: "Yes",
    vary: "Changeable",
    comment:
      "This person is religious, follows Catholic, believes in fate (Yes), and thinks fate is Changeable",
  },
  {
    general: "non-religious",
    religion: "Atheist",
    fate: "Yes",
    vary: "Changeable",
    comment:
      "This person is non-religious, follows Atheist, believes in fate (Yes), and thinks fate is Changeable",
  },
  {
    general: "non-religious",
    religion: "Agnostic",
    fate: "Yes",
    vary: "Changeable",
    comment:
      "This person is non-religious, follows Agnostic, believes in fate (Yes), and thinks fate is Changeable",
  },
  {
    general: "unsure",
    religion: "Not sure",
    fate: "Yes",
    vary: "Predetermined",
    comment:
      "This person is unsure, follows Not sure, believes in fate (Yes), and thinks fate is Predetermined",
  },
  {
    religion: "Buddhist",
    fate: "No",
    vary: "Predetermined",
    comment:
      "This person follows Buddhist, believes in fate (No), and thinks fate is Predetermined",
  },
  {
    general: "non-religious",
    religion: "Atheist",
    fate: "Yes",
    vary: "Changeable",
    comment:
      "This person is non-religious, follows Atheist, believes in fate (Yes), and thinks fate is Changeable",
  },
  {
    general: "non-religious",
    religion: "Agnostic",
    fate: "Yes",
    vary: "Predetermined",
    comment:
      "This person is non-religious, follows Agnostic, believes in fate (Yes), and thinks fate is Predetermined",
  },
];

var Engine = Matter.Engine,
  Render = Matter.Render,
  Runner = Matter.Runner,
  Bodies = Matter.Bodies,
  Composite = Matter.Composite;

let colorArray = [
  "#6DDDBC", //agnostic
  "#F7D047", //christian
  "#9D57EE", //atheist
  "#ED6B31", //buddhist
  "#EF9ED8", //not sure
  "#0E4BF3", //catholic
  "#44922C",
];

var engine;
var world;

let collide;

let religionSelect;

var flowers = [];
let obj;

let flowerSize = 54;

let space;

function preload() {
  space = loadFont("fonts/SpaceGrotesk-Light.ttf");
  imgAgnostic = loadImage("images/agnostic.png");
  imgAtheist = loadImage("images/atheist.png");
  imgBuddhist = loadImage("images/buddhist.png");
  imgCatholic = loadImage("images/catholic.png");
  imgChristian = loadImage("images/christian.png");
  imgNotSure = loadImage("images/not-sure.png");
}

function setup() {
  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < datas.length; i++) {
    if (datas[i].vary == "Predetermined") {
      flowers.push(
        new Flower(
          random(width / 2 - 200, width / 2),
          random(height / 2 - 200, height / 2 + 200),
          datas[i].general,
          datas[i].religion,
          datas[i].fate
        )
      );
    } else if (datas[i].vary == "Changeable") {
      flowers.push(
        new Flower(
          random(width / 2, width / 2 + 200),
          random(height / 2 - 200, height / 2 + 200),
          datas[i].general,
          datas[i].religion,
          datas[i].fate
        )
      );
    }
  }

  let groundY = (6.8 * windowHeight) / 8 + 8;
  let topY = windowHeight / 4;
  let rightWallX = (4 * windowWidth) / 5;
  let leftWallX = windowWidth / 5;

  // for bodis creating rect, they use firsrt two parameter as the center of rect
  ground = Bodies.rectangle(width / 2, groundY, width, 10, {
    isStatic: true,
  });

  top = Bodies.rectangle(width / 2, topY, width, 10, {
    isStatic: true,
  });

  wallLeft = Bodies.rectangle(leftWallX, height / 2, 1, height, {
    isStatic: true,
  });
  wallRight = Bodies.rectangle(rightWallX, height / 2, 1, height, {
    isStatic: true,
  });
  wall3 = Bodies.rectangle(width / 2, height / 2, 1, height, {
    isStatic: true,
  });

  //   add objects to this world or canvas
  Composite.add(world, ground);
  Composite.add(world, wallLeft);
  Composite.add(world, wallRight);
  Composite.add(world, wall3);

  Matter.Runner.run(engine);
}

function draw() {
  background(0);

  legend();
  bgPattern();

  collide = Bodies.circle(mouseX, mouseY, 20);
  // Composite.add(world, collide);

  for (let i = 0; i < datas.length; i++) {
    flowers[i].show();
  }

  // for (let i = 0; i < datas.length; i++) {
  //   // flowers[i].hoverInfo();
  // }
}

class Flower {
  constructor(x, y, shape, col, fate) {
    this.par = (windowHeight / 1050) * (windowWidth / 1700);
    this.d = (flowerSize - 4) * this.par;
    this.body = Bodies.circle(x, y, this.d);
    this.x = x;
    this.y = y;

    Composite.add(world, this.body);

    this.body.friction = 0.6;
    this.body.restitution = 0.2;

    this.shape = shape; //related to if religious
    this.col = col; //related to specific religious belief
    this.fate = fate; //related to if they believe fate
  }

  show() {
    if (this.col == "Agnostic") {
      fill(color(colorArray[0]));
    } else if (this.col == "Christian") {
      fill(color(colorArray[1]));
    } else if (this.col == "Atheist") {
      fill(color(colorArray[2]));
    } else if (this.col == "Buddhist") {
      fill(color(colorArray[3]));
    } else if (this.col == "Not sure") {
      fill(color(colorArray[4]));
    } else if (this.col == "Catholic") {
      fill(color(colorArray[5]));
    }

    push();

    translate(this.body.position.x, this.body.position.y);
    rectMode(CENTER);
    rotate(degrees(this.body.angle));

    if (this.shape == "religious") {
      roundFlower(0, 0);
    } else if (this.shape == "non-religious") {
      rectFlower(0, 0);
    } else if (this.shape == "unsure") {
      pointFlower(0, 0);
    }

    pop();

    if (this.fate == "No") {
      push();
      fill(0);
      noStroke();
      ellipse(this.body.position.x, this.body.position.y, 25 * this.par);
      pop();
    }
  }

  hoverInfo() {
    let d = dist(this.body.position.x, this.body.position.y, mouseX, mouseY);

    if (d < ((flowerSize - 4) * this.par) / 2) {
      fill("white");
      textSize(20);
      text(
        "This person is non-religious, follows Atheist, believes in fate (Yes), and thinks fate is Changeable",
        this.body.position.x + this.d,
        this.body.position.y - this.d / 2,
        150
      );
      // txt.class("comment");
      // rect(this.body.position.x + this.d, this.body.position.y - this.d, 100);
    }
  }
}

function bgPattern() {
  let groundY = (6.8 * windowHeight) / 8;
  let topY = windowHeight / 5.5;
  let rightWallX = (4 * windowWidth) / 5;
  let leftWallX = windowWidth / 5;

  textFont(space);
  textSize(32);

  push();
  noStroke();
  fill("white");

  push();

  push();
  textAlign(CENTER, TOP);
  text("Changeable", (rightWallX + windowWidth / 2) / 2, topY);

  pop();

  push();
  textAlign(CENTER, TOP);
  text("Predetermined", (leftWallX + windowWidth / 2) / 2, topY);

  pop();
  pop();

  push();
  // fill("white");
  noFill();
  stroke("white");
  rect(leftWallX, topY, (rightWallX - leftWallX) / 2, groundY - topY, 20);
  rect(width / 2, topY, (rightWallX - leftWallX) / 2, groundY - topY, 20);
  // line(width / 2, topY, width / 2, groundY);
  pop();
}

function rectFlower(x, y) {
  let par = (windowHeight / 1050) * (windowWidth / 1700);

  push();
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  translate(x, y);

  push();
  for (i = 0; i < 6; i++) {
    rotate(30);
    rect(0, 0, 100 * par, 16 * par, 6 * par);
  }
  pop();
  pop();
}

function roundFlower(x, y) {
  let par = (windowHeight / 1050) * (windowWidth / 1700);

  push();
  rectMode(CENTER);
  angleMode(DEGREES);
  noStroke();
  translate(x, y);
  rotate(45);

  push();
  for (i = 0; i < 2; i++) {
    rotate(360 / 4);
    rect(0, 0, 100 * par, 50 * par, 20 * par);
  }
  pop();
  pop();
}

function pointFlower(x, y) {
  let par = (windowHeight / 1050) * (windowWidth / 1700);

  push();

  angleMode(DEGREES);
  noStroke();
  translate(x, y);

  push();
  quad(0, 52 * par, 30 * par, 0, 0, -52 * par, -30 * par, 0);
  quad(52 * par, 0, 0, -30 * par, -52 * par, 0, 0, 30 * par);

  pop();
  pop();
}

function legend() {
  let topY = windowHeight / 5 + 10;
  let rightX = (4 * windowWidth) / 5 + 50;
  let gap = 40;

  push();
  textFont(space);
  fill("white");
  noStroke;
  textSize(20);
  textAlign(LEFT, TOP);

  // title of the whole page!
  push();
  textAlign(CENTER, TOP);
  textSize(36);
  text("Do you believe fate is predetermined,", width / 2, 35);
  text("or is it changeable?", width / 2, 85);
  pop();

  text("Agnostic", rightX + 40, topY);
  image(imgAgnostic, rightX, topY, 30, 30);

  text("Atheist", rightX + 40, topY + gap);
  image(imgAtheist, rightX, topY + gap, 30, 30);

  text("Buddhist", rightX + 40, topY + gap * 2);
  image(imgBuddhist, rightX, topY + gap * 2, 26, 26);

  text("Catholic", rightX + 40, topY + gap * 3);
  image(imgCatholic, rightX, topY + gap * 3, 26, 26);

  text("Christian", rightX + 40, topY + gap * 4);
  image(imgChristian, rightX, topY + gap * 4, 26, 26);

  text("Not Sure", rightX + 40, topY + gap * 5);
  image(imgNotSure, rightX, topY + gap * 5, 25, 25);

  pop();
}
