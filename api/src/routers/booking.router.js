const express = require('express')
const router = express.Router()
const BookingController = require('../controllers/booking.controller')

const endPoint = '/booking'

router.get(`${endPoint}s`, BookingController.getAllBookings)
router.get(`${endPoint}/:id`, BookingController.getBookingById)
router.post(`${endPoint}`, BookingController.create)
router.put(`${endPoint}/:id`, BookingController.update)
router.delete(`${endPoint}/:id`, BookingController.delete)

module.exports = router