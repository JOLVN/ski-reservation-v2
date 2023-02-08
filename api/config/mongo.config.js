const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
require('dotenv').config()

module.exports = async () => {
    try {
        const host = process.env.MONGO_HOST
        const port = process.env.MONGO_PORT
        const username = process.env.MONGO_INITDB_ROOT_USERNAME
        const password = process.env.MONGO_INITDB_ROOT_PASSWORD

        await mongoose.connect(`mongodb://${username}:${password}@${host}:${port}`)
        console.log('Success connected to MongoDB')
    } catch (error) {
        console.log(error)
    }
};