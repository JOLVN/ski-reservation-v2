import axios from 'axios'

const getAll = async () => {
    const response = await axios.get('https://dummyjson.com/products')
    return response.data
}

const PostService = {
    getAll
}

export default PostService