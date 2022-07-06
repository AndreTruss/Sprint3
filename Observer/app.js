const User = require('./user')
const Theme = require('./observer')

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