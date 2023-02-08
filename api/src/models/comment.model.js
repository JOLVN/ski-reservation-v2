const mongoose = require("mongoose")
const { Schema } = mongoose

const CommentSchema = new Schema({
    username: {
        type: String
    },
    description: {
        type: String
    },
    starts: {
        type: Number
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    post: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    }
});

module.exports = mongoose.model('Comment', CommentSchema)