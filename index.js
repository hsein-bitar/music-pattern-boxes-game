// reference html elements
let user = document.getElementById("user");
let box = document.querySelectorAll('.box');


//initiate level at 1
let currentLevel = 1;
let user_clicks = 0;



// add onclicks to boxes
// checks if so far sequence matches, game over when it does not
box.forEach((element) => element.addEventListener("click", (e) => {
    check pointer
}));


// save name and display it
let user_prompt = prompt('Hey, who are you 👀?');
let user_name = user_prompt ? user_prompt.split(" ") : "user".split(" ");
user_name = user_name.map(x => (x.charAt(0).toUpperCase() + x.slice(1)));
user.innerText = user_name.join(' ');
console.log(user_name);
user.classList.remove('none');







// generate a random pattern of length (level)
let pattern = generatePattern(level);


// prompt user for readiness

// play the pattern



let music = [1, 2, 3, 4];
let userClicks = [];


// functions
function startLevel(level) {
    currentLevel = level;
    generatePattern(level);
}

function generatePattern(level) {
    let pattern = [];
    for (let i = 0; i < level; i++) {
        pattern.push(Math.random());
    }
    return pattern;
}