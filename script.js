// variables //

var score = 0;
var questionIndex = 0;

var quizQuestionHeader = document.getElementById("question");
var choice1 = document.getElementById("choice1");
var choice2 = document.getElementById("choice2");
var choice3 = document.getElementById("choice3");
var choice4 = document.getElementById("choice4");
var correct = document.getElementById("correct");
var answer = document.getElementById("answer");

var finalScoreIs = document.getElementById("finalScoreIs");
var quizQuestionsPage = document.getElementById("quizQuestionsPage");
var answerButtons = document.querySelector(".answerButtons");

var quizHomePage = document.getElementById("quizHomePage");
var quizCompletePage = document.getElementById("quizCompletePage");
var highScoreButtons = document.getElementById("highScoreButtons");

var initialButton = document.getElementById("initialButton"); 
var initials = document.getElementById("initials"); 
var submittedInitials = document.getElementById("submittedInitials"); 

var timer = document.getElementById("timer");

// quiz questions //

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

// timer //

timer.addEventListener("click", function () {
    if (holdInterval === 0) {
        holdInterval = setInterval(function () {
            secondsLeft--;
            currentTime.textContent = "Time: " + secondsLeft;

            if (secondsLeft <= 0) {
                clearInterval(holdInterval);
                allDone();
                currentTime.textContent = "Time's up!";
            }
        }, 1000);
    }   
})

// start quiz page //

function quizHomePage () {
    quizQuestionsPage.style.display = "none";
    quizCompletePage.style.display = "none";

    var score = 0;
    timer.textContent = "time" + score;
}

function resetVariables() {
    score = 0;
    questionIndex = 0;
}

// show questions //

function startQuiz () {
    quizQuestionsPage.style.display = "block";

    secondsLeft = 90;
}

function showQuestions() {
    var q = question [questionIndex];
  
    quizQuestionHeader.innerHTML = q.quizQuestionHeader;
    choice1.innerHTML = q.one;
    choice1.setAttribute("data-answer", q.one);
    choice2.innerHTML = q.two;
    choice2.setAttribute("data-answer", q.two);
    choice3.innerHTML = q.three;
    choice3.setAttribute("data-answer", q.three);
    choice4.innerHTML = q.four;
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
  
    if (question[questionIndex].correct === answer) {
        correctAnswer = answer;
    }
    if (answer === correctAnswer) {
    answer.textContent = "Correct!"; 
    } else {
    answer.textContent = "Wrong!"; 
        secondsLeft -= 10
        if (secondsLeft < 0) {
            secondsLeft = 0;
        }
    }
    if (question.length === questionIndex+1) {
      showFinalScore(); // 
      return;
    }
    questionIndex++;
    showQuestions();
  }