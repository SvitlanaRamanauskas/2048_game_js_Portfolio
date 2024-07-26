# 2048_game
This is a version of the popular 2048 game developed using JavaScript.

*  [DEMO LINK](https://svitlanaramanauskas.github.io/2048_game_js_Portfolio/)

## Overview

The game was built with the following technologies:
- **JavaScript**: The core logic and functionality of the game are implemented in JavaScript.
- **Events**: The game uses JavaScript event handling to capture user inputs and trigger game actions.

## Development

The game was developed using the JavaScript programming language, leveraging event-driven programming to handle user interactions. Key aspects include:

- **Event Listeners**: JavaScript event listeners are used to detect and respond to keyboard input for moving tiles.
- **Dynamic Updates**: The game board updates in real-time based on user actions and game state changes.
- **Animation**: Smooth transitions and animations enhance the gameplay experience.

## Features
* The game field is 4 x 4
* Each cell can be empty or contain one of the numbers: 2, 4, 8 ... 2^n
* The player can move cells with keyboard arrows
* All the numbers should be moved in the selected direction until all empty cells are filled in
2 equal cells are merged into a doubled number
* The merged cell can’t be merged twice during one move
* The move is possible if at least one cell is changed after the move
* After move 2 or 4 appears in a random empty cell. 4 probability is 10%
* When 2048 value is displayed in any cell, win message is shown.
* The game over message is shown if there are no more available moves.
* Start message is hidden when game starts.
* After the first move the Start button is changed to Restart.
* The score is increased by the sum of all merged cells.

## Running the Project Locally
To run this project locally, follow these steps:

- Clone the Repository:

```
git clone https://github.com/SvitlanaRamanauskas/2048_game_js_Portfolio.git
cd 2048_game_js_Portfolio
```

- Install Dependencies:

Install dependences using npm (Node Package Manager). Ensure you have Node.js installed on your machine. This project uses Node v14.

```npm install```

- Run the Project:

Start the development server with live reloading:

```npm start```

Alternatively, you can use any other local server setup you prefer, such as Live Server for VS Code.

- Open the Project in Your Browser:

Visit http://localhost:5000 or the port your server specifies to see the landing page in action.

## About the game

2048 was first created in 2014 by Italian programmer Gabriele Cirulli and has since become a popular casual mobile and web-based game.
2048 is a single-player sliding tile puzzle game. The objective is to slide numbered tiles on a grid to combine them and create a tile with the number 2048. The game board starts with two tiles with the number 2, and the player must repeatedly combine tiles of the same number to double their value until reaching the 2048 tile. Each successful combination creates a new tile with the combined value. The gameplay involves strategically sliding the tiles in one of four directions (up, down, left, or right) to position them for successful combinations. As the game progresses, higher-numbered tiles are created, and the challenge increases to reach the 2048 tile before the board fills up.
