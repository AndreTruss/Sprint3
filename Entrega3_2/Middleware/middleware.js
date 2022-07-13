class Middleware {

    constructor( target ) {
        this.stack = []
        this.target = target
    }

    use(middlewares) {
        this.stack.push(middlewares)
    } 

    async execute(data) {
        for (let middleware of this.stack) {
            await middleware(data)
        }
        console.log(`Sum result is ${this.target.addiction(data.a, data.b)}`)
        console.log(`Subtraction result is ${this.target.subtraction(data.a, data.b)}`)
        console.log(`Multiplication result is ${this.target.multiplication(data.a, data.b)}`)
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
