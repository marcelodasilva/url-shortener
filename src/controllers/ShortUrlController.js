import ShortUrl from '../models/ShortUrl'

class ShortUrlController {

    async store(req, res) {
        await ShortUrl.create({ full: req.body.fullUrl })

        res.redirect('/')

    }

    async index(req, res) {
        const shortUrls = await ShortUrl.find()
        res.render('index', { 'shortUrls': shortUrls })
    }

    async show(req, res) {
        const shortUrl = await ShortUrl.findOne({ short: req.params.short })

        if (!shortUrl) {
            return res.sendStatus(404)
        }

        shortUrl.clicks++;
        shortUrl.save()

        res.redirect(shortUrl.full)

    }


}


export default new ShortUrlController()