module.exports = class Middleware {

    constructor() {
        this.stack = []
    }

    use(middlewares) {
        this.stack.push(middlewares)
    } 

    invoke() {

    }
}

