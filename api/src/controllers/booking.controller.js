const BookingModel = require('../models/booking.model');
const PostModel = require('../models/post.model');
const ShopModel = require('../models/shop.model');

const BookingController = {
    getAllBookings: async (req, res) => {
        try {
            const bookings = await BookingModel.find()
            res.send(bookings)
        } catch (error) {
            res.status(404).send({ message: error.message })
        }
    },
    getBookingById: async (req, res) => {
        try {
            const booking = await BookingModel.findById(req.params.id)
            res.send(booking)
        } catch (error) {
            res.status(404).send({ message: error.message })
        }
    },
    create: async (req, res) => {
        try {
            const newBooking = new BookingModel(req.body)
            await newBooking.save()
            const post = await PostModel.findById(newBooking.post)
            post.bookings.push(newBooking._id)
            post.isAvailable = false
            await post.save()
            const shop = await ShopModel.findById(newBooking.shop)
            shop.bookings.push(newBooking._id)
            await shop.save()
            res.send(newBooking);
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    },
    update: async (req, res) => {
        try {
            const booking = await BookingModel.findByIdAndUpdate(req.params.id, req.body)
            res.send(booking)
        } catch (error) {
            res.status(404).send({ message: error.message })
        }
    },
    delete: async (req, res) => {
        try {
            const booking = await BookingModel.findByIdAndDelete(req.params.id)
            res.status(204).send({ message: 'Booking deleted' })
        } catch (error) {
            res.status(400).send({ message: error.message })
        }
    }
}

module.exports = BookingController