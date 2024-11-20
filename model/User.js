// 1 require mongoose 
const mongoose = require("mongoose")

// 2 schema 
const { Schema, model } = mongoose

// 3  create schema 
const UserSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: String,
})

// export to the database model 
module.exports = User = model("user", UserSchema)