let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomno = Math.ceil(Math.random() * 100);

function checkGuess() {
     let guess = parseInt(userInput.value);

    if (guess > randomno) {
        gameResult.textContent = "Your guess is too high!";
        gameResult.style.backgroundColor = "#1e217c";
    }
    else if (guess < randomno) {
        gameResult.textContent = "Your guess is too low!";
        gameResult.style.backgroundColor = "#1e217c";
    }
    else if (guess === randomno) {
        gameResult.textContent = "Congratulations! You guessed the number!";
        gameResult.style.backgroundColor = "green";
    }
    else {
        gameResult.textContent = "Please enter a valid number between 1 and 100.";
        gameResult.style.backgroundColor = "red";
    }
}