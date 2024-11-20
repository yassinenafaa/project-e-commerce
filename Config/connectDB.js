// 1 require mongoose 
const mongoose = require("mongoose")

// 2 create DB

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URI)
        console.log("Database connected .. ")

    } catch (error) {

        console.log("can not connect .. !! ", error)

    }

}

// 3 export 
module.exports = connectDB