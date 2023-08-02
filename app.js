const boxes = Array.from(document.getElementsByClassName("box"));

const spaces = [null, null, null, null, null, null, null, null, null];
const playerOne_TEXT = 'O';
const playerTwo_TEXT = 'X';
let currentPlayer = playerOne_TEXT;

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
    console.log(id);
}

drawboard();