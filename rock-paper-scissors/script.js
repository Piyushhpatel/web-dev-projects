function print(str) {
    const div = document.querySelector('.display');
    const p = document.createElement('p');
    div.innerHTML = '';

    p.innerHTML = `<h4>${str}</h4>`;

    div.appendChild(p);
}

function getPlayerChoice() {
    let playerChoice;

    const btn = document.querySelectorAll('.choice');

    btn.forEach((button) => {
        button.addEventListener('click', function(e) {
            playerChoice = button.id;
            game(playerChoice, getCompChoice()); // Call the game function with player and computer choices
        });
    });

    return playerChoice;
}

function getCompChoice() {
    const choices = ["rock", "paper", "scissors"];
    const index = Math.floor(Math.random() * 3);
    return choices[index];
}

function play(player, comp) {
    if (comp === "rock") {
        if (player === "rock") {
            print("Tie!!");
        } else if (player === "paper") {
            print("Win");
        } else {
            print("Lose");
        }
    } else if (comp === "paper") {
        if (player === "rock") {
            print("Lose");
        } else if (player === "paper") {
            print("Tie");
        } else {
            print("Win");
        }
    } else {
        if (player === "rock") {
            print("Win");
        } else if (player === "paper") {
            print("Lose");
        } else {
            print("Tie");
        }
    }
}

function game(player, comp) {
    play(player, comp);
}

function start() {
    const playBtn = document.querySelector('#play');

    playBtn.addEventListener('click', () => {
        const g = document.querySelector('#game1');
        const gameDiv = document.querySelector('.game');
        g.style.display = 'none';
        gameDiv.style.display = 'block';
        getPlayerChoice(); // Call getPlayerChoice when the play button is clicked
    });
}

start();
