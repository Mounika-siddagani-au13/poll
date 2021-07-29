const Mongodb = require('mongodb')
const Config = require('../config')

module.exports = async () => {
    const client = new Mongodb.MongoClient('mongodb+srv://mounika_siddagani:vibha@cluster0.fygvj.mongodb.net/voting ?retryWrites=true&w=majority', {
        useUnifiedTopology: true
    })

    await client.connect()

    return client.db()
}
