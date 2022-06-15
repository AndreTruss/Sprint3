class Marker {
    constructor(){
        this.points = 'zero'
    }

    addPoints(){
        this.points < 10
            ? this.points + 1
            : console.log('you win')
    }

    subtractPoints(){
        this.points >= 0
            ? this.points - 1
            : console.log('you lose')
    }

    totalPoints(){
        return this.points
    }
}

exports.module = new Marker()