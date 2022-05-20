
// reference html elements
let stats = document.getElementById("stats"); //show after prompt
let user = document.getElementById("user"); //show after prompt
let level = document.getElementById("level"); //show after prompt
let board = document.querySelector('#board');//enable
let boxes = document.querySelectorAll('.box'); //enable
let start = document.getElementById('start'); //enable
let winlose = document.getElementById('winlose'); //enable

// getting user nme
let user_prompt = prompt('Hey, who are you 👀? Enter your name please!');
let user_name = user_prompt ? user_prompt.split(" ") : "user 007".split(" ");
user_name = user_name.map(x => (x.charAt(0).toUpperCase() + x.slice(1)));
user.innerText = user_name.join(' ');
stats.classList.remove('none');

let music = [
    new Audio("assets/sounds/green.mp3"),
    new Audio("assets/sounds/red.mp3"),
    new Audio("assets/sounds/yellow.mp3"),
    new Audio("assets/sounds/blue.mp3"),
    new Audio("assets/sounds/wrong.mp3"),
];

//Game variables
let currentLevel;
let user_clicks = [];
let pattern = [];


let startGame = (e) => {
    e.preventDefault();
    currentLevel = 1;
    level.innerText = currentLevel;
    pattern = [Math.floor(Math.random() * 4)]
    playNote(pattern[pattern.length - 1]);
    enable();
}

start.addEventListener('click', startGame);

//click handlers
let boxClickHandler = (e) => {
    e.preventDefault();
    playNote(e.target.id);
    if (user_clicks.length < currentLevel) {
        user_clicks.push(e.target.id);
        if (pattern[user_clicks.length - 1] != user_clicks[user_clicks.length - 1]) {
            endGame(0);
        }
    }
    if (user_clicks.length == currentLevel) {
        if (pattern[user_clicks.length - 1] == user_clicks[user_clicks.length - 1]) {
            endGame(1);
        } else {
            endGame(0);
        }
    }
}

// helper functions
function playNote(note) {
    // TODO play notes after waiting
    boxes[note].classList.add('glow');
    music[note].play()
    setTimeout(() => {
        boxes[note].classList.remove('glow');
    }, 300)
}

function enable() {
    start.removeEventListener('click', startGame);
    start.classList.remove('enabled');
    start.innerText = '...';

    // enable board interaction
    boxes.forEach((element) => element.addEventListener("click", boxClickHandler));
    boxes.forEach(element => element.classList.add('enabled'))
    board.classList.add('enabled');
}

function disable() {
    start.addEventListener('click', startGame);
    start.innerText = `Start`
    start.classList.add('enabled');

    //remove event listeners
    boxes.forEach(element => element.removeEventListener("click", boxClickHandler));
    boxes.forEach(element => element.classList.remove('enabled'));
    board.classList.remove('enabled');

}

function endGame(bool) {
    if (bool) {
        console.log('won', bool);
        user_clicks = [];
        currentLevel++;
        level.innerText = currentLevel;
        pattern.push(Math.floor(Math.random() * 4));

        //display you won
        winlose.innerText = `You Won lvl ${currentLevel - 1}`
        winlose.classList.remove('none');
        disable();
        setTimeout(() => {
            //wait a second
            playNote(pattern[pattern.length - 1]);
            winlose.classList.add('none');
            enable();
        }, 800);

    } else {
        music[4].play()
        //display you lost
        winlose.innerText = `You lost lvl ${currentLevel}`
        winlose.classList.remove('none');
        disable();
        setTimeout(() => {
            //wait two seconds
            winlose.classList.add('none');
        }, 1000);
    }
}
