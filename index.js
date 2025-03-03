let levelCounter = 0;
let clickCounter = 0;
let gameStartCondition = 0;
let simonChoicesArray = [];
let playerChoicesArray = [];
let easyMode = document.querySelector(".easy-mode");
let buttonObjectsArray = document.querySelectorAll(".btn");
let levelObjectForUpdation = document.querySelector("#level-title");

// Live region:
document.addEventListener("keydown", function() {
    if (gameStartCondition > 0) {
        console.log("Game already started");
        return;
    }
    gameStartCondition++;
    simonSays();
});

for (let i = 0; i < buttonObjectsArray.length; i++) {
    buttonObjectsArray[i].addEventListener("click", function() {
        clickCounter++;
        playSound(this.id);
        animateButton(this.id);
        playerChoicesArray.push(this.id);

        if (!compareUntilThisIndex(clickCounter)) {
            gameOver();
        } 
        else if (compareUntilThisIndex(clickCounter) && clickCounter === simonChoicesArray.length) {
            moveToNextLevel();
        }
    });
}

easyMode.addEventListener("click", function() {
    if (easyMode.classList.contains("easy-mode")) {
        displaySimonChoices();
        easyMode.classList.remove("easy-mode");
        easyMode.classList.add("easy-mode-cancel");
        easyMode.textContent = "Cancel";
        easyModeBoolean = true;
    } else {
        removeSimonChoices();
        easyMode.classList.remove("easy-mode-cancel");
        easyMode.classList.add("easy-mode");
        easyMode.textContent = "Easy Mode";
        easyModeBoolean = false;
    }
});

// End region.
function displaySimonChoices() {
    removeSimonChoices();
    let simonFlex = document.querySelector(".simon-array");
    for (let i = 0; i < simonChoicesArray.length; i++) {
        simonFlex.innerHTML += "<div class='" + simonChoicesArray[i] + " simon-array-buttons'></div>";
    }
}

function removeSimonChoices() {
    let simonFlex = document.querySelector(".simon-array");
    simonFlex.innerHTML = "";
}

function gameOver() {
    levelObjectForUpdation.innerHTML ="Game over! press any key to restart<br><br>Max Level: " + levelCounter; 
    document.querySelector("body").classList.add("game-over");
    audio = new Audio("./sounds/wrong.mp3");
    audio.play();

    setTimeout(function() {
        document.querySelector("body").classList.remove("game-over");
    }, 100);

    gameStartCondition = 0;
    levelCounter = 0;
    clickCounter = 0;
    simonChoicesArray = [];
    playerChoicesArray = [];
}

function moveToNextLevel() {
    playerChoicesArray = [];
    clickCounter = 0;
    setTimeout(function() {
        simonSays();
    }, 500);
}

function compareUntilThisIndex(index) {
    for (let i = 0; i < index; i++) {
        if (simonChoicesArray[i] !== playerChoicesArray[i])
            return false;
    }
    return true;
}

function simonColorRandomizer() {
    let randomizedNumber = Math.ceil(Math.random() * 4);
    let randomizedColor = "";

    switch(randomizedNumber) {
        case 1:
            randomizedColor = "green";
            break;
        case 2:
            randomizedColor = "red";
            break;
        case 3:
            randomizedColor = "yellow";
            break;
        case 4:
            randomizedColor = "blue";
            break;
        default:
            console.log(randomizedColor);
    }
    return randomizedColor;
}

function playSound(color) {
    let audio = null;
    switch(color) {
        case "green":
            audio = new Audio("./sounds/green.mp3");
            audio.play();
            break;
        case "red":
            audio = new Audio("./sounds/red.mp3");
            audio.play();
            break;
        case "yellow":
            audio = new Audio("./sounds/yellow.mp3");
            audio.play();
            break;
        case "blue":
            audio = new Audio("./sounds/blue.mp3");
            audio.play();
            break;
        default:
            audio = null;
            console.log(color);
    }
}

function animateButton(buttonID) {
    document.querySelector("#" + buttonID).classList.add("pressed");
    setTimeout(function() {
        document.querySelector("#" + buttonID).classList.remove("pressed");
    }, 100);
}

function changeLevelTitle(currentLevel) {
    levelObjectForUpdation.textContent = "Level " + currentLevel;
}

function simonSays() {
    let simonsColor = simonColorRandomizer();
    levelCounter++;
    changeLevelTitle(levelCounter);
    setTimeout(function() {
        animateButton(simonsColor);
        playSound(simonsColor);
    }, 300);
    simonChoicesArray.push(simonsColor);
}
