const boxes = Array.from(document.getElementsByClassName("box"));
const playText = document.getElementById("playText");
const restartBtn = document.getElementById("restartBtn");
// const spaces = [null, null, null, null, null, null, null, null, null];
const spaces = [];
const playerOne_TEXT = 'O';
const playerTwo_TEXT = 'X';
let currentPlayer;
// let currentPlayer = playerOne_TEXT;
const drawboard = () => {
    boxes.forEach((box, index) => {
        let styleString = '';
        if (index < 3) {
            styleString += `border-bottom: 3px solid var(--purple);`;
        }
        if (index % 3 === 0) {
            styleString += `border-right: 3px solid var(--purple);`;
        }
        if (index % 3 === 2) {
            styleString += `border-left: 3px solid var(--purple);`;
        }
        if (index > 5) {
            styleString += `border-top: 3px solid var(--purple);`;
        }
        box.style = styleString;
        box.addEventListener('click', boxClicked)
    })
}

const boxClicked = (e) => {
    const id = e.target.id;
    // Fill the spaces with the current player :+
    if (!spaces[id]) {
        spaces[id] = currentPlayer;
        e.target.innerText = currentPlayer;

        if (playerHasWon()) {
            playText.innerText = `${currentPlayer} Wins!`;
            // Self-added code to restart the game, i think...
            e.target.removeEventListener('click', boxClicked);
            return;
        }
        currentPlayer = currentPlayer === playerOne_TEXT ? playerTwo_TEXT : playerOne_TEXT;
    }
}

// Game logic
const playerHasWon = () => {
    if (spaces[0] === currentPlayer) {
        // Player Wins on top
        if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
            console.log(`${currentPlayer} Wins on top!`)
            return true;
        }
        // Player Wins on the left
        if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
            console.log(`${currentPlayer} Wins on left!`)
            return true;
        }
        // Player Wins on diagonal
        if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
            console.log(`${currentPlayer} Wins diagonally!`)
            return true;
        }
    }
    if (spaces[8] === currentPlayer) {
        // Player Wins on top
        if (spaces[2] === currentPlayer && spaces[5] === currentPlayer) {
            console.log(`${currentPlayer} Wins on the right!`)
            return true;
        }
        // Player Wins on the left
        if (spaces[6] === currentPlayer && spaces[7] === currentPlayer) {
            console.log(`${currentPlayer} Wins on the bottom!`)
            return true;
        }
    }
    if (spaces[4] === currentPlayer) {
        if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
            console.log(`${currentPlayer} Wins vertically in the middle!`)
            return true;
        }
        if (spaces[3] === currentPlayer && spaces[5] === currentPlayer) {
            console.log(`${currentPlayer} Wins horizontally in the middle!`)
            return true;
        }
    }
}

const restart = () => {
    spaces.forEach((spaces, index) => {
        spaces[index] = null
    })
    boxes.forEach((box, index) => {
        box.innerText = '';
    })
    playText.innerText = 'Let\'s Play';
    currentPlayer = playerOne_TEXT;
}
restartBtn.addEventListener('click', restart);
restart();

drawboard();