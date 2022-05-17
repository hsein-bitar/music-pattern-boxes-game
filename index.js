window.onload = () => {
    console.log('loaded');
    //TODO
    // disable();
}


//TODO ref music files
let music = [1, 2, 3, 4];

// reference html elements
let user = document.getElementById("user");
let box = document.querySelectorAll('.box');
let start = document.getElementById('level');


//initiate level at 1
let currentLevel = 1;
let user_clicks = [];
let pattern = [];



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

// functions

function enable() { }
function disable() { }

function playPattern(pattern) {

    // TODO play notes
    for (i in pattern) {
        console.log(i);
    }
}

function gameEnd(bool) {
    if (bool) {
        console.log('green');
        disable();
    } else {
        console.log('lost');
        disable();
    }
}

function startLevel(level) {
    pattern = generatePattern(level);
    playPattern(pattern);
    enable();
}

function generatePattern(level) {
    let pattern = [];
    for (let i = 0; i < level; i++) {
        pattern.push(Math.floor(Math.random() * 4));
    }
    console.log(pattern);
    return pattern;
}


let user_prompt = prompt('Hey, who are you 👀? Enter your name please!');
let user_name = user_prompt ? user_prompt.split(" ") : "user 007".split(" ");
user_name = user_name.map(x => (x.charAt(0).toUpperCase() + x.slice(1)));
user.innerText = user_name.join(' ');
console.log(user_name);
user.classList.remove('none');