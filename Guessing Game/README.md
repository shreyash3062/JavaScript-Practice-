# Guessing Game

A number guessing game built with HTML, CSS, JavaScript and Bootstrap. The computer picks a random number between 1 and 100, and the player finds it using "too high" and "too low" hints.

## Live Demo
**https://guessing-game-fuw8.onrender.com**

## How to Play
1. Type a number between 1 and 100 in the box.
2. Click **Check**.
3. Use the hint to guess again until you find the number.
4. Refresh the page to start a new game with a new random number.

## Features
- Random number generated on every page load
- Hint messages: "Your guess is too high!" and "Your guess is too low!"
- Colour feedback: blue for a wrong guess, green for a correct guess, red for invalid input
- Input validation with an error message
- Responsive layout built with Bootstrap

## Concepts Practised
- Generating random numbers with `Math.random()` and `Math.ceil()`
- Reading user input with `.value`
- Converting text to a number with `parseInt`
- Conditional logic with `if / else if / else`
- Updating text and styles with `textContent` and `style.backgroundColor`
- Handling button clicks with `onclick`
- Building responsive layouts with the Bootstrap grid

## Tech Stack
HTML, CSS, JavaScript, Bootstrap

## Project Structure
```
Guessing Game/
├── index.html
├── script.js
├── style.css
└── README.md
```

## Author
[shreyash3062](https://github.com/shreyash3062)
