import axios from 'axios'

const endPoint = 'http://localhost:8000/api/shop'

const getAll = async () => {
    const response = await axios.get(`${endPoint}s`)
    return response.data
}

const getShopById = async (id) => {
    const response = await axios.get(`${endPoint}/${id}`)
    return response.data
}

const updateShop = async (id, shop) => {
    const response = await axios.put(`${endPoint}/${id}`, shop)
    return response.data
}

const ShopService = {
    getAll,
    getShopById,
    updateShop
}

export default ShopService