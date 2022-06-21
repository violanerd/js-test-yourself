function loadScores (){
    var savedHighScores = localStorage.getItem("scores");
    savedHighScores = JSON.parse(savedHighScores);
    console.log(savedHighScores);

    var scoresEl = document.querySelector("#highscore-display");
    
    for (var i = 0; i < savedHighScores.length; i++){
        var scores = document.createElement("div");
        scores.textContent= savedHighScores.initials;
        scoresEl.appendChild(scores);
    }
    var endEl = document.querySelector("#option-container");
    var gobackEl = document.createElement("button");
    gobackEl.textContent="Go Back and Try Again";
    gobackEl.setAttribute("style", "border: 3px solid black; background-color: #BEBEBE;");
    endEl.appendChild(gobackEl);
    endEl.addEventListener("click", function (){
        location.assign("./index.html");
    });
}

// function to generate listed items