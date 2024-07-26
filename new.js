let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let green = document.querySelector('.green');
let yellow = document.querySelector('.yellow');

function nextSequence() {
    let randomNumber = Math.floor(Math.random() * 4)
    return randomNumber;
}
let randomNumber = nextSequence();

let button_colours = ['red', 'blue', 'green', 'yellow'];
let randomChosenColour;
let gamePattern = [];

randomChosenColour = button_colours[randomNumber];
gamePattern.push(randomChosenColour);

console.log(gamePattern);
