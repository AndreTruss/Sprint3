module.exports = class Middleware {

    constructor() {
        this.stack = []
    }

    use(middlewares) {
        this.stack.push(middlewares)
    } 

    async invokePipeline() {
        for (let middleware of this.stack) {
            return await middleware
        }

    }
}

