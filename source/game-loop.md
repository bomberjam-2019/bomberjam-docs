title: Understanding game loop, time and ticks
---

Bomberjam is a real-time game. The game time is essentially a number of game "ticks" (or turns, cycles) that have passed since the start of the game. The number of the current tick is stored in the `GameState.tick` property. It is a global counter that increases during the entire game lifespan.

Generally, ticks run in an infinite loop of your `main` module. It is important to understand that this loop is turn- and multiplayer-based: the next tick (next `GameState.tick` value) begins only after the full execution of all `main` modules of all players.

We will now analyze the tick execution mechanism with conditional dividing it into beginning, middle, and end stages.

## Additional information

*   Some additional information (see [`Game.cpuLimit`](/api/#Game.cpuLimit)) .
*   The amount of CPU actually used in the current tick is shown by [`Game.getUsedCpu`](/api/#Game.getUsedCpu).

## See also

*   [How to use modules](/modules.html)
*   [Basic scripting overview](/scripting-basics.html)