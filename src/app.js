import routes from './routes'

import express from 'express'
class App {
    constructor() {
        this.server = express()
        this.middlewares()
    }

    middlewares() {
        this.server.use(routes)
    }
}

export default new App().server