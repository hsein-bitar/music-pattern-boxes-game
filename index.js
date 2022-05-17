// save name and display it


// reference html elements
let user = document.getElementById("user");
let box = document.querySelectorAll('.box');
let start = document.getElementById('level');


//initiate level at 1
let currentLevel = 1;
let user_clicks = [];
let pattern;



start.addEventListener('click', e => startLevel(currentLevel));

// add onclicks to boxes
// checks if so far sequence matches, game over when it does not
box.forEach((element) => element.addEventListener("click", (e) => {
    console.log(e.target.id);
    e.target.classList.add("glow");
    setTimeout(() => { e.target.classList.remove("glow") }, 200);
    if (user_clicks.length < currentLevel) {
        user_clicks.push(e.target.id);
        if (pattern[user_clicks.length - 1] != user_clicks[user_clicks.length - 1]) {
            gameEnd(0);
        }
    }
    if (user_clicks.length == currentLevel) {
        if (pattern[user_clicks.length - 1] == user_clicks[user_clicks.length - 1]) {
            currentLevel++
            gameEnd(1);
        } else {
            gameEnd(0);
        }
    }
}));



let user_prompt = prompt('Hey, who are you 👀?');
let user_name = user_prompt ? user_prompt.split(" ") : "user 007".split(" ");
user_name = user_name.map(x => (x.charAt(0).toUpperCase() + x.slice(1)));
user.innerText = user_name.join(' ');
console.log(user_name);
user.classList.remove('none');










// prompt user for readiness

// play the pattern



let music = [1, 2, 3, 4];


// functions
function playPattern(pattern) {

    // TODO play notes
    for (i in pattern) {
        console.log(i);
    }
}

function gameEnd(bool) {
    if (bool) {
        console.log('green');

    } else {
        console.log('lost');
    }
}

function startLevel(level) {
    currentLevel = level;
    pattern = generatePattern(level);
    playPattern(pattern);
}

function generatePattern(level) {
    let pattern = [];
    for (let i = 0; i < level; i++) {
        pattern.push(Math.floor(Math.random() * 4));
    }
    console.log(pattern);
    return pattern;
}