const start = document.querySelector('#start');
const quiz = document.querySelector('.quiz');
const question = document.querySelector('.question');
const questionImage = document.querySelector('.questionImage');
const choiceA = document.getElementById('A');
const choiceB = document.getElementById('B');
const choiceC = document.getElementById('C');
const choiceD = document.getElementById('D');
const counter = document.querySelector('.counter');
const timeGauge = document.querySelector('.timeGauge');
const progress = document.querySelector('.progress');
const scoreDiv = document.querySelector('.score');

let questions = [
  {
    number: 1,
    question: "Which of these players is not among the 13 women who have finished the season as the Year Ending #1 player?",
    imageSource: "images/avatar.png",
    choiceA: "Victoria Azarenka",
    choiceB: "Kim Clijsters",
    choiceC: "Angelique Kerber",
    choiceD: "Lindsay Davenport",
    correctAnswer: "B"
  },
  {
    number: 2,
    question: "Which player hit the most aces in the 2018 season?",
    imageSource: "images/serving.png",
    choiceA: "Karolina Pliskova",
    choiceB: "Julia Goerges",
    choiceC: "Petra Kvitova",
    choiceD: "Kiki Bertens",
    correctAnswer: "B"
  },
  {
    number: 3,
    question: "Which Grand Slam host nation has yet to win the Fed Cup?",
    imageSource: "images/game.png",
    choiceA: "USA",
    choiceB: "France",
    choiceC: "Australia",
    choiceD: "Great Britain",
    correctAnswer: "D"
  },
  {
    number: 4,
    question: "Which legend won the first WTA Finals tournament in 1972?",
    imageSource: "images/ball.png",
    choiceA: "Martina Navratilova",
    choiceB: "Evonne Goolagong Cawley",
    choiceC: "Chris Evert",
    choiceD: "Billie Jean King",
    correctAnswer: "C"
  },
  {
    number: 5,
    question: "Which of these players is not among the 13 women who have finished the season as the Year Ending #1 player?",
    imageSource: "images/game.png",
    choiceA: "Indian Wells, Miami, Rome, Beijing",
    choiceB: "Indian Wells, Miami, Madrid, Beijing",
    choiceC: "Indian Wells, Miami, Rome, Dubai",
    choiceD: "Miami, Toronto/Montreal, Madrid, Dubai",
    correctAnswer: "B"
  },
  {
    number: 6,
    question: "The WTA was founded in which year?",
    imageSource: "images/ball.png",
    choiceA: "1979",
    choiceB: "1968",
    choiceC: "1973",
    choiceD: "1971",
    correctAnswer: "C"
  },
  {
    number: 7,
    question: "What is the record for the most WTA singles titles won by a single player?",
    imageSource: "images/avatar.png",
    choiceA: "72",
    choiceB: "157",
    choiceC: "107",
    choiceD: "167",
    correctAnswer: "D"
  },
  {
    number: 8,
    question: "Which player holds the record for the longest run at Number 1?",
    imageSource: "images/sport.png",
    choiceA: "Steffi Graf",
    choiceB: "Serena Williams",
    choiceC: "Martina Navratilova",
    choiceD: "Monica Seles",
    correctAnswer: "A"
  },
  {
    number: 9,
    question: "I have won 2 WTA tournaments, one of which is a Grand Slam. Who am I?",
    imageSource: "images/game.png",
    choiceA: "Flavia Pennetta",
    choiceB: "Sam Stosur",
    choiceC: "Sloane Stephens",
    choiceD: "Jelena Ostapenko",
    correctAnswer: "D"
  },
  {
    number: 10,
    question: "I have won 2 WTA tournaments, one of which is a Grand Slam. Who am I?",
    imageSource: "images/ball.png",
    choiceA: "Elina Svitolina and Sloane Stephens",
    choiceB: "Caroline Wozniacki and Venus Williams",
    choiceC: "Karolina Pliskova and Elina Svitolina",
    choiceD: "Caroline Wozniacki and Simona Halep",
    correctAnswer: "A"
  },
  {
    number: 11,
    question: "They are all known as some of the best returners in the game. But which of these players has never beaten perhaps the best server ever, Serena Williams?",
    imageSource: "images/serving.png",
    choiceA: "Simona Halep",
    choiceB: "Elina Svitolina",
    choiceC: "Caroline Wozniacki",
    choiceD: "Agnieszka Radwanska",
    correctAnswer: "D"
  },
  {
    number: 12,
    question: "Which Russian player won the singles gold medal at the Beijing Olympics in 2008?",
    imageSource: "images/avatar.png",
    choiceA: "Elena Dementieva",
    choiceB: "Maria Sharapova",
    choiceC: "Dinara Safina",
    choiceD: "Vera Zvonareva",
    correctAnswer: "A"
  },
  {
    number: 13,
    question: "Prior to her 2018 US Open and 2019 Australian Open victories, what was the furtherest round Naomi Osaka had reached in a Grand Slam?",
    imageSource: "images/sport.png",
    choiceA: "Quarterfinals",
    choiceB: "Second round",
    choiceC: "Third round",
    choiceD: "Fourth round",
    correctAnswer: "D"
  },
  {
    number: 14,
    question: "Osaka and Halep are two of the players at the top of the game. Who wins their head to head to date?",
    imageSource: "images/game.png",
    choiceA: "Halep - 2 matches to 1 for Osaka",
    choiceB: "Osaka - 2 matches to 1 for Halep",
    choiceC: "Halep - 4 matches to 1 for Osaka",
    choiceD: "Neither - they've won 1 each",
    correctAnswer: "C"
  },
  {
    number: 15,
    question: "The Grand Slam titles were shared by 4 players in 2018, but which player won the most matches?",
    imageSource: "images/ball.png",
    choiceA: "Caroline Wozniacki",
    choiceB: "Simona Halep and Angelique Kerber",
    choiceC: "Simona Halep",
    choiceD: "Naomi Osaka",
    correctAnswer: "B"
  }
]

const lastQuestion = question.length - 1;
let runningQuestion = 0;

let count = 0;
const questionTime = 10;
const gaugeWidth = 150;
const gaugeUnitProgress = gaugeWidth / questionTime;
let TIMER;
let score;

function showQuestion() {
  let thisQuestion = questions[runningQuestion];

  question.innerHTML = "<p>" + thisQuestion.question + "</p>";
  questionImage.innerHTML = "<img src=" + thisQuestion.imageSource + ">";
  choiceA.innerHTML = thisQuestion.choiceA;
  choiceB.innerHTML = thisQuestion.choiceB;
  choiceC.innerHTML = thisQuestion.choiceC;
  choiceD.innerHTML = thisQuestion.choiceD;

}

start.addEventListener("click", startQuiz);

startQuiz();

function startQuiz() {
  console.log('test');
  start.style.display = "none";
  showQuestion();
  quiz.style.display = "block";
  showProgress();
  showCounter();
  TIMER = setInterval(showCounter,1000);
}

function showProgess() {
  for (let i = 0; i <= lastQuestion; i++) {
    progress.innerHTML += "<div class='prog' id=" + i +"></div>";
  }
}


function showCounter() {
  if(count <= questionTime) {
    counter.innerHTML = count;
    timeGauge.style.width = count * gaugeUnitProgress;
    count++;
  } else {
    count = 0;
    wrongAnswer();
    if (runningQuestion < lastQuestion) {
      runningQuestion++;
      showQuestion();
    } else {
      clearInterval(TIMER);
      showScore();
    }
  }
}

function checkAnswer(answer) {
  if (answer == questions[runningQuestion].correctAnswer) {
    score++;
    correctAnswer();
  } else {
    wrongAnswer();
  }
  count = 0;
  if (runningQuestion < lastQuestion) {
    runningQuestion++;
    showQuestion();
  } else {
    clearInterval(TIMER);
    showScore();
  }
}

function correctAnswer(){
  document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}

function wrongAnswer() {
  document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}

function showScore() {
  scoreDiv.style.display = block;

  const scorePerCent = Math.round(100 * score/questions.length);

  let scoreImage = (scorePerCent >= 80) ? "img/5.png" :
                   (scorePerCent >= 60) ? "img/4.png" :
                   (scorePerCent >= 40) ? "img/3.png" :
                   (scorePerCent >= 20) ? "img/2.png" :
                    "img/1.png";

  scoreDiv.innerHTML = "<img src=" + scoreImage + ">";
  scoreDiv.innerHTML += "<p>" + scorePerCent +"%</p>";
}
