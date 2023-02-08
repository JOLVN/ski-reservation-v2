const CommentModel = require('../models/comment.model');
const PostModel = require('../models/post.model');

const CommentController = {
    getAllComments: async (req, res) => {
        try {
            const comments = await CommentModel.find()
            res.send(comments)
        } catch (error) {
            res.status(404).send({ message: error.message })
        }
    },
    getCommentById: async (req, res) => {
        try {
            const comment = await CommentModel.findById(req.params.id)
            res.send(comment)
        } catch (error) {
            res.status(404).send({ message: error.message })
        }
    },
    create: async (req, res) => {
        try {
            const newComment = new CommentModel(req.body);
            await newComment.save();
            const post = await PostModel.findById(newComment.post)
            post.comments.push(newComment._id)
            await post.save()
            res.send(newComment);
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    },
    update: async (req, res) => {
        try {
            const comment = await CommentModel.findByIdAndUpdate(req.params.id, req.body)
            res.send(comment);
        } catch (error) {
            res.status(404).send({ message: error.message })
        }
    },
    delete: async (req, res) => {
        try {
            const comment = await CommentModel.findByIdAndDelete(req.params.id)
            // TODO: Check that
            res.status(204).send('Comment deleted');
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
}

module.exports = CommentController