datas = [
  {
    par: "1",
    words:
      "I think I feel it more in the two extremes: when I'm really grateful and when I'm really helpless. I think it's beneficial for humans to believe that we aren't alone in both situations.",
    religion: "Agnostic",
    y: 0,
  },
  {
    par: "1",
    words:
      "I don't think there is a necessary cause-and-effect relationship. However, at both extremes, we do tend to rely on fate, one for hope and the other for gratitude.",
    religion: "Agnostic",
    y: 1,
  },
  {
    par: "1",
    words:
      "I do find that pattern of pain makes people think, create art, get more enlightened, for example I write and create art more when I feel pain than joy.",
    religion: "Buddhist",
    y: 0,
  },
  {
    par: "1",
    words: "Suffering",
    religion: "Agnostic",
    y: 2,
  },
  {
    par: "1",
    words: "I believe in fate either way.",
    religion: "Atheist",
    y: 3,
  },
  {
    par: "2",
    words:
      "I believe both are prone to believing in fate. There are many celebrities who are religious, and the same can be observed among homeless individuals.",
    religion: "Atheist",
    y: 0,
  },
  {
    par: "2",
    words: "Suffering, as people tend to blame something they cannot control.",
    religion: "Buddhist",
    y: 1,
  },
  {
    par: "2",
    words: "The more you suffer, the more likely you are to believe in fate.",
    religion: "Atheist",
    y: 2,
  },
  {
    par: "2",
    words:
      "The more one suffers, the more likely they are to believe in fate, in my opinion.",
    religion: "Atheist",
    y: 3,
  },
  {
    par: "2",
    words: "More suffering leads to more belief in fate.",
    religion: "Agnostic",
    y: 4,
  },

  {
    par: "2",
    words:
      "The more suffering there is, the more one tends to believe, as it can be a way to shift responsibility and find self-comfort.",
    religion: "Atheist",
    y: 5,
  },
  {
    par: "3",
    words:
      "Neither. I believe fate depends on my attitude towards life. (For instance, if I recognize a significant moment and have I tried my best to achieve the best outcome?)",
    religion: "Agnostic",
    y: 0,
  },
  {
    par: "3",
    words:
      "The more you seek answers externally, the more you're inclined to believe in fate. This isn't necessarily linked to one's state of suffering or enjoyment but rather to the influence of the ego.",
    religion: "Agnostic",
    y: 1,
  },
  {
    par: "3",
    words:
      "To me, it’s more like the more experiences you have (regardless of whether they are good or bad, whether they're your own experiences or someone else’s), the more likely you are to believe in fate.",
    religion: "Atheist",
    y: 2,
  },
  {
    par: "3",
    words:
      "No, I believe my suffering or enjoyment does not affect my belief in fate.",
    religion: "Buddhist",
    y: 3,
  },
  {
    par: "3",
    words: "I don't think whether one lives a good or bad life will matter.",
    religion: "Christian",
    y: 4,
  },
  {
    par: "4",
    words:
      "Perhaps the more happiness you experience, the more you believe in destiny. However, I don't know much about fate. There are times when luck and misfortune coincide, but not absolutely.",
    religion: "Agnostic",
    y: 0,
  },
  {
    par: "4",
    words:
      "I think people who enjoy their lives tend to believe in fate more because they already have the privilege of making choices.",
    religion: "Christian",
    y: 1,
  },
  {
    par: "4",
    words:
      "The people around me who live relatively privileged lives tend to like wearing some ornaments to believe in fate.",
    religion: "Atheist",
    y: 2,
  },
  {
    par: "4",
    words:
      "I believe both are prone to believing in fate. There are many celebrities who are deeply religious, and the same can be observed among homeless individuals.",
    religion: "Atheist",
    y: 3,
  },
  {
    par: "5",
    words:
      "I think I feel it more in the two extremes: when I'm really grateful and when I'm really helpless. I believe it's beneficial for humans to believe that we aren't alone in both situations.",
    religion: "Agnostic",
    y: 0,
  },
  {
    par: "5",
    words:
      "I don't think there is a necessary cause-and-effect relationship. However, at both extremes, we do tend to rely on fate, one for hope and the other for gratitude.",
    religion: "Agnostic",
    y: 1,
  },
  {
    par: "5",
    words:
      "Enjoying life! Whenever I face unexpected failure, I tend to retreat into my shell. However, I always remind myself that it's also my destiny to strive for a better future.",
    religion: "Catholic",
    y: 2,
  },
  {
    par: "5",
    words: "I believe in fate either way.",
    religion: "Atheist",
    y: 3,
  },
];

document.addEventListener("input", function () {
  let slider = document.getElementById("myRange");
  let value = slider.value;
  console.log(value);
});

document.addEventListener("DOMContentLoaded", function () {
  addQuotes();
});

const pars = ["1", "2", "3", "4", "5"];
function addQuotes() {
  const quotes = document.getElementById("quotes-container");

  for (let indexPar = 0; indexPar < pars.length; indexPar++) {
    let parGroup = document.createElement("div");
    parGroup.style.padding = 0;

    for (i = 0; i < datas.length; i++) {
      const col = hoverChangeColor(datas[i].religion);
      const column = datas[i].par;
      if (pars[indexPar] === datas[i].par) {
        parGroup.innerHTML += `<div class = "words ${col}" >${datas[i].words}</div>`;
        // quotes.innerHTML += `<div class = "words ${col}" >${datas[i].words}</div>`;
      }
    }
    quotes.appendChild(parGroup);
  }

  function hoverChangeColor(religion) {
    if (religion === "Agnostic") {
      return "words-agnostic";
    } else if (religion === "Atheist") {
      return "words-atheist";
    } else if (religion === "Buddhist") {
      return "words-buddhist";
    } else if (religion === "Catholic") {
      return "words-catholic";
    } else if (religion === "Christian") {
      return "words-christian";
    }
  }
}
