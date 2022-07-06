const MarkerPlayer = require('./singleton.js');
const Player = require('./player.js')

const game = new MarkerPlayer();

const player1 = new Player('Ricky');
const player2 = new Player('John');
const player3 = new Player('Mary');
const player4 = new Player('Susan');

game.insertPlayer(player1);
game.insertPlayer(player2);
game.insertPlayer(player3);
game.insertPlayer(player4);

game.addSubtractPoints();  // play game two times
game.addSubtractPoints();

game.winnerScore();

// Verify Singleton class
/* const game1 = new MarkerPlayer() 
console.log(game, game1) */
// game1 === game Singleton works