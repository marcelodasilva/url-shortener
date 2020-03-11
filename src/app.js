import routes from './routes'
import mongoose from 'mongoose'
import express from 'express'
import 'dotenv/config'
import { resolve } from 'path'

import mongooseConf from './config/mongoose'

import express from 'express'
class App {
    constructor() {
        this.server = express()
        this.conection = mongoose.connect(mongooseConf.mongodb_uri, mongooseConf.mongodb_options)
        this.middlewares()
    }

    middlewares() {
        this.server.set('view engine', 'ejs')
        this.server.set('views', './src/views')
        this.server.use(express.urlencoded({ extended: false }))
        this.server.use(routes)
    }
}

export default new App().server