const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');
const { protect, isAdmin } = require('../middleware/auth.middleware');

router.post('/', orderController.createOrder);
router.get('/', protect, isAdmin, orderController.getAllOrders);
router.delete('/:id', protect, isAdmin, orderController.deleteOrderById);

module.exports = router;