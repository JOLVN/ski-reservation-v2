const ShopModel = require('../models/shop.model')

const ShopController = {
    getAllShops: async (req, res) => {
        try {
            const shops = await ShopModel.find().populate("posts").populate('bookings')
            res.send(shops)
        } catch (error) {
            res.status(404).send({ message: error.message })
        }
    },
    getShopById: async (req, res) => {
        try {
            const shop = await ShopModel.findById(req.params.id).populate('posts').populate('bookings')
            res.send(shop)
        } catch (error) {
            res.status(404).send({ message: error.message })
        }
    },
    create: async (req, res) => {
        try {
            const newShop = new ShopModel(req.body)
            await newShop.save()
            res.send(newShop)
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    },
    update: async (req, res) => {
        try {
            const updatedShop = await ShopModel.findByIdAndUpdate(req.params.id, req.body)
            res.send(updatedShop)
        } catch (error) {
            res.status(404).send({ message: error.message })
        }
    }
}

module.exports = ShopController