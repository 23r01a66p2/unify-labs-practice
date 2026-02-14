// Day 14 Logic Practice
console.log('Lab Session 14 Started');

const display = document.getElementById('display');
display.innerText = 'Logic Engine Online';

// Practice your JS code here...
let randomNumber;
let attempts;
let maxAttempts = 7;
let gameOver;

function startGame() {
    randomNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    gameOver = false;
    document.getElementById("message").textContent = "";
    document.getElementById("attemptsLeft").textContent = 
        "Attempts Left: " + (maxAttempts - attempts);
}

function checkGuess() {
    if (gameOver) return;

    let guess = Number(document.getElementById("guessInput").value);

    if (!guess || guess < 1 || guess > 100) {
        document.getElementById("message").textContent = 
            "⚠ Please enter a number between 1 and 100.";
        return;
    }

    attempts++;

    if (guess === randomNumber) {
        document.getElementById("message").textContent = 
            "🎉 Correct! You guessed the number!";
        gameOver = true;
    } 
    else if (guess > randomNumber) {
        document.getElementById("message").textContent = "Too High!";
    } 
    else {
        document.getElementById("message").textContent = "Too Low!";
    }

    if (attempts >= maxAttempts && guess !== randomNumber) {
        document.getElementById("message").textContent = 
            "❌ Game Over! The number was " + randomNumber;
        gameOver = true;
    }

    document.getElementById("attemptsLeft").textContent = 
        "Attempts Left: " + (maxAttempts - attempts);
}

function restartGame() {
    startGame();
    document.getElementById("guessInput").value = "";
}

startGame();