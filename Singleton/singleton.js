
class MarkerPlayer {
    constructor() {
        this.marker = []
        
        if( typeof MarkerPlayer.instance === 'object') {
            return MarkerPlayer.instance
        }
        MarkerPlayer.instance = this
        return this
    }

    winnerScore() {
        
        this.marker.sort((a, b) => b.score - a.score);
        console.log(`The Winner is ${this.marker[0].name} with a score of ${this.marker[0].score}`)
        
    }
}

module.exports = MarkerPlayer

// Other way to create Singleton
//module.exports = new MarkerPlayer()