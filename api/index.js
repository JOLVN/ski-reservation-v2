const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoConnect = require('./config/mongo.config')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 8000

const postRouter = require('./src/routers/post.router')
const commentRouter = require('./src/routers/comment.router')
const bookingRouter = require('./src/routers/booking.router')

// Connect to MongoDB
mongoConnect()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

// Init Middleware
app.use(cors())
app.use(bodyParser.json())
app.use(express.json())

// Routes
app.use('/api', postRouter)
app.use('/api', commentRouter)
app.use('/api', bookingRouter)


app.listen(PORT, () => {
    console.log(`Listening at http://localhost:${PORT}`)
})
