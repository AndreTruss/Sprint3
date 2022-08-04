const amqp = require('amqplib');

class Subscriber {

    constructor( hostConnection, queue ) {
        this.hostConnection = hostConnection;
        this.queue = queue;
    }

    async receiveMessage() {

        try {
            this.connection = await amqp.connect(this.hostConnection)

            this.channel = await this.connection.createChannel()

            await this.channel.assertQueue( this.queue, { durable: false });

            console.log(" [*] Waiting for messages in %s.", this.queue);

            await this.channel.consume( this.queue, function(msg) { console.log(" [x] Received %s", msg.content.toString()) }, { noAck: true } );

        } catch (error){
            console.log(error)
        }

    }
}

const subscriber = new Subscriber( 'amqp://localhost', 'MyQueue' )
subscriber.receiveMessage()

