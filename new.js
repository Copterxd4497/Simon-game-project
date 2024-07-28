let red = document.querySelector('.red');
let blue = document.querySelector('.blue');
let green = document.querySelector('.green');
let yellow = document.querySelector('.yellow');
let text = document.querySelector('.text');
let buttonColours = ['', red, blue, green, yellow];
let gamePattern = [];

class Colours {
    nextSequence() {
        return Math.floor(Math.random() * 4) + 1;
    }
}

const colours = new Colours();
let randomChosenColour = buttonColours[colours.nextSequence()];
gamePattern.push(randomChosenColour);

console.log(gamePattern);
console.log(colours.nextSequence());


function flash(element) {
    element.classList.add('flash');
    setTimeout(() => {
        element.classList.remove('flash');
    }, 100); // Duration of the flash effect in milliseconds
}

// Example of handling the click event for each color
red.addEventListener('click', () => flash(red));
blue.addEventListener('click', () => flash(blue));
green.addEventListener('click', () => flash(green));
yellow.addEventListener('click', () => flash(yellow));



let userClickedPattern = [];
let userChosenColour = red.addEventListener('click', function(event){
    let buttonId = event.target.id;
    console.log("Clicked button ID:", buttonId);
    red.value = buttonId;
})


userClickedPattern = userChosenColour;
console.log(userClickedPattern);

function nextSequence() {
    if (userClickedPattern.length > 0) {
        text.textContent = 'Level 0';
    }
}

// Add event listener for keydown event
document.addEventListener('keydown', (event) => {
    if (event.key === 'a' || event.key === 'A') {
        text.textContent = 'Level 0';
    }
});

// Call nextSequence when needed
nextSequence();