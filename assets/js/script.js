var question1 = {
    question: "Which one is a primitive value of Javascript?",
    answers: ["a. Boolean", "b. string", "c. number", "d. null", "e. all of the above"],
    correct: "e. all of the above"
};

var question2 = {
    question: "Which for loop has the correct syntax?",
    answers: ["a. for (i = 0; i < n; i++)", "b. for (var i = 0; i < n; i++)", "c. for var i = 0, i < n, i++", "d. for (var i = 0, i < n, i++)", "e. none of the above"],
    correct: "b. for (var i = 0; i < n; i++)"
}

var startQuiz = document.querySelector("#startQuiz");
startQuiz.addEventListener("click", function() {
    // write a for loop to see if I can display the questions to the page
    // grab the display locations
    announcement = document.querySelector("#announcer");
    announcement.textContent=("Question 1");
    var question = document.querySelector("#question");
    question.textContent=(question1.question);
    startQuiz.setAttribute("style", "display: none"); 
    answerContainerEl = document.querySelector("#answer-wrapper");
    // how to do the answers?
    
    ansArray = question1.answers
    for (var i = 0; i < ansArray.length; i++){
        var ansButtonEl = document.createElement("button");
        ansButtonEl.textContent = ansArray[i];
        answerContainerEl.appendChild(ansButtonEl);
    }



})