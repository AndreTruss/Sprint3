const MarkerPlayer = require('./singleton');

class Game {
  constructor( name ){
    this.name = name
    this.playerInGame = new MarkerPlayer()
  }

  insertPlayer( game, player ) {
    this.playerInGame.marker.push({ nameGame: game.name, name: player.name, score: 0 });
  }

  addSubtractPoints ( player ){
    let indexPlayer = this.playerInGame.marker.name.indexOf(player.name)
    console.log(indexPlayer)
    let number = Math.floor(Math.random() * ( 100 + 1 )) - 50  // random number between -50 and 50
    this.playerInGame.marker.score += number;
    
  }
}

module.exports = Game