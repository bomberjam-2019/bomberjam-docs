title: Overview
---

## What's Bomberjam?

**Bomberjam** is an event where programming teams compete in coding the best **Bomberman** bot.

The game world consists in a **13 x 11** tile grid with **blocks** that can be destroyed using bombs, **bonuses** randomly hidden in some of these blocks, and non-destructible **walls**. 
At the beginning of the game, each player (bot) will be assigned and placed at one of the four corners.

The **tick** is a counter that increases over time. At each tick, players will received the *current state of the game* and their *player ID*.
They will have to decide whether to go **left**, **right**, **up**, **down**, to **stay** or drop a **bomb**.

![Game example](img/game-example.gif "Game example")

Players **get points** by doing specific actions:

* Destroying blocks
* Hit another player with a bomb
* Being the last player standing

Players **can also lose points** by getting hit by a bomb.

## Installation

**Prerequisites**:

* Node.js 12.x
* .NET Core 2.0+ if you plan to code in C#

![Installation](img/installation.gif "Installation")

1. Checkout the **starters git repository** at https://github.com/bomberjam-2019/bomberjam-starters

2. Install Node.js dependencies using `npm install`

3. Run Bomberjam server locally using `npm run server`

4. Once the server is up and running, browse http://localhost:4321

5. **Finish reading this page** and the read the one that match your chosen starter. Happy coding!

```
SSH: git clone git@github.com:bomberjam-2019/bomberjam-starters.git
HTTPS: git clone https://github.com/bomberjam-2019/bomberjam-starters.git
```

## The game state object

```json
{
  "tick": 189,                 
  "width": 13,
  "height": 11,
  // flattened grid tiles, see tile type descriptions below
  "tiles": "****+++++++.*.#*#+#+#+#.#*++.+.++++++**+#+#+#+#+#.#*.+++++++.+++*+#+#+#.#+#.#.+.+..++..++++.#+#+#+#+#.#....++++++.....#+#+#+#+#+#...+++++++++..",
  // learn more about sudden death below
  "suddenDeathCountdown": 216, // number of ticks until the sudden death starts
  "suddenDeathEnabled": false, // whether or not the sudden death is active
  "players": {
    "gF7JULw01": {
      "id": "gF7JULw01",
      "name": "mySuperTeamName",
      "x": 0,
      "y": 1,
      "bombsLeft": 0,
      "maxBombs": 1,
      "bombRange": 2,
      "alive": true, // if true, the player has been killed by the sudden death and is no longer in the game
      "respawning": 0, // if positive, the player has been blown by a bomb and is now respawning for this amount of ticks
      "score": 15 // zero of positive number of points
    },
    "cU6VlQvrf": { ... },
    "bP9NFDqTb": { ... },
    "QMgU3aG3O": { ... }
  },
  "bombs": {
    "11": {
      "playerId": "QMgU3aG3O",
      "countdown": 4, // when countdown reach zero, the bomb explodes and is removed from this collection
      "range": 2,
      "x": 10,
      "y": 8
    },
    "12": { ... }
  },
  "bonuses": {
    "13": {
      "x": 3,
      "y": 0,
      "type": "bomb" // possible values: bomb (increases maxBombs) and fire (increases bombRange)
    }
  }
}
```

### Tile types

| Character | Description | Image
|:-:|-|-|
| **.** | Walkable empty tile | ![Walkable empty tile](img/empty_tile.png "Walkable empty tile")
| ***** | Explosion | ![Explosion](img/explosion_tile.png "Explosion")
| **+** | Destructible block | ![Destructible block](img/block_tile.png "Destructible block")
| **#** | Non-destructible wall | ![Non-destructible wall](img/pillar_tile.png "Non-destructible wall")

### Sudden death

When `suddenDeathCountdown` reach zero, **new walls are added to the grid from the outside to the inside in a circular manner**.
Players that are on its way will die (`player.alive: false`) and **won't respawn**.
The only player left gets extra points.

![Sudden death](img/sudden-death.gif "Sudden death")

### Respawning

If `suddenDeathCountdown` is not active and a player **gets hit by a bomb**, he will be teleported to his starting corner.
For a specific amount of ticks (`player.respawning`), this player will **be invincible but won't be able to drop bomb**.

### Bonuses

Players get **permanent bonuses** by walking on them.

| Type | Description | Image
|:-:|-|-|
| **bomb** | Increases `player.maxBombs` property | ![Extra bomb](img/extra_bomb.png "Extra bomb")
| **fire** | Increases `player.bombRange` property | ![Bomb range](img/bonus_fire.png "Bomb range")

## Loading gamelog files

A **gamelog file** is a save of all ticks of a game. Use the **Load gamelog file** link to load and replay a specific game.

Saved gamelogs will be saved in the `gamelogs` subfolder of the starters repository. Use these to understand how your bot behave.

![Gamelog loading](img/load-gamelog.gif "Gamelog loading")
