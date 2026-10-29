const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  const { category } = req.query;
  const filter = category ? { category } : {};
  const products = await Product.find(filter).sort({ createdAt: -1 });
  return res.status(200).json(products);
};

exports.getProductBySlug = async (req, res) => {
  const product = await Product.findOne({ slug: req.params.slug });
  if (!product) {
    return res.status(404).json({ message: 'Product not found' });
  }
  return res.status(200).json(product);
};

exports.createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  return res.status(201).json(product);
};
