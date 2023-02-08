const express = require('express')
const router = express.Router()
const CommentController = require('../controllers/comment.controller')

const endPoint = '/comment'

router.get(`${endPoint}s`, CommentController.getAllComments)
router.get(`${endPoint}/:id`, CommentController.getCommentById)
router.post(`${endPoint}`, CommentController.create)
router.put(`${endPoint}/:id`, CommentController.update)
router.delete(`${endPoint}/:id`, CommentController.delete)

module.exports = router