// 1 require express 
const express = require("express")

// 2 create instance 
const app = express()

// 5 require dotenv
require("dotenv").config()

// 6 connectDB 
const connectDB = require("./Config/connectDB")
connectDB()

// 7 Routing 
// 7.1 middleware global
app.use(express.json())

// 7.2 middleware routes 
app.use("/api/user", require("./routes/user"))
app.use("/api/product", require("./routes/product"))

// 3 create PORT
const PORT = process.env.PORT

// 4 create server 
app.listen(PORT, (err) => {
    err ? console.error(err) : console.log(` Server is running on PORT ${PORT} .. `)
})