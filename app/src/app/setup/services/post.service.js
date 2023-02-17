import axios from 'axios'

const endPoint = 'http://localhost:8000/api/post'

const getAll = async () => {
    const response = await axios.get(`${endPoint}s`)
    return response.data
}

const getPostById = async (id) => {
    const response = await axios.get(`${endPoint}/${id}`)
    return response.data
}

const edit = async (id, data) => {
    const response = await axios.put(`${endPoint}/${id}`, data)
    return response.data
}

const create = async (data) => {
    console.log(data)
    const response = await axios.post(`${endPoint}`, data)
    return response.data
}

const PostService = {
    getAll,
    getPostById,
    edit,
    create

}

export default PostService