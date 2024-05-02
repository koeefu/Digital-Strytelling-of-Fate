const datas = [
  {
    id: 1,
    religion: "Agnositc",
    ten: "yes",
    twenty: "yes",
    now: "yes",
    comment: "I believe that people have fate, but I don't believe in it.",
  },
  {
    id: 2,
    religion: "Christian",
    ten: "no",
    twenty: "no",
    now: "no",
    comment:
      "At the start of our lives, yes, we may have fates, but they keep changing.",
  },
  {
    id: 3,
    religion: "Atheist",
    ten: "yes",
    twenty: "yes",
    now: "yes",
    comment: null,
  },
  {
    id: 4,
    religion: "Agnostic",
    ten: "no",
    twenty: "no",
    now: "no",
    comment: null,
  },
  {
    id: 5,
    religion: "Not sure",
    ten: "no",
    twenty: "half-half",
    now: "yes",
    comment:
      "When I was ten years old, I didn't have many life experiences, lived in a simple environment, and had innocent thoughts, so I never thought about questions related to fate. By the time I turned twenty and had experienced some significant life events, I began to feel that certain things were beyond human control. I learned to do my best and leave the rest to fate, but I still didn't deeply consider what fate really meant. Now, after going through more experiences, I feel that there is some force guiding paths in the universe.",
  },
  {
    id: 6,
    religion: "Buddhist",
    ten: "yes",
    twenty: "no",
    now: "no",
    comment: null,
  },
  {
    id: 7,
    religion: "Christian",
    ten: "yes",
    twenty: "yes",
    now: "yes",
    comment: null,
  },
  {
    id: 8,
    religion: "Buddhist",
    ten: "no",
    twenty: "yes",
    now: "yes",
    comment: null,
  },
  {
    id: 9,
    religion: "Agnostic",
    ten: "no",
    twenty: "no",
    now: "yes",
    comment:
      "As I grow up, I encounter people whom I cherish more and more. When I were young, I didn't understand love. The more I cherish someone, the more I fear losing them. Therefore, when it comes to God, I would rather believe He exists than doubt His existence.",
  },
  {
    id: 10,
    religion: "Agnostic",
    ten: "no",
    twenty: "yes",
    now: "yes",
    comment:
      "The reason I changed my beliefs about fate was that I finally realized things around me were not right, and after being trapped by depression for so long, I decided to fight back and earn what I truly deserve.",
  },
  {
    id: 11,
    religion: "Atheist",
    ten: "no",
    twenty: "no",
    now: "no",
    comment:
      "I always believe there is no fate at all. However, sometimes, I will use it as a reason or excuse when I’m in some bad situation for psychological comfort.",
  },
  {
    id: 12,
    religion: "Agnostic",
    ten: "no",
    twenty: "no",
    now: "no",
    comment:
      "I don’t believe in fate. I prefer to view fate as something that pertains to the past, while the future is in my hands.",
  },
  {
    id: 13,
    religion: "Agnostic",
    ten: "no",
    twenty: "yes",
    now: "half-half",
    comment:
      "I feel like I'm too young to be considered a destiny-changer given all that I've been through. However, accurately predicting what will happen in a person's life is challenging. Who can say that what went well before 30 will not go well after 30? Perhaps there are times when many misfortunes can be prevented.",
  },
  {
    id: 14,
    religion: "Christian",
    ten: "yes",
    twenty: "yes",
    now: "yes",
    comment:
      "When I was young, I believed that God determined my fate, but now I am not entirely certain if it can change due to my decisions. As I learned more about reformed theology, I became convinced that my fate is predetermined. According to my understanding of reformed theology, God designs our lives according to our destiny, and we still use the power and wisdom that God gives us to make decisions and take actions, which is referred to as free will in theology. However, God knows every decision we will make in advance.",
  },
  {
    id: 15,
    religion: "Atheist",
    ten: "yes",
    twenty: "yes",
    now: "yes",
    comment: null,
  },
  {
    id: 16,
    religion: "Atheist",
    ten: "no",
    twenty: "no",
    now: "no",
    comment: "I no longer care about life.",
  },
  {
    id: 17,
    religion: "Atheist",
    ten: "no",
    twenty: "no",
    now: "no",
    comment:
      "People believe in fate because they can’t take control of their life. Life is random; it's probably not fate.",
  },
  {
    id: 18,
    religion: "Atheist",
    ten: "yes",
    twenty: "yes",
    now: "yes",
    comment: null,
  },
  {
    id: 19,
    religion: "Atheist",
    ten: "no",
    twenty: "yes",
    now: "yes",
    comment:
      "The reason I changed my attitude towards fate is that when I parted ways with people who were not in harmony with my energy field, things became much smoother, and there were fewer major disasters at home.",
  },
  {
    id: 20,
    religion: "Buddhist",
    ten: "yes",
    twenty: "yes",
    now: "yes",
    comment:
      "There is fate, but we still have agency. I have been practicing astrology and tarot for the past two years. We use these tools for guidance and enlightenment, but ultimately, how we interpret the messages depends on who we are and our life circumstances. What we do afterward also depends on our will. There is fate in the sense that even though there are some predetermined conditions, how our life unfolds is our doing.",
  },
  {
    id: 21,
    religion: "Agnostic",
    ten: "no",
    twenty: "no",
    now: "no",
    comment:
      "My view on fate hasn’t changed much; I believe more in karma than fate. While nothing is predetermined, we are born into certain circumstances (such as socio-economic status, location, family structure, etc.) and can choose our path from there. Events occur, and we have the choice of how to respond to them. When adversity happens, it wasn’t fate that made it that way, bad things just happen sometimes. we can either learn from them and use that knowledge for good, or dwell on why they happened to us.",
  },
  {
    id: 22,
    religion: "Christian",
    ten: "yes",
    twenty: "yes",
    now: "yes",
    comment:
      "I realized that my concept of fate for myself is likely different from what fate actually is for me! I didn’t like the situation I was in and believed I was destined to be stuck there. However, looking back, that situation was meant to enable me to take care of someone I cared about. That was my true fate, I hope!",
  },
  {
    id: 23,
    religion: "Buddhist",
    ten: "yes",
    twenty: "yes",
    now: "yes",
    comment:
      "I believe in fate, but not necessarily; it's more of a vibe for me.",
  },
  {
    id: 24,
    religion: "Catholic",
    ten: "yes",
    twenty: "yes",
    now: "yes",
    comment:
      "I changed my attitude towards fate; now I have a certain bravery that I can change my life myself.",
  },
  {
    id: 25,
    religion: "Atheist",
    ten: "no",
    twenty: "no",
    now: "half-half",
    comment:
      "I gradually believe people have fates, but they are not decided by God or Gods; rather, they are influenced by the principles of the world. Sometimes, people can determine their fates when they possess strong energy and belief in something.",
  },
  {
    id: 26,
    religion: "Atheist",
    ten: "no",
    twenty: "no",
    now: "no",
    comment:
      "Instead of believing in fate, I believe it's all about effort. All fates are consequences of actions, and by changing actions, you should be able to change your fate.",
  },
  {
    id: 27,
    religion: "Agnositc",
    ten: "yes",
    twenty: "yes",
    now: "yes",
    comment: null,
  },
  {
    id: 28,
    religion: "Not sure",
    ten: "no",
    twenty: "half-half",
    now: "half-half",
    comment:
      "The reason why I somewhat changed my belief in fate is that as I grow older, I start to feel that life is just like that—no matter how we live, it's still living.",
  },
  {
    id: 29,
    religion: "Buddhist",
    ten: "no",
    twenty: "no",
    now: "no",
    comment: null,
  },
  {
    id: 30,
    religion: "Atheist",
    ten: "no",
    twenty: "yes",
    now: "yes",
    comment:
      "The reason why I somewhat changed my belief in fate is that when encountering something bad, it's often attributed to bad luck or being destined for it, which serves as a form of self-consolation. Alternatively, one day, with nothing else to do, I had my fortune told by a master who predicted that I would become wealthy in the future, and suddenly I decided to start believing in fate.",
  },
  {
    id: 31,
    religion: "Agnositc",
    ten: "yes",
    twenty: "yes",
    now: "yes",
    comment:
      "My belief in fate has never changed; I've always thought that what we do and when we work to achieve our goals is destiny. When you alter your perception of destiny due to a significant event that impacts you, that event itself may be part of your destiny. This is why the notion of a 'change of destiny' is merely a beautiful vision in people's minds.",
  },
  {
    id: 32,
    religion: "Buddhist",
    ten: "yes",
    twenty: "yes",
    now: "yes",
    comment: null,
  },
  {
    id: 33,
    religion: "Agnositc",
    ten: "no",
    twenty: "yes",
    now: "yes",
    comment:
      "The concept of fate often arises during moments of feeling lost and seeking guidance. I didn't think much about fate as a kid, but at age 20, as I encountered more experiences, I began to seek more confirmation. Now, going through more life events, it seems like there's a combination of agency and opportunities for each person.",
  },
  {
    id: 34,
    religion: "Christian",
    ten: "no",
    twenty: "yes",
    now: "yes",
    comment: null,
  },
  {
    id: 35,
    religion: "Agnositc",
    ten: "yes",
    twenty: "no",
    now: "yes",
    comment:
      "When I was younger, influenced by my family's secular religious views, I believed in something guiding us beyond myself. Over time, I came to view religion as a social framework or a repository of wisdom from our predecessors. Lack of understanding in the world can lead to existential crises. Now, with a deeper understanding of science, philosophy, and theology, I've rationalized fate to align with my beliefs and provide direction.",
  },
  {
    id: 36,
    religion: "Buddhist",
    ten: "no",
    twenty: "yes",
    now: "yes",
    comment:
      "I started thinking about fate in my twenties, questioning the meaning of our existence but not delving deep into the question. I read a lot of different philosophical theories but was very confused back then. Now that I'm turning 30 soon and have been exploring spirituality intensively in my late twenties, I believe that people have destinies, but we create our own fate. The world is a reflection of our minds, and there's no one outside of us.",
  },
];

let toolTip;
let toolTipWidth;
let shapes = [];

document.addEventListener("DOMContentLoaded", function () {
  addTen();
  addTwenty();
  addNow();
  toolTip = document.getElementById("tooltip");
  // console.log(toolTip);
  addShapesEventListener();
});

function addShapesEventListener() {
  shapes = document.querySelectorAll(".shape");

  shapes.forEach((shapeEl) => {
    const elPosition = shapeEl.getBoundingClientRect();
    console.log("elposition: ", elPosition);
    let selectedElId = shapeEl.dataset.id;

    shapeEl.style.cursor = "pointer";

    shapeEl.addEventListener("mouseover", () => {
      // console.log(selectedElId);

      shapes.forEach((shapeEl) => {
        // Check if the dataset ID of the current shape matches the selectedElId
        if (shapeEl.dataset.id === selectedElId) {
          // Apply style changes if the background color is white
          if (shapeEl.style.backgroundColor === "white") {
            shapeEl.style.backgroundColor = "red";
          }

          // Apply style changes if the border color is white
          if (shapeEl.style.borderColor === "white") {
            shapeEl.style.borderColor = "red";
          }

          if (shapeEl.style.backgroundImage === 'url("images/half-half.png")') {
            shapeEl.style.backgroundImage = 'url("images/half-half-red.png")';
          }
        } else {
          shapeEl.style.opacity = "0.4";
        }
      });

      toolTip.style.display = "initial";

      toolTip.style.top = 80 + "px";
      if (selectedElId <= 29) {
        toolTip.style.left = elPosition.left + 20 + "px";
        // console.log(toolTip.style.left);
      } else {
        toolTipWidth = toolTip.offsetWidth; // Get tooltip width

        toolTip.style.right =
          window.innerWidth - elPosition.right + elPosition.width + 1 + "px";
        console.log(elPosition);
      }
      selectedShapeContent = getContentOfSelectedShape(selectedElId);
      toolTip.innerHTML = selectedShapeContent;
    });
  });

  shapes.forEach((shapeEl) => {
    let selectedElId = shapeEl.dataset.id;

    shapeEl.addEventListener("mouseleave", () => {
      // console.log(selectedElId);

      shapes.forEach((shapeEl) => {
        if (shapeEl.dataset.id === selectedElId) {
          // Apply style changes if the background color is white
          if (shapeEl.style.backgroundColor === "red") {
            shapeEl.style.backgroundColor = "white";
          }

          if (shapeEl.style.borderColor === "red") {
            // Change border color of shapeEl to white
            shapeEl.style.borderColor = "white";
          }

          if (
            shapeEl.style.backgroundImage === 'url("images/half-half-red.png")'
          ) {
            shapeEl.style.backgroundImage = 'url("images/half-half.png")';
          }
        } else {
          shapeEl.style.opacity = "1";
        }
      });

      toolTip.style.display = "none";
      toolTip.removeAttribute("style");
    });
  });
}

function getContentOfSelectedShape(id) {
  let result = datas.find((data) => {
    return data.id === Number(id);
  });

  return result.comment;
}

function addTen() {
  let feelAtTen = document.getElementById("ten");

  for (let i = 0; i < datas.length; i++) {
    let style = "";

    if (datas[i].ten === "yes") {
      style = "border: 1px solid white; background-color: white; width: 100%;";
    } else if (datas[i].ten === "no") {
      style = "border: 1px solid white; width: 100%; ";
    }

    feelAtTen.innerHTML += `<div  data-id=${datas[i].id} style="${style}" class="ten-shape shape"></div>`;
  }
}

function addTwenty() {
  let feelAtTwenty = document.getElementById("twenty");

  for (let i = 0; i < datas.length; i++) {
    let style = "";

    if (datas[i].twenty === "yes") {
      style = "border: 1px solid white; background-color: white; width: 100%;";
    } else if (datas[i].twenty === "no") {
      style = "border: 1px solid white; width: 100%; ";
    } else if (datas[i].twenty === "half-half") {
      style =
        "border: 1px solid white; width: 100%; background-image: url('images/half-half.png'); background-size: cover;background-repeat: no-repeat; background-position: center; ";
    }

    feelAtTwenty.innerHTML += `<div data-id=${datas[i].id} style="${style}" class="ten-shape shape"></div>`;
  }
}

function addNow() {
  let feelAtNow = document.getElementById("now");

  for (let i = 0; i < datas.length; i++) {
    let style = "";

    if (datas[i].now === "yes") {
      style = "border: 1px solid white; background-color: white;width: 100%;";
    } else if (datas[i].now === "no") {
      style = "border: 1px solid white;  width: 100%; ";
    } else if (datas[i].now === "half-half") {
      style =
        "border: 1px solid white; width: 100%; background-image: url('images/half-half.png'); background-size: cover;background-repeat: no-repeat; background-position: center;";
    }

    feelAtNow.innerHTML += `<div data-id=${datas[i].id} style="${style}" class="ten-shape shape"></div>`;
  }
}
