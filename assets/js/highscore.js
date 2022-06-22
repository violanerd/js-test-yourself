// function to generate listed items
function loadScores (){
    // get items from local storage
    var savedHighScores = localStorage.getItem("scores");
    savedHighScores = JSON.parse(savedHighScores);

    // go back and clear scores container
    var endEl = document.querySelector("#option-container");

    // where to display highscores
    var scoresEl = document.querySelector("#highscore-display");
    if (!savedHighScores){
        var scores = document.createElement("div");
        scores.textContent = "No highscores to display yet!";
        scoresEl.appendChild(scores);
    } else {
        for (var i = 0; i < savedHighScores.length; i++){
            var scores = document.createElement("div");
            var initals = savedHighScores[i][0];
            var highScore = savedHighScores[i][1];
            scores.textContent= (i+1)+ ". " + initals + " - "+ highScore; 
            scoresEl.appendChild(scores);
        }
        // button to clear high scores 
        var deleteEl = document.createElement("button");
        deleteEl.textContent="Clear High Scores";
        deleteEl.setAttribute("style", "border: 3px solid black; background-color: #BEBEBE;");
        endEl.appendChild(deleteEl);
        deleteEl.addEventListener("click", function (){
            localStorage.clear();
            scoresEl.setAttribute("style", "display: none");
            alert("All High Scores Cleared!")
        });
    }
    
    // button to go back
    var gobackEl = document.createElement("button");
    gobackEl.textContent="Go Back and Try Again";
    gobackEl.setAttribute("style", "border: 3px solid black; background-color: #BEBEBE;");
    endEl.appendChild(gobackEl);
    gobackEl.addEventListener("click", function (){
        location.assign("./index.html");
    });
}

// function to generate listed items