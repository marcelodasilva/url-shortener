const mongodb_uri = process.env.MONGODB_URI
const mongodb_options = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

export default { mongodb_uri, mongodb_options }