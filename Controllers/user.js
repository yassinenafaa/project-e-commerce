const User = require("../model/User")
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
exports.register = async (req, res) => {
    try {
        // req.body => newUser 
        const { name, email, password, phone } = req.body
        const foundUser = await User.findOne({ email })
        if (foundUser) {
            return res
                .status(400)
                .send({ msg: " Email should be unique try again !!" })
        }
        const saltRounds = 10
        const hashedPassword = await bcrypt.hash(password, saltRounds)

        // const newUser
        const newUser = new User({ ...req.body })
        // save 
        newUser.password = hashedPassword
        await newUser.save()
        // create token 
        const token = jwt.sign(
            {

                id: newUser._id,
            },
            process.env.SECRET_KEY,
            { expiresIn: "1h" }
        )
        res.status(200).send({ msg: "Register successfuly.. ", user: newUser, token })
    } catch (error) {
        res.status(400).send({ errors: [{ msg: "Can not register the User " }] })
    }
}

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        // check if email exist 
        const foundUser = await User.findOne({ email })
        if (!foundUser) {
            return res.status(400).send({ errors: [{ msg: "Bad credential !!! " }] })
        }
        const checkPassword = await bcrypt.compare(password, foundUser.password)
        if (!checkPassword) {
            return res.status(400).send({ errors: [{ msg: "Bad credential !!! " }] })
        }
        // create token 
        const token = jwt.sign(
            {

                id: foundUser._id,
            },
            process.env.SECRET_KEY,
            { expiresIn: "1h" }
        )
        res.status(200).send({ msg: "login succesfully ...", user: foundUser, token })

    } catch (error) {
        res.status(500).send({ errors: [{ msg: "Can not login the User " }] })


    }

}