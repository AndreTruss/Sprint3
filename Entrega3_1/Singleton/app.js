
const Player = require('./player')
const Games = require('./game');

const games = new Games();

const player1 = new Player('Ricky');
const player2 = new Player('John');
const player3 = new Player('Mary');
const player4  = new Player('Susan');
const player5 = new Player('Victoria');

games.createGame('Game1');
games.createGame('Game2');

games.insertPlayer( 'Game1', player1);
games.insertPlayer( 'Game1', player2);
games.insertPlayer( 'Game1', player3);
games.insertPlayer( 'Game2', player4);
games.insertPlayer( 'Game2', player5);
//console.log(games)

games.addSubtractPoints( 'Game1', player1);  
games.addSubtractPoints( 'Game1', player2);
games.addSubtractPoints( 'Game1', player3);
games.addSubtractPoints( 'Game2', player4);
games.addSubtractPoints( 'Game2', player5);

games.winnerScore( 'Game1' );
games.winnerScore( 'Game2' );

console.log('\nTo verify winner:', games.markPoints.marker)

// Verify Singleton class

/* const games1 = new Games() 
console.log(game1.markPoints.marker) */

// games1 === games Singleton works