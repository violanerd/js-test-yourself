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
    question: "Given this array --> var cheese =['cheddar', 'gouda', 'parmesan', 'feta']', --> What statement will return 'cheddar'?",
    answers: ["a. console.log('cheese');", "b. console.log(cheese[3]);", "c. console.log(cheese[0]);", "d. console.log('cheddar')", "e. c and d"],
    correct: "e. c and d"
};
var question5 = {
    question: "What does window.confirm('Are you sure?') return?",
    answers: ["a. yes or no", "b. ok or cancel", "c. true or false", "d. all of the above", "e. none of the above"],
    correct: "c. true or false"
};
// an array to hold the questions
var questionArray =[question1, question2, question3, question4, question5];

// to start the quiz
var startQuizEl = document.querySelector("#start-wrapper");

// start screen content to erase it
var welcomePEl = document.querySelector("#start-screen-content");

// ?
var answerEl = document.querySelector("#answer");

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

// variable to use for iterating through questions
var questionNum = 0;

var startQuiz = function () {
    startQuizEl.textContent=("");
    welcomePEl.textContent=(""); 

    generateQuestions();
    
    //add code to display a timer
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
    if (element.textContent===question1.correct){
        correctEl.textContent = "Correct!";
    } else if (element.textContent!=question1.correct) {
        incorrectEl.textContent = "Nope!";
    }
    answerContainerEl.textContent="";
    questionNum++;
    generateQuestions();
};


// function to end the game when the timer hits zero **  OR all questions are answered 
// this will be a conditional OR 
// need to understand how the timeout function works 

// high sore function
    // adds name to highscore with input and localstorage
    // asks to play again
// for (var i = 0; i < questionArray.length; i++){
//     announcement.textContent=("Question " + (i + 1));
//     question.textContent=(questionArray[i].question);
//         // display answers
//     var ansArray = questionArray[i].answers
//     for (var i = 0; i < ansArray.length; i++){
//         var ansButtonEl = document.createElement("button");
//         ansButtonEl.textContent = ansArray[i];
//         answerContainerEl.appendChild(ansButtonEl);
//     }
// }
   
startQuizEl.addEventListener("click", startQuiz);

questionEl.addEventListener("click", validate);
    
    
    
    