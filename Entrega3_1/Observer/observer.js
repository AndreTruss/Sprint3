const EventEmitter = require('events');

class Theme extends EventEmitter {
    constructor( nameTheme ) {
        super();
        this.nameTheme = nameTheme
        this.subscribers = []
    }

    addSubscriber( user ) {
        this.subscribers.push( user.name )
    }

    addMessage( user, message ) {
        console.log(`\n+++ There is a new message into Theme: ${this.nameTheme}`)

        for( let person of this.subscribers ) {

            this.on( 'event', ( user, message, person ) => 
                console.log(`--- ${user.name} sent ${person} this message: ${message}`)
            )
            //console.log(this.listeners('event'));
            this.emit( 'event', user, message, person )
            this.removeAllListeners( 'event' )
        } 
    }
}

module.exports = Theme