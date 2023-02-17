import axios from 'axios'

const endPoint = 'http://localhost:8000/api/booking'

const getAll = async () => {
    const response = await axios.get(`${endPoint}s`)
    return response.data
}

const getById = async (id) => {
    const response = await axios.get(`${endPoint}/${id}`)
    return response.data
}

const BookingService = {
    getAll,
    getById
}

export default BookingService