const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');
const { protect, isSuperAdmin } = require('../middleware/auth.middleware');

router.post('/register', protect, isSuperAdmin, authController.register);
router.post('/login', authController.login);
router.post('/logout',  protect, authController.logout);

module.exports = router;