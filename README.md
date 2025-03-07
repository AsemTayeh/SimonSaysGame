# Simon Says Game (Now with easy mode)

## Try it here (Full Mobile support): https://asemtayeh.github.io/SimonSaysGame/

### Overview

The Simon Says game is a simple memory-based game where the player must follow an increasing sequence of colors, created with an increasing difficulty setting for each level, made using event-driven programming and functional programming to ensure readability, optimization
and code reuse, as well as flexibility for expansions or new features.

### Tech stack:
- HTML
- CSS
- JavaScript

Screenshots:
### Main screen:
![image](https://github.com/user-attachments/assets/d684c025-66c2-45b8-9aec-7acbdebc6cd8)

### While playing:
![image](https://github.com/user-attachments/assets/d336497b-70ed-41fc-9ed9-9b19623edde1)

### If you lose:
![image](https://github.com/user-attachments/assets/bf6bf1bc-9700-4a66-9e73-d6bfa9180648)

## Now featuring Easy Mode!
Easy mode showcases the AI's sequence up until the current point, making the game much easier, easy mode can be activated during the game in-case you want to save your current streak, and can be toggled on or off whenever you'd like incase you need a little help!

![image](https://github.com/user-attachments/assets/d5aefd15-ed51-465d-9b3a-a61994b24b4b)


### How it works:
Game state is tracked using an event listener for the user's key presses, when a user starts the game their key presses are no longer used to ensure smooth gameplay, animations and sounds are played once the user starts the game, and the AI is prompted to make a color choice
that is randomized, then another event listener comes into play tracking the user's clicks on our buttons, witch each click being compared in order with each color the AI produces, until a fault is found, which prompts the game over state, if the game over state is not triggered
then the user may proceed to the next level.

### Features:

- Randomized color sequences for each level.
- Interactive button animations and sound effects.
- Game-over state with the highest level displayed.
- Progressive difficulty as the sequence grows longer.


