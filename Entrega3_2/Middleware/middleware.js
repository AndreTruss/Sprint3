class Middleware {

    constructor( ) {
        this.stack = [];
    }

    use( middlewares ) {
        this.stack.push( middlewares );
    } 

    execute( data ) {
        
        const next = ( index ) => {
            const middleware = this.stack[ index ];

            middleware( data, () => {
                return next( index + 1 );
            })
        }

        next( 0 ); 
    }
}

module.exports = Middleware


/* class Middlewares {
    constructor(target) {
        this.middlewares = [];
        this.req = {}; 
  
        const prototype = Object.getPrototypeOf(this.target);
        const propertyNames = Object.getOwnPropertyNames(prototype);
        for (let property of propertyNames) {
            if(property !== "constructor") {
                this[property] = (args) => {
                    this.req = {...args};
                    this.ejecutarMiddleware(0);
                    return prototype[property].call(this, this.req);
                }
            }
        }
    }    
  
    ejecutarMiddleware(index) {
        if (index < (this.middlewares.length-1)) {
            this.middlewares[index].call(this, this.req, () => this.ejecutarMiddleware(index+1));
        } else if (index = (this.middlewares.length-1)) {
            this.middlewares[index].call(this, this.req, () => {});
        }       
    }   
  
    use (funcion) {
        this.middlewares.push(funcion);
    }    
  } */
