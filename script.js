var header = document.querySelector(".header");
var score = document.getElementById("score");
var submitButton = document.getElementById("submitButton");
var quizQuestionHeader = document.getElementById("question");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var correct = document.getElementById("correct");
var answer = document.getElementById("answer");
var finalScoreIs = document.getElementById("finalScoreIs");
var quizQuestionsPage = document.getElementById("quizQuestionsPage");
var questionButton = document.querySelector(".questionButton");
var quizChallengePage = document.getElementById("quizChallengePage");
var finalScorePage = document.getElementById("finalScorePage");
var highScoreButtons = document.getElementById("highScoreButtons");
var initialButton = document.getElementById("initialButton");
var initials = document.getElementById("initials");
var initialInput = document.getElementById("initialInput");
var done = document.getElementById("done");
var doneButton = document.getElementById("form-inline");
var timer = document.getElementById("timer");
var highScoreArray = []
var score = 0;
var questionIndex = 0;

var questions = [
  {
    "question": "Commonly used Data Types do NOT Include:",
    "one": "1. strings",
    "two": "2. booleans",
    "three": "3. alerts",
    "four": "4. numbers",
    "correct": "3. alerts",
  }, {
    "question": "The condition in an if / else statement is enclosed within ________.",
    "choice1": "1. quotes",
    "two": "2. curly brackets",
    "three": "3. parenthesis",
    "four": "4. square brackets",
    "correct": "3. parenthesis",
  }, {
    "question": "Arrays in JavaScript can be used to store ________.",
    "choice1": "1. numbers and strings",
    "choice2": "2. other arrays",
    "choice3": "3. booleans",
    "choice4": "4. all of the above",
    "correct": "4. all of the above",
  }, {
    "question": "String values must be enclosed within ________ when being assigned to variables",
    "choice1": "1. commas",
    "choice2": "2. curly brackets",
    "choice3": "3. quotes",
    "choice4": "4. parenthesis",
    "correct": "3. quotes",
  }, {
    "question": "A very useful tool used for developing and debugging for printing content to the debugger is:",
    "choice1": "1. JavaScript",
    "choice2": "2. terminal / bash",
    "choice3": "3. for loops",
    "choice4": "4. console.log",
    "correct": "4. console.log",
  },
]

function codeQuizChallenge() {
  quizChallengePage.style.display = "block";
  header.style.display = "block";
  quizQuestionsPage.style.display = "none";
  finalScorePage.style.display = "none";

  var startScore = 0;
  timer.textContent = "Time: " + startScore;
}

function resetVariables() { }

function startQuiz() {
  quizChallengePage.style.display = "none";
  quizQuestionsPage.style.display = "block";

  secondsLeft = 80;

  var timerInterval = setInterval(function () {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;
    if (secondsLeft === 0 || quizQuestionsPage.length === questionIndex) {
      clearInterval(timerInterval);
      showFinalScore();
    }
  }, 1000);
}

function showQuestions() {
  var q = quizQuestions[questionIndex];

  quizQuestionHeader.innerHTML = q.quizQuestionHeader;
  choice1.innerHTML = q.one;
  choice1.setAttribute("data-answer", q.one);
  choice2.innerHTML = q.one;
  choice2.setAttribute("data-answer", q.two);
  choice3.innerHTML = q.one;
  choice3.setAttribute("data-answer", q.three);
  choice4.innerHTML = q.one;
  choice4.setAttribute("data-answer", q.four);
}

showQuestions();
choice1.addEventListener("click", function (event) {
  checkAnswer(event);
})
choice2.addEventListener("click", function (event) {
  checkAnswer(event);
})
choice3.addEventListener("click", function (event) {
  checkAnswer(event);
})
choice4.addEventListener("click", function (event) {
  checkAnswer(event);
})

function checkAnswer(event) {
  event.preventDefault();

  var answer = event.currentTarget.dataset.answer;
  var correctAnswer = null;

  if (quizQuestions[questionIndex].correct === answer) {
    correctAnswer = answer;
  }
  if (answer === correctAnswer) {
    answer.Response.textContent = "Correct";
  } else {
    answerResponse.textContent = "Incorrect";
    secondsLeft -= 10
    if (secondsLeft < 0) {
      secondsLeft = 0;
    }
  }
  if (quizQuestions.length === questionIndex + 1) {
    showFinalScore();
    return;
  }
  questionIndex++;
  showQuestions();
}

function showFinalScore() {
  quizQuestionsPage.style.display = "none";
  highScoreButtons.style.display = "none";
  finalScorePage.style.display = "block";
  finalScoreIs.style.display = "block";
  initials.style.display = "block";
  initialButton.style.display = "block";
  initialInput.style.display = "block";

  finalScoreIs.textContent = "Final Score: " + secondsLeft;
  initialButton.textContent = "Submit";
  initials.textContent = "Enter Your Initials: ";
}

function showHighScores() {
  quizQuestionsPage.style.display = "none";
  highScoreButtons.style.display = "none";
  finalScorePage.style.display = "none";
  initials.style.display = "none";
  initialButton.style.display = 'none';
  initialInput.style.display = "none";
  highScoreButtons.style.display = "block";

  var getInitials = document.getElementById("initialInput").value;
  var highScoreArray = JSON.parse(localStorage.getItem("highScore")) || [];
  var localStorageArray = { score: secondsLeft, initials: getInitials };
  highScoreArray.push(localStorageArray)
  localStorage.setItem("highScore", JSON.stringify(highScoreArray));
  var highScores = getInitials + ": " + secondsLeft;
  $("#highScoreList").append(highScores)
}