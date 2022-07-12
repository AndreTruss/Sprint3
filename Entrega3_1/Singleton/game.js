const MarkerPlayer = require('./singleton');

class Game {
  constructor(){
    this.markPoints = new MarkerPlayer()
  }

  createGame( nameGame ){
    this.markPoints.marker[ nameGame ] = {}
  }

  insertPlayer( nameGame ,player ) {
    this.markPoints.marker[nameGame][player.name] = 0;
  }

  addSubtractPoints ( nameGame, player ){
    let number = Math.floor(Math.random() * ( 100 + 1 )) - 50  // random number between -50 and 50
    this.markPoints.marker[nameGame][player.name] += number;
  }

  winnerScore( nameGame ) {      
    let score = Object.values(this.markPoints.marker[nameGame]);
    let index = score.indexOf(Math.max(...score))
    let winner = Object.keys(this.markPoints.marker[nameGame]);
    console.log(`The Winner of game ${nameGame} is ${winner[index]} with a score of ${Math.max(...score)}`)   
  }
}

module.exports = Game