const MarkerPlayer = require('./singleton');

class Game {
  constructor(){
    this.playerInGame = new MarkerPlayer()
  }

  insertPlayer( player ) {
    this.playerInGame.marker.push({ name: player.name, score: 0 });
  }

  addSubtractPoints (){
    for( let player of this.playerInGame.marker){
    let number = Math.floor(Math.random() * ( 100 + 1 )) - 50  // random number between -50 and 50
    player.score += number;
    }
  }
}

module.exports = Game