const Order = require('../models/order.model');
const Product = require('../models/product.model');
const { v4: uuidv4 } = require('uuid');

const createOrder = async ({ username, number, address, paymentMethod, idProducts, quantity }) => {
  if (idProducts.length !== quantity.length) {
    throw new Error('Quantidade de produtos e quantidades não correspondem.');
  }

  let total = 0;

  const products = await Product.find({ _id: { $in: idProducts } });

  products.forEach((product, index) => {
    const qty = quantity[index];
    if (product.stock < qty) {
      throw new Error(`Produto ${product.name} não tem estoque suficiente.`);
    }
    total += product.price * qty;
  });

  // Atualizar o estoque
  for (let i = 0; i < products.length; i++) {
    products[i].stock -= quantity[i];
    await products[i].save();
  }

  const newOrder = new Order({
    idOrder: uuidv4(),
    username,
    number,
    address,
    paymentMethod,
    idProducts,
    quantity,
    totalPrice: total
  });

  return await newOrder.save();
};

const getAllOrders = async () => {
  return await Order.find().populate('idProducts');
};

const deleteOrderById = async (id) => {
  return await Order.findByIdAndDelete(id);
};

module.exports = {
  createOrder,
  getAllOrders,
  deleteOrderById
};