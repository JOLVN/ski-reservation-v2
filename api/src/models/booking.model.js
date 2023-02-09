const mongoose = require("mongoose")
const { Schema } = mongoose

const BookingSchema = new Schema({
    telephoneNumber: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    shop: {
        type: Schema.Types.ObjectId,
        ref: 'Shop'
    }
})

module.exports = mongoose.model('Booking', BookingSchema)