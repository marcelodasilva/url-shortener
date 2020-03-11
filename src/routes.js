import { Router } from 'express'


import ShortUrlController from './controllers/ShortUrlController'

const routes = Router()


routes.get('/', ShortUrlController.index)

routes.post('/shortUrls', ShortUrlController.store)
routes.get('/:short', ShortUrlController.show)

export default routes