const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { protect, isAdmin, isSuperAdmin } = require('../middleware/auth.middleware');

router.get('/', protect, isAdmin, userController.getAllUsers);
router.get('/:id', protect, isAdmin, userController.getUserById);
router.put('/:id', protect, isAdmin, userController.updateUser);
router.delete('/:id', protect, isSuperAdmin, userController.deleteUser);
router.get('/logs', protect, isAdmin, userController.getAllLogs);
router.delete('/logs', protect, isAdmin, userController.deleteLogs);

module.exports = router;