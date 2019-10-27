# GameState    

The main global game object containing all the game play information.


{% api_property GameState.roomId 'string' %}
The game room id.


{% api_property GameState.ownerId 'string' %}
The id of owner of the current game room.


{% api_property GameState.state 'int' %}
The game current state.

| value | <a href="#Constants">constant</a> | description |
|-|-|-|
| -1 | `STATE_GAME_NOT_STARTED` | game as not started |
| 0 | `STATE_GAME_IN_PROGRESS` | game is in progress |
| 1 | `STATE_GAME_OVER` | game is over |


{% api_property GameState.tick 'int' %}
The current tick. 
Reset each time the state of the <a href="#GameState.state">GameState.state</a> changes.


{% api_property GameState.tiles 'string' %}
The stage of the game represented as a string. Each character represent a tile.
For the dimension of the stage, see <a href="#GameState.width">width</a> and <a href="#GameState.height">height</a>

| value | <a href="#Constants">constant</a> | description | image
|:-:|-|-|-|
| **.** | `TILES_EMPTY` | empty tile | <img src="img/empty_tile.png" />
| **+** | `TILES_BLOCK` | block tile | <img src="img/block_tile.png" />
| **#** | `TILES_PILLAR` | pillar tile | <img src="img/pillar_tile.png" />


{% api_property GameState.players 'array&lt;string, <a href="#Player">Player</a>&gt;' %}
A hash containing all the players with the player id as hash keys.


{% api_property GameState.bombs 'array&lt;string, <a href="#Bomb">Bomb</a>&gt;' %}
A hash containing all the bombs with the bomb id as hash keys.


{% api_property GameState.bonuses 'array&lt;string, <a href="#Bonus">Bonus</a>&gt;' %}
A hash containing all the bonuses with the bonus id as hash keys.


{% api_property GameState.explosions 'string' %}
A string that indicated the x:y coordinates of the explosions.


{% api_property GameState.width 'int' %}
The width of the stage.


{% api_property GameState.height 'int' %}
The height of the stage.


{% api_property GameState.tickDuration 'int' %}
The tick duration in ms. This is the game speed.


{% api_property GameState.suddenDeathCountdown 'int' %}
The countdown until sudden death occurs.
For more information on sudden death, see <a href="/mechanics.html#Sudden-Death">Game mechanics</a>.


{% api_property GameState.suddenDeathEnabled 'bool' %}
Whether the game is in sudden death or not.
For more information on sudden death, see <a href="/mechanics.html#Sudden-Death">Game mechanics</a>.


{% api_property GameState.isSimulationPaused 'bool' %}
Whether the game is paused or not.