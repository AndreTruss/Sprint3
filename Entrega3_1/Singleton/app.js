
const Player = require('./player')
const Game = require('./game');

const game = new Game();

const player1 = new Player('Ricky');
const player2 = new Player('John');
const player3 = new Player('Mary');
const player4  = new Player('Susan');
const player5 = new Player('Victoria');

game.createGame('Game1');
game.createGame('Game2');

game.insertPlayer( 'Game1', player1);
game.insertPlayer( 'Game1', player2);
game.insertPlayer( 'Game1', player3);
game.insertPlayer( 'Game2', player4);
game.insertPlayer( 'Game2', player5);
//console.log(game)

game.addSubtractPoints( 'Game1', player1);  
game.addSubtractPoints( 'Game1', player2);
game.addSubtractPoints( 'Game1', player3);
game.addSubtractPoints( 'Game2', player4);
game.addSubtractPoints( 'Game2', player5);

game.winnerScore( 'Game1' );
game.winnerScore( 'Game2' );

console.log('\nTo verify winner:', game.markPoints.marker)

// Verify Singleton class

/* const game1 = new Game() 
console.log(game1.markPoints.marker) */

// game1 === game Singleton works