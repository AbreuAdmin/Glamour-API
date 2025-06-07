const orderService = require('../services/order.service');

exports.createOrder = async (req, res, next) => {
  try {
    const order = await orderService.createOrder(req.body);
    res.status(201).json(order);
  } catch (err) {
    next(err);
  }
};

exports.getAllOrders = async (req, res, next) => {
  try {
    const orders = await orderService.getAllOrders();
    res.json(orders);
  } catch (err) {
    next(err);
  }
};

exports.deleteOrderById = async (req, res, next) => {
  try {
    const deleted = await orderService.deleteOrderById(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Pedido não encontrado.' });
    res.status(204).send();
  } catch (err) {
    next(err);
  }
};