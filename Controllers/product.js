const Product = require("../model/Product");
exports.addProduct = async (req, res) => {
  try {
    const { name, description, price, stock } = req.body;
    const newProduct = new Product({
      name,
      description,
      price,
      stock,
      id_user: req.user._id,
    });
    await newProduct.save();
    res.status(200).send({ msg: "Product add succ ..", newProduct });
  } catch (error) {
    res.status(400).send({ msg: "can not add product ", error });
  }
};
exports.getProducts = async (req, res) => {
  try {
    const listProducts = await Product.find();
    res
      .status(200)
      .send({ msg: "This is the list of all products ", listProducts });
  } catch (error) {
    res.status(400).send({ msg: "can not get product !! ", error });
  }
};
exports.getProduct = async (req, res) => {
  try {
    const oneProduct = await Product.findOne({ _id: req.params.id });
    res.status(200).send({ msg: "I get the product ", oneProduct });
  } catch (error) {
    res.status(400).send({ msg: "can not get product !! ", error });
  }
};
exports.deleteProduct = async (req, res) => {
  try {
    const { _id } = req.params;
    await Product.findOneAndDelete({ _id });
    res.status(200).send({ msg: "Product deleted .." });
  } catch (error) {
    res.status(400).send({ msg: "can not delete product !! ", error });
  }
};
exports.editProduct = async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await Product.updateOne({ _id }, { $set: { ...req.body } });
    res.status(200).send({ msg: "Product updated .. " });
  } catch (error) {
    res.status(400).send({ msg: "can not edit product !! ", error });
  }
};
