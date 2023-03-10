const User = require('../models/user.model')
const bcrypt = require('bcrypt')
const salt = 10
const jwt = require('jsonwebtoken')
const transporter = require('../../config/nodemail.config')

const AuthController = {
    signin: async (req, res) => {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (!user) return res.status(404).send({ error: 'User not found' })
        const passwordCompare = await bcrypt.compare(password, user.password)
        if (!passwordCompare) return res.status(401).send({ error: 'Password is incorrect' })
        const accessToken = jwt.sign({ email }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '2h' })
        res.send({ accessToken })
    },
    signup: async (req, res) => {
        const { email, password } = req.body
        const hash = await bcrypt.hash(password, salt)
        const user = new User({
            email,
            password: hash,
        })
        try {
            await user.save()
            res.send(user)

            var mailOptions = {
                from: 'jolan.callens@gmail.com',
                to: user.email,
                subject: 'Sending Email using Node.js',
                text: `Welcome ${user.email} to my website`
            };

            await transporter.sendMail(mailOptions)
        } catch (error) {
            res.status(500).send({ error: error.message })
        }
    }
}

module.exports = AuthController