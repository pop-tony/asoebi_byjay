const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const order = await Order.create({ ...req.body, user: req.user.id });
  return res.status(201).json(order);
};

exports.getOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user.id }).populate('user');
  return res.status(200).json(orders);
};
