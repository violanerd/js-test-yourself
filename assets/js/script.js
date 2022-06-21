var question1 = {
    question: "Which one is a primitive value of Javascript?",
    answers: ["a. Boolean", "b. string", "c. number", "d. null", "e. all of the above"],
    correct: "e. all of the above"
};

var question2 = {
    question: "Which for loop has the correct syntax?",
    answers: ["a. for (i = 0; i < n; i++)", "b. for (var i = 0; i < n; i++)", "c. for var i = 0, i < n, i++", "d. for (var i = 0, i < n, i++)", "e. none of the above"],
    correct: "b. for (var i = 0; i < n; i++)"
};

var question3 = {
    question: "Choose the comparison operator that means strict equality:",
    answers: ["a. >=", "b. ==", "c. =", "d. ===", "e. none of the above"],
    correct: "d. ==="
};

var question4 = {
    question: "Which of the following is true about typeof?",
    answers: ["a. tells you the data type of the operand", "b. returns a string", "c. evaluates typeof '43' to string", "d. all of the above", "e. none of the above"],
    correct: "d. all of the above"
};
var question5 = {
    question: "What value does window.confirm() return?",
    answers: ["a. yes or no", "b. ok or cancel", "c. true or false", "d. all of the above", "e. none of the above"],
    correct: "c. true or false"
};
// an array to hold the questions
var questionArray =[question1, question2, question3, question4, question5];

// to start the quiz
var startQuizEl = document.querySelector("#start-wrapper");

// timer location
var timerEL = document.querySelector("#timer");

// start screen content to erase it
var welcomePEl = document.querySelector("#start-screen-content");

// selects where to listen for answer choice click
var questionEl = document.querySelector("#question-content");

// where the question number is announced 
var announcement = document.querySelector("#announcer");

// where the question is written
var question = document.querySelector("#question");

//where the answers are written
var answerContainerEl = document.querySelector("#answer-wrapper");

// validation
var correctEl = document.querySelector("#correct");
var incorrectEl = document.querySelector("#incorrect");

// end screen
var endEl = document.querySelector("#endscreen");

// variable to use for iterating through questions
var questionNum = 0;

// variable to countdown to the end of the game
var timeRemaining = 15;

var highscore = 0;

var startQuiz = function () {
    startQuizEl.textContent=("");
    welcomePEl.textContent=(""); 
    gameTimer();
    generateQuestions();
    
    //add code to display a timer
};

function gameTimer () {
    var timer = setInterval(function () {
        // continue
        if (timeRemaining > 1){
            timerEL.textContent = timeRemaining;
            timeRemaining--;
        }else {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
};

function generateQuestions () {
    //code to generate question/answers
    announcement.textContent=("Question " + (questionNum + 1).toString());
    question.textContent=questionArray[questionNum].question;
    // display answers
    var ansArray = questionArray[questionNum].answers
    for (var i = 0; i < ansArray.length; i++){
        var ansButtonEl = document.createElement("button");
        ansButtonEl.textContent = ansArray[i];
        answerContainerEl.appendChild(ansButtonEl);
    }
};

var validate = function(event) {     
    // when clicked, move on to the next question
    var element = event.target
    if (element.textContent===questionArray[questionNum].correct){
        correctEl.textContent = "Correct!";
        correctEl.setAttribute("style", "border-top: 2px dotted black");
        setTimeout(function(){
            correctEl.textContent="",
            correctEl.removeAttribute("style", "border-top: 2px dotted black")}, 1000);
    } 
    else if (element.textContent!=questionArray[questionNum].correct) {
        incorrectEl.textContent = "Incorrect!";
        incorrectEl.setAttribute("style", "border-top: 2px dotted black");
        timeRemaining = timeRemaining - 3;
        setTimeout(function(){
            incorrectEl.textContent="",
            incorrectEl.removeAttribute("style", "border-top: 2px dotted black")}, 1000);
        }
    
    answerContainerEl.textContent="";
    questionNum++;
    
    if (questionNum === 5){

        highscore = timeRemaining;
        timeRemaining =0;
    } else {
        generateQuestions(); 
    }
}
function endGame(){
    timerEL.textContent = "";
    questionEl.removeEventListener("click", validate);
    answerContainerEl.textContent="";
    if (highscore===0){
        announcement.textContent="You ran out of time!";
        question.textContent="Better luck next time!";

        var gobackEl = document.createElement("button");
        gobackEl.textContent="Go Back and Try Again";
        gobackEl.setAttribute("style", "border: 3px solid black; background-color: #BEBEBE;");
        endEl.appendChild(gobackEl);
        endEl.addEventListener("click", function (){
            location.assign("./index.html");
        });
    } else {
        announcement.textContent="All Done!";
        question.textContent="Your final score is " + highscore;
        // dynamically generate an input form for initials
        
        var highScoreInput = document.createElement("input"); 
        highScoreInput.setAttribute("type", 'text');
        highScoreInput.setAttribute("id", "initials");
        
        var label = document.createElement("label");
        label.setAttribute("for", "initials");
        label.textContent = "Enter Initials: ";
        
        var submitHighScoresBtn = document.createElement("button");
        submitHighScoresBtn.textContent = "submit";
        endEl.append(label, highScoreInput, submitHighScoresBtn);
        
        submitHighScoresBtn.addEventListener("click", storeHighScore);
        // how to make this work with enter? have to look at the module
    }   
};

function storeHighScore (){
    // high sore function
    // adds name to highscore with input and localstorage
    // asks to play again

    var initials = document.getElementById("initials").value;
    localStorage.setItem(initials, "to-do-json-stringify-timer");
    location.assign("./highscores.html"); //takes to highscore page
}

// function to listen on load of highscore
//--display highscores from local storage
//-- create two buttons to go back to the quiz or clear highscores


// function to end the game when the timer hits zero **  OR all questions are answered 
// this will be a conditional OR 
// need to understand how the timeout function works 


startQuizEl.addEventListener("click", startQuiz);

questionEl.addEventListener("click", validate);
    
 
    
    