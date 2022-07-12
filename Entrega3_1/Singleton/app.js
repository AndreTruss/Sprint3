
const Player = require('./player')
const Game = require('./game');

const game = new Game();

const player1 = new Player('Ricky');
const player2 = new Player('John');
const player3 = new Player('Mary');
const player4 = new Player('Susan');
const player5 = new Player('Victoria');

game.insertPlayer(player1);
game.insertPlayer(player2);
game.insertPlayer(player3);
game.insertPlayer(player4);
game.insertPlayer(player5);


game.addSubtractPoints();  // play game two times
game.addSubtractPoints();

game.playerInGame.winnerScore();


// Verify Singleton class
/* const game1 = new MarkerPlayer() 
console.log(game, game1) */
// game1 === game Singleton works