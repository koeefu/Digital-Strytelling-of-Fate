let ans = [
  "an excuse",
  "a mix of destiny and luck",
  "the birth environment",
  "small decisions",
  "a past tense",
  "man-made",
  "opportunities",
  "a belief",
  "necessities",
  "randomness",
  "designed by God",
  "lottery",
  "habits",
];

let explain = [
  "Actually, I don't particularly believe in fate, but sometimes I do say things like 'I do have good fate'. For me, fate is an excuse that can be endlessly exploited. I’ve tried fortune-telling several times, I usually only believe in the good parts. Bad things are just fate, and good things are what I deserve.",
  "In Chinese, fate is the combination of two characters - ‘命’ (Destiny) and ‘运’ (Luck). ‘命’ is predetermined, and ‘运’ is changeable. Hard work can increase the probability of success in something, and sometimes, the higher the probability of success, the better one's sense of luck becomes.",
  "Fate is related to the time and place of your birth, but it becomes changeable when you grow up and have a strong belief to change.",
  "Fate is about every small decision I've made coming together in the end.",
  "I prefer to define fate as the past tense, but the future is in one's hands. Perhaps fate is a paraphrase of growth.",
  "In fact, many things that appear to be dictated by fate are man-made. There are times when it might be more straightforward to focus on one's efforts. Perhaps many misfortunes can be artificially blocked at times. For example, we can exercise more for physical health.",
  "I see fate as an opportunity. When I started to realize that maybe it's fate, if it's gonna be a bad experience, I will think about how I can mitigate it. If it's gonna be a good experience, I will think about how I can enjoy it and make full use of it.",
  "Fate is kind of like a belief, while also giving myself a suggestion, whether it's true or false, it will lead me in a more positive direction and enhance my energy field. While leaving people with energy fields mismatching mine, everything is just gonna be better.",
  "It's meant to be. There might be the illusion that you can change your life's course, but it will ultimately lead back to the designated path for each person.",
  "People believe in fate because they can't take control of their lives. However, life itself is random enough, perhaps not necessarily tied to fate.",
  "When I was young, I believed God determined my fate, but I wasn't sure if it could change due to my decisions. As I learned more about reformed theology, I became convinced that my fate is predetermined. God doesn't manipulate our lives to fit a predestined destiny; instead, we still have free will to make decisions and take actions using the power and wisdom God gives us. However, God knows every decision we make in advance.",
  "Fate is like going to buy the lottery for over 50 years, analyzing data endlessly, yet never hitting the jackpot. Meanwhile, a friend casually buys a ticket and wins big. How do you reconcile this? Fate has shown up at this moment. Our choices are more limited than we believe, with only 2 to 4 possibilities within our fate's framework, determining our gains and losses.",
  "I feel that fate is similar to habits for me. It's very difficult to change our habits, especially those we've developed over years, but it's possible if you have a strong and clear understanding of why you want to change them.",
];

let count = 0;

let currentAnswerIndex = 0;
let isHovering = false;
let answer;
let fate;
let period;

let gap = 188;
let noHoverSize = 48;
let hoverSize = 48;

let textHeight;

let excuse;
let mix;
let birthEnviron;
let decision;
let pastTense;
let manMade;
let opportunities;
let belief;
let necessities;
let randomness;
let god;
let lottery;
let habits;

function preload() {
  space = loadFont("fonts/SpaceGrotesk-Light.ttf");
  dm = loadFont("fonts/DMSans-ExtraLight.ttf");

  excuse = loadImage("images/definition/excuse.png");
  mix = loadImage("images/definition/mix.png");
  birthEnviron = loadImage("images/definition/birthEnviron.png");
  decision = loadImage("images/definition/decision.png");
  pastTense = loadImage("images/definition/pastTense.png");
  manMade = loadImage("images/definition/manMade.png");
  opportunities = loadImage("images/definition/opportunities.png");
  belief = loadImage("images/definition/belief.png");
  necessities = loadImage("images/definition/necessities.png");
  randomness = loadImage("images/definition/randomness.png");
  god = loadImage("images/definition/god.png");
  lottery = loadImage("images/definition/lottery.png");
  habits = loadImage("images/definition/habits.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(RGB);
}

function draw() {
  textHeight = windowHeight / 2 - 40;
  background(0);
  hoverText();
  // console.log(mouseX);
  // console.log(currentAnswerIndex);
}

function isMouseOverText() {
  textFont(space);
  let textW = textWidth(ans[currentAnswerIndex]);
  // console.log(textW);
  // let textH = 28; // Assuming single line of text

  // let textY = windowHeight / 2 - 20; // Calculate text Y position directly

  if (
    mouseX > gap &&
    mouseX < gap + textW &&
    mouseY > textHeight - 36 &&
    mouseY < textHeight
  ) {
    return true;
  } else {
    return false;
  }
}

function hoverText() {
  if (!isMouseOverText()) {
    noStroke();
    textSize(noHoverSize);
    fill("white");
    fate = text("Fate is", 20, textHeight);
    answer = text(ans[currentAnswerIndex], gap, textHeight);
    period = text(".", gap + textWidth(ans[currentAnswerIndex]), textHeight);

    counter();

    let frameBasedIndex = floor(counter() / 140) % ans.length;

    if (frameBasedIndex !== currentAnswerIndex) {
      currentAnswerIndex = frameBasedIndex;
    }

    stroke(255);
    strokeWeight(1.8);
    line(
      gap,
      textHeight + 4,
      gap + textWidth(ans[currentAnswerIndex]),
      textHeight + 4
    );
  } else {
    let c = color(255, 255, 255);
    c.setAlpha(128);
    noStroke();
    textSize(noHoverSize);
    fill(c);
    fate = text("Fate is", 20, textHeight);

    // main
    push();
    stroke("white");
    strokeWeight(1);
    textSize(hoverSize);

    // fill("white");
    fill("white");
    answer = text(ans[currentAnswerIndex], gap, textHeight);
    pop();

    // period
    let w = textWidth(ans[currentAnswerIndex]);
    textSize(noHoverSize);
    fill(c);
    period = text(".", gap + w, textHeight);

    details(currentAnswerIndex);
  }
}

function details(explainIndex) {
  definition = [
    excuse,
    mix,
    birthEnviron,
    decision,
    pastTense,
    manMade,
    opportunities,
    belief,
    necessities,
    randomness,
    god,
    lottery,
    habits,
  ];

  noStroke();
  textFont("DM Sans");
  fill("white");
  textSize(24);

  image(
    definition[explainIndex],
    gap,
    textHeight + 20,
    windowWidth / 2,
    ((windowWidth / 2) * definition[explainIndex].height) /
      definition[explainIndex].width
  );

  // text(explain[explainIndex], gap + 10, windowHeight / 2 + 20, windowWidth / 2);
}

function counter() {
  count += 1;
  return count;
}
