import axios from 'axios'

const endPoint = 'http://localhost:8000/api/comment'

const createComment = async (data) => {
    const response = await axios.post(`${endPoint}`, data)
    return response.data;
}

const CommentService = {
    createComment
}

export default CommentService