// -1 require mongoose
const mongoose = require("mongoose");

// -2 create schema
const schema = mongoose.Schema;

const productSchema = new schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  id_user: { type: schema.Types.ObjectId, ref: "user", required: true },
});

module.exports = Product = mongoose.model("product", productSchema);
