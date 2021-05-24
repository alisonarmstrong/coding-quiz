var header = document.querySelector(".header");
var score = document.getElementById("score");
var submitButton =  document.getElementById("submitButton");
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

var score = 0;
var questionIndex = 0;

var questions = [
    {
        "question" : "Commonly used Data Types do NOT Include:", 
        "one" : "1. strings",
        "two" : "2. booleans",
        "three" : "3. alerts",
        "four" : "4. numbers",
        "correct" : "3. alerts",
        },{
        "question" : "The condition in an if / else statement is enclosed within ________.",
        "choice1" : "1. quotes",
        "two" : "2. curly brackets",
        "three" : "3. parenthesis",
        "four" : "4. square brackets",
        "correct" : "3. parenthesis",
        },{
        "question" : "Arrays in JavaScript can be used to store ________.",
        "choice1" : "1. numbers and strings",
        "choice2" : "2. other arrays",
        "choice3" : "3. booleans",
        "choice4" : "4. all of the above",
        "correct" : "4. all of the above",
        },{
         "question" : "String values must be enclosed within ________ when being assigned to variables",
         "choice1" : "1. commas",
         "choice2" : "2. curly brackets",
         "choice3" : "3. quotes",
         "choice4" : "4. parenthesis",
         "correct" : "3. quotes",
        },{
         "question" : "A very useful tool used for developing and debugging for printing content to the debugger is:",
         "choice1" : "1. JavaScript",
         "choice2" : "2. terminal / bash",
         "choice3" : "3. for loops",
         "choice4" : "4. console.log",
         "correct" : "4. console.log",
        },
]

function codeQuizChallenge() {
  quizChallengePage.style.display = "block";
  header.style.display = "block";
  quizQuestionsPage.style.display = "none";
  finalScorePage.style.display = "none";
}

function resetVariables() {
  quizChallengePage.style.display = "none";
  quizQuestionsPage.style.display = "block";

  secondsLeft = 80;

  var timerInterval =setInterval(function() {
    secondsLeft--;
    timer.textContent = "Time: " + secondsLeft;
    if (secondsLeft === 0 || quizQuestionsPage.length === questionIndex) {
      clearInterval(timerInterval);
      showFinalScore();
    }
  }, 1000);
}