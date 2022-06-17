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
var questionArray =[question1, question2, question3, question4, question5];

var startQuizBtn = document.querySelector("#startQuiz");
var containerEl = document.querySelector(".content-wrapper");
var announcement = document.querySelector("#announcer");
var question = document.querySelector("#question");
var answerContainerEl = document.querySelector("#answer-wrapper");

var startQuiz = function () {
    startQuizBtn.setAttribute("style", "display: none"); 
    for (var i = 0; i < questionArray.length; i++){
        announcement.textContent=("Question " + (i + 1));
        question.textContent=(questionArray[i].question);
            // display answers
        var ansArray = questionArray[i].answers
        for (var i = 0; i < ansArray.length; i++){
            var ansButtonEl = document.createElement("button");
            ansButtonEl.textContent = ansArray[i];
            answerContainerEl.appendChild(ansButtonEl);
        }
    }
};

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
   
startQuizBtn.addEventListener("click", startQuiz);
// containerEl.addEventListener - make this one handle question answers
    
    
    
    