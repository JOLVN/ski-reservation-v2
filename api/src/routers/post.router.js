const express = require('express')
const router = express.Router()
const PostController = require('../controllers/post.controller')

const endPoint = '/post'
router.get(`${endPoint}s`, PostController.getAllPosts)
router.get(`${endPoint}/:id`, PostController.getPostById)
router.post(`${endPoint}`, PostController.create)
router.put(`${endPoint}/:id`, PostController.update)
router.delete(`${endPoint}/:id`, PostController.delete)

module.exports = router