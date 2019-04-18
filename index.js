const questionImage = document.querySelector('.questionImage');

let position = 0, quiz, test_status, question, choice, choices, choiceA, choiceB, choiceC, choiceD, correct = 0;

const questions =
  [["Which of these players is not among the 13 women who have finished the season as the Year Ending #1 player?",
      "Victoria Azarenka",
      "Kim Clijsters",
      "Angelique Kerber",
      "Lindsay Davenport",
      "B"],

 ["Which player hit the most aces in the 2018 season?",
     "Karolina Pliskova",
    "Julia Goerges",
    "Petra Kvitova",
    "Kiki Bertens",
    "B",
  ],
  ["Which Grand Slam host nation has yet to win the Fed Cup?",
    "USA",
    "France",
    "Australia",
    "Great Britain",
    "D"
  ],
  [
     "Which legend won the first WTA Finals tournament in 1972?",
    "Martina Navratilova",
    "Evonne Goolagong Cawley",
    "Chris Evert",
    "Billie Jean King",
    "C"
  ],
  [
     "What are the four Premier Mandatory tournamets on the WTA Tour?",

    "Indian Wells, Miami, Rome, Beijing",
    "Indian Wells, Miami, Madrid, Beijing",
    "Indian Wells, Miami, Rome, Dubai",
    "Miami, Toronto/Montreal, Madrid, Dubai",
    "B"
  ],
  [
     "The WTA was founded in which year?",
    "1979",
    "1968",
    "1973",
    "1971",
    "C"
  ],
  [
    "What is the record for the most WTA singles titles won by a single player?",
    "72",
    "157",
    "107",
    "167",
    "D"
  ],
  [
     "Which player holds the record for the longest run at Number 1?",
    "Steffi Graf",
    "Serena Williams",
    "Martina Navratilova",
    "Monica Seles",
    "A"
  ],
  [
     "I have won 2 WTA tournaments, one of which is a Grand Slam. Who am I?",

    "Flavia Pennetta",
    "Sam Stosur",
    "Sloane Stephens",
    "Jelena Ostapenko",
    "D"
  ],
  [
     "The championship match of the 2018 WTA Finals was played by which two players?",
    "Elina Svitolina and Sloane Stephens",
    "Caroline Wozniacki and Venus Williams",
    "Karolina Pliskova and Elina Svitolina",
    "Caroline Wozniacki and Simona Halep",
    "A"
  ],
  [
     "They are all known as some of the best returners in the game. But which of these players has never beaten perhaps the best server ever, Serena Williams?",
    "Simona Halep",
    "Elina Svitolina",
    "Caroline Wozniacki",
    "Agnieszka Radwanska",
    "D"
  ],
  [
     "Which Russian player won the singles gold medal at the Beijing Olympics in 2008?",
    "Elena Dementieva",
    "Maria Sharapova",
    "Dinara Safina",
    "Vera Zvonareva",
    "A"
  ],
  [
     "Prior to her 2018 US Open and 2019 Australian Open victories, what was the furtherest round Naomi Osaka had reached in a Grand Slam?",
    "Quarterfinals",
    "Second round",
    "Third round",
    "Fourth round",
    "D"
  ],
  [
     "Osaka and Halep are two of the players at the top of the game. Who wins their head to head to date?",
    "Halep - 2 matches to 1 for Osaka",
    "Osaka - 2 matches to 1 for Halep",
    "Halep - 4 matches to 1 for Osaka",
    "Neither - they've won 1 each",
    "C"
  ],
  [
   "The Grand Slam titles were shared by 4 players in 2018, but which player won the most matches?",
    "Caroline Wozniacki",
    "Simona Halep and Angelique Kerber",
    "Simona Halep",
    "Naomi Osaka",
    "B"
  ]
]

function _(x) {
  return document.getElementById(x);
}

function showQuestion() {
  quiz = _("quiz");
  if (position >= questions.length) {
    quiz.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct</h2>";
    _("test_status").innerHTML = "Test completed";
      position = 0;
      correct = 0;
      return false;
    }

  _("test_status").innerHTML = "Question " + (position+1) + " of " + questions.length;
  question = questions[position][0];
  choiceA = questions[position][1];
  choiceB = questions[position][2];
  choiceC = questions[position][3];
  choiceD = questions[position][4];
  quiz.innerHTML = '<div id="question"><p id="questionText">'+question+'</p></div>';
	quiz.innerHTML += '<input class="choice" type="radio" name="choices" value="A"> '+choiceA+'<br>';
	quiz.innerHTML += '<input class="choice" type="radio" name="choices" value="B"> '+choiceB+'<br>';
	quiz.innerHTML += '<input class="choice" type="radio" name="choices" value="C"> '+choiceC+'<br>';
  quiz.innerHTML += '<input class="choice" type="radio" name="choices" value="D"> '+choiceD+'<br><br>';
	quiz.innerHTML += '<button onclick="checkAnswer()">Submit Answer</button>';
}

function checkAnswer() {
  choices = document.getElementsByName("choices");
  for (let i = 0; i < choices.length; i++) {
    if(choices[i].checked) {
      choice = choices[i].value;
    }
  }
  if(choice == questions[position][5]) {
    correct++;
  }
  position++;
  showQuestion();
}

window.addEventListener('load', showQuestion, false)
