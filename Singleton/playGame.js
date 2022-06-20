const markerPlayer = require('./singleton.js');

const game = markerPlayer;

class Player {
    constructor( name ){
        this.name = name;
    }
}

const player1 = new Player('Ricky');
const player2 = new Player('John');
const player3 = new Player('Mary');
const player4 = new Player('Susan');

game.insertPlayer(player1);
game.insertPlayer(player2);
game.insertPlayer(player3);
game.insertPlayer(player4);

game.addSubtractPoints();  // play two times
game.addSubtractPoints();

game.winnerScore();

// game1 === game Singleton works
/* const game1 = markerPlayer 
console.log(game, game1) */