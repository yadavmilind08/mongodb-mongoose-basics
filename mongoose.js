const mongoose = require("mongoose");

const Product = require("./models/product");

const url =
  "mongodb+srv://max:max@123@cluster0.mupyq.mongodb.net/products_test?retryWrites=true&w=majority";

mongoose
  .connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => {
    console.log("Connected to DB!");
  })
  .catch(() => {
    console.log("Connection Failed!");
  });

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  const result = await createdProduct.save();

  res.json(result);
};

const getProducts = async (req, res, next) => {
  const products = await Product.find().exec();

  res.json(products);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
