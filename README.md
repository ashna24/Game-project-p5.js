# Game-project-p5.js
An interactive 2D platformer game built using the p5.js library. The game features a cat character that must navigate a side-scrolling world, avoid enemies, and collect ice creams to reach the final flagpole.

## How to Play
- **Space Bar**: Start the game and Jump.
- **Left/Right Arrows**: Move the character.
- **Goal**: Collect all the ice creams and reach the flagpole without losing all 3 lives.
- **Hazards**: Avoid falling into canyons or colliding with the Robot enemies.

## Features
- **Custom Character Physics**: Includes jumping, falling, and collision detection.
- **Dynamic Environment**: Features moving clouds, platforms, and scrolling background (camera logic).
- **Sound Effects**: Integrated audio for jumping, collecting items, and background ambiance.
- **Object-Oriented Design**: Uses constructor functions for modular code (Enemies, Platforms, etc).

## Project Structure
- `index.html`: The entry point that loads all scripts and the p5.js library.
- `sketch.js`: The main game loop and setup.
- `gameCharacter.js`: Handles the drawing and state of the player character.
- `Enemy.js` & `createPlatforms.js`: Constructor functions for game obstacles.
- `startGame.js`: Initializes game variables and level layouts.
- `assets/`: Folder containing sound files (`.mp3`, `.wav`).

##  Running the Game
1. Clone the repository.
2. Open `index.html` in any web browser.

## Technical Implementation
This project was developed as part of a coursework. Key technical aspects include:
- **Collision Detection**: Mathematical logic to check contact between the character and platforms/enemies.
- **State Management**: Handling game states like `isPlummeting`, `isFound`, and `isReached`.
- **Graphics**: Procedural drawing of game elements using p5.js shapes.
