const amqp = require('amqplib');
class Publisher {

    constructor( hostConnection, queue ) {
        this.hostConnection = hostConnection;
        this.queue = queue;
    }

    async sendMessage( msg ) {

        try {
            this.connection = await amqp.connect(this.hostConnection)

            this.channel = await this.connection.createChannel()

            await this.channel.assertQueue( this.queue, { durable: false });

            console.log(" [*] Sending messages in %s.", this.queue);

            await this.channel.sendToQueue( this.queue, Buffer.from( msg ));

            console.log(" [x] Sent %s", msg);
      
        } catch (error){
            console.log(error)
        }
        
        setTimeout(function() {    
            process.exit(0);
        }, 500);
    }
}

const publisher = new Publisher( 'amqp://localhost', 'MyQueue' )
publisher.sendMessage( 'Hello World' )
publisher.sendMessage( 'Hello Friends' )
