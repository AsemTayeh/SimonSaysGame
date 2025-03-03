## Simon Says Game

### Overview

The Simon Says game is a simple memory-based game where the player must follow an increasing sequence of colors, created with an increasing difficulty setting for each level, made using event-driven programming and functional programming to ensure readability, optimization
and code reuse, as well as flexibility for expansions or new features.

### Tech stack:
- HTML.
- CSS.
- JavaScript.

Screenshots:
### Main screen:
![image](https://github.com/user-attachments/assets/66c64097-f012-44cf-9618-df2f7b7654c6)

### While playing:
![image](https://github.com/user-attachments/assets/e47e4b63-c668-445b-856d-2be53502e34d)

### If you lose
![image](https://github.com/user-attachments/assets/436b7d17-0818-4add-9699-eb75f8a169d0)

### How it works:
Game state is tracked using an event listener for the user's key presses, when a user starts the game their key presses are no longer used to ensure smooth gameplay, animations and sounds are played once the user starts the game, and the AI is prompted to make a color choice
that is randomized, then another event listener comes into play tracking the user's clicks on our buttons, witch each click being compared in order with each color the AI produces, until a fault is found, which prompts the game over state, if the game over state is not triggered
then the user may proceed to the next level.

### Features:

- Randomized color sequences for each level.
- Interactive button animations and sound effects.
- Game-over state with the highest level displayed.
- Progressive difficulty as the sequence grows longer.


