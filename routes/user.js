// 1 require express 
const express = require("express")
const { register, login } = require("../Controllers/user")
const { registerValidation, validation, loginValidation } = require("../middleware/validation")
const isAuth = require("../middleware/isAuth")

// 2 routes 
const router = express.Router()

// register
router.post("/register", registerValidation(), validation, register)
// login
router.post("/login", loginValidation(), validation, login)

// current user 
router.get("/current", isAuth, (req, res) => {
    res.send(req.user)
})

// export 
module.exports = router
