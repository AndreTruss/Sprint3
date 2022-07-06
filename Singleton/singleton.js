class MarkerPlayer {
    constructor(){
        this.marker = [];

        if( typeof MarkerPlayer.instance === 'object') {
            return MarkerPlayer.instance
        }
        MarkerPlayer.instance = this
        return this
    }

    insertPlayer(player){
        this.marker.push({name: player.name, score: 0});
    }

    addSubtractPoints(){
        for( let player of this.marker){
            let number = Math.floor(Math.random() * ( 100 + 1 )) - 50  // random number between -50 and 50
            player.score += number;
        }
    }

    winnerScore(){
        this.marker.sort((a, b) => b.score - a.score);
        console.log(`The Winner is ${this.marker[0].name} with a score of ${this.marker[0].score}`)
    }
}

module.exports = MarkerPlayer

// Other way to create Singleton
//module.exports = new MarkerPlayer()