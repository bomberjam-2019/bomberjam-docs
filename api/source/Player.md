# Player    

<img src="img/player.png" alt="" align="right" /> 

The player object containing all the player information.


{% api_property id 'string' %}
The player id.


{% api_property name 'string' %}
The name of the player.


{% api_property connected 'bool' %}
Whether the player is connected or not.


{% api_property x 'int' %}
The x coordinate of the position of that player.


{% api_property y 'int' %}
The y coordinate of the position of that player.


{% api_property bombsLeft 'int' %}
The number of bombs the player can still drop.


{% api_property maxBombs 'int' %}
The maximum number of bombs the player can drop.

Can be increased by picking up a <a href="#Bonus">Bonus</a>.

{% api_property bombRange 'int' %}
The range of the player bombs explosion.

Can be increased by picking up a <a href="#Bonus">Bonus</a>.

{% api_property alive 'bool' %}
Whether the player is alive or dead.

{% api_property respawning 'int' %}
A countdown indicating that the player is respawning. 
This happens after a player dies (see <a href="/mechanics.html#Dying">Game mechanics</a>)

{% api_property score 'int' %}
The score of the player.
For more information, see <a href="/mechanics.html#Score">Game mechanics</a>

{% api_property color 'int' %}
The color of the player. This is an HEX in decimal. 

{% api_property hasWon 'bool' %}
Whether the player as won or not.