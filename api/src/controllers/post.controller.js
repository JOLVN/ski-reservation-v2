const PostModel = require('../models/post.model')

const PostController = {
    getAllPosts: async (req, res) => {
        try {
            const posts = await PostModel.find().populate('comments').populate('bookings')
            res.send(posts)
        } catch (error) {
            res.status(404).send({ message: error.message })
        }
    },
    getPostById: async (req, res) => {
        try {
            const post = await PostModel.findById(req.params.id).populate('comments').populate('bookings')
            res.send(post)
        } catch (error) {
            res.status(404).send({ message: error.message })
        }
    },
    create: async (req, res) => {
        try {
            const newPost = new PostModel(req.body);
            await newPost.save();
            res.send(newPost);
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    },
    update: async (req, res) => {
        try {
            const post = await PostModel.findByIdAndUpdate(req.params.id, req.body);
            res.send(post);
        } catch (error) {
            res.status(404).send({ message: error.message })
        }
    },
    delete: async (req, res) => {
        try {
            const post = await PostModel.findByIdAndDelete(req.params.id)
            res.status(204).send({ message: 'Post deleted' });
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }

}

module.exports = PostController