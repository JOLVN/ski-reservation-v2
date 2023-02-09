const mongoose = require("mongoose")
const { Schema } = mongoose

const PostSchema = new Schema({
    title: {
        type: String
    },
    imageUrl: {
        type: String
    },
    weight: {
        type: Number
    },
    size: {
        type: Number
    },
    style: {
        type: String
    },
    price: {
        type: Number
    },
    description: {
        type: String
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    createdAt: {
        type: Date,
        default: Date.now
    },
    bookings: [{
        type: Schema.Types.ObjectId,
        ref: 'Booking'
    }],
    isAvailable: {
        type: Boolean,
        default: true
    },
    shop: {
        type: Schema.Types.ObjectId,
        ref: 'Shop'
    }
})

module.exports = mongoose.model('Post', PostSchema)