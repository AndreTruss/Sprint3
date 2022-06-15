const markerSingleton = require('./singleton')

const marker = markerSingleton
console.log(marker.points)

class Player {
    constructor(name, marker1 = marker.points){
        this.name = name
        this.marker1 = marker1
    }
}

const player1 = new Player('ricky')
const player2 = new Player('jon')

const game = {player1, player2}

console.log(game)