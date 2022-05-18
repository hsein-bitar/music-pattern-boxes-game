window.onload = () => {
    console.log('loaded');
    //TODO
    disable();
}


// reference html elements
let user = document.getElementById("user");
let board = document.querySelector('#board');//enable
let box = document.querySelectorAll('.box'); //enable
let start = document.getElementById('level'); //enable


//initiate level at 1
let currentLevel = 1;
let user_clicks = [];
let pattern = [];

//TODO ref music files
// let music = ['green', 'yellow', 'red', 'blue'];
let music = [
    new Audio("assets/sounds/green.mp3"),
    new Audio("assets/sounds/yellow.mp3"),
    new Audio("assets/sounds/red.mp3"),
    new Audio("assets/sounds/blue.mp3")];



let clickHandler = (e) => {
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
            gameEnd(e.target.id);
        } else {
            gameEnd(0);
        }
    }
}


// functions
function enable() {
    start.removeEventListener('click', e => startLevel(currentLevel));
    // add onclicks to boxes
    // checks if so far sequence matches, game over when it does not
    box.forEach((element) => element.addEventListener("click", clickHandler));

    board.classList.add('enabled');
    box.forEach(element => element.classList.add('enabled'))
    start.classList.remove('enabled');
}


function disable() {
    start.addEventListener('click', e => startLevel(currentLevel));
    start.innerText = `Start`
    //remove event listeners
    box.forEach(element => element.removeEventListener("click", clickHandler));
    board.classList.remove('enabled');
    box.forEach(element => element.classList.remove('enabled'));
    start.classList.add('enabled');

}

function playPattern(pattern) {

    // TODO play notes after waiting
    for (i in pattern) {
        console.log(i);
    }
}

function gameEnd(bool) {
    if (bool) {
        console.log('lost', bool);
        disable();
    } else {
        console.log('lost');
        disable();
    }
}

function startLevel(level) {
    start.innerText = `Level ${level}`
    //disable button
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