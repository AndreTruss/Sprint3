
const Player = require('./player')
const Game = require('./game')

const game1 = new Game('1Joc');
const game2 = new Game('2Joc');

const player1 = new Player('Ricky');
const player2 = new Player('John');
const player3 = new Player('Mary');
const player4 = new Player('Susan');
const player5 = new Player('Victoria');

game1.insertPlayer(game1, player1);
game1.insertPlayer(game1, player2);
game1.insertPlayer(game1, player3);
game2.insertPlayer(game2, player4);
game2.insertPlayer(game2, player5);

game1.addSubtractPoints(player1);  // play game two times
game1.addSubtractPoints('John');
game1.addSubtractPoints('Mary');
game2.addSubtractPoints('Susan');
game2.addSubtractPoints('Victoria');

game1.playerInGame.winnerScore();
game2.playerInGame.winnerScore();


// Verify Singleton class
/* const game1 = new MarkerPlayer() 
console.log(game, game1) */
// game1 === game Singleton works