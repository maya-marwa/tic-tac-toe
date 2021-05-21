// The Game 

// tic tac toe

// Technical Requirements
// Your app must:

// Render a game in the browser
// Switch turns between more than one player (2 player playing on a single computer)
// Design logic for winning & visually display which player won
// Design logic for a draw game & visually display when there is a draw
// Include separate HTML / CSS / JavaScript files
// Stick with KISS (Keep It Simple Stupid) principles
// Use Javascript for DOM manipulation
// Deploy your game online, where the rest of the world can access it
// Use semantic markup for HTML and CSS (adhere to best practices)


var playerOne = document.querySelector('.player1');
var playerTwo = document.querySelector('.player2');
var reset = document.querySelectorAll('.reset-btn');
var cells = document.querySelectorAll('.cell');

var currentPlayer = 1; 

function changePlayer() {
    if (currentPlayer === 1) {
        currentPlayer = 2;
    } else {
        currentPlayer = 1;
    }
    
}


function playTurn(event) {
    var cell = event.target;
    var move = 'x'; 
    if (currentPlayer === 2) {
        move = 'o';
    }
    if (cell.textContent !== '') {
    } else {
        cell.textContent = move;
        changePlayer();
    }
   checkWin();
}


var win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function checkWin() {
    var status = document.getElementById('status');
    for (var i = 0; i < win.length; i++) {
        var a = document.getElementById('cell' + win[i][0]).textContent
        var b = document.getElementById('cell' + win[i][1]).textContent
        var c = document.getElementById('cell' + win[i][2]).textContent

        if (a === b && a === c && a === 'x') {
            status.textContent = 'Player X wins!';
        } else  if (a === b && a === c && a === 'o') {
            status.textContent = 'Player O wins!';

        } 
    }
}


function resetGame() {
    for (var i = 0; i < 9; i++) {
        cells[i].textContent = '';
    }

    currentPlayer = 1;

}



for (var i = 0; i < 9; i++) {
    cells[i].addEventListener('click', playTurn);
}












