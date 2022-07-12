
class MarkerPlayer {
    constructor() {
        this.marker = []
        
        if( typeof MarkerPlayer.instance === 'object') {
            return MarkerPlayer.instance
        }
        MarkerPlayer.instance = this
        return this
    }

}

module.exports = MarkerPlayer

// Other way to create Singleton
//module.exports = new MarkerPlayer()