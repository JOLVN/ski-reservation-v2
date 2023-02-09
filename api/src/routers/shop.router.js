const express = require('express')
const router = express.Router()
const ShopController = require('../controllers/shop.controller')

const endPoint = '/shop'

router.get(`${endPoint}s`, ShopController.getAllShops)
router.get(`${endPoint}/:id`, ShopController.getShopById)
router.post(`${endPoint}`, ShopController.create)
router.put(`${endPoint}/:id`, ShopController.update)

module.exports = router