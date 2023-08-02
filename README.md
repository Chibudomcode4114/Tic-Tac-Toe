# Tic Tac Toe Game

This is a simple HTML-based Tic Tac Toe game with JavaScript functionality. It allows two players to take turns marking the spaces on a 3x3 grid until one of them wins or the game ends in a draw.

## Getting Started

To play the game, simply open the `index.html` file in your web browser.

## How to Play

1. Each player takes turns to click on an empty box on the board.
2. Player One is represented by 'O', and Player Two is represented by 'X'.
3. The first player to form a vertical, horizontal, or diagonal line of their symbol wins the game.
4. If all the boxes are filled and no player has formed a winning line, the game ends in a draw.

## Functions and Logic

The JavaScript code includes the following functions and game logic:

### `drawboard()`
This function draws the game board with a 3x3 grid and adds click event listeners to each box.

### `boxClicked(e)`
This function is triggered when a player clicks on a box. It marks the box with the current player's symbol and checks if the current player has won.

### `playerHasWon()`
This function checks the board to see if the current player has formed a winning line, either vertically, horizontally, or diagonally.

### `restart()`
This function resets the game by clearing all the boxes and resetting the game status. It is triggered when the "Restart" button is clicked.

## Credits

This Tic Tac Toe game is created by Uzo Chikwendu and is a simple example of using HTML, CSS, and JavaScript to implement a fun game.

Feel free to use and modify this code as you wish! Enjoy playing!
