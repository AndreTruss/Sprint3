const EventEmitter = require('events');

class User {
    constructor( name ) {
        this.name = name
    }
}

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

const master = new User ( 'Master' );
const user1 = new User ( 'Ricky' );
const user2 = new User ( 'Susan' );
const user3 = new User ( 'Marta' );

const theme1 = new Theme ( 'Javascript' );
const theme2 = new Theme ( 'NodeJS' );

theme1.addSubscriber( user1 );
theme1.addSubscriber( user2 );
theme2.addSubscriber( user3 );

theme1.addMessage( master, 'New course will begin on Monday at 10');
theme2.addMessage( master, 'Some new contributions for this weekend');