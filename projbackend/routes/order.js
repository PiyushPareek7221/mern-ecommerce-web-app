const express = require('express');
const router = express.Router();
const {getUserById, pushOrderInPurcahseList} = require("../controllers/user");
const {isAdmin, isSignedIn, isAuthenticated} = require("../controllers/auth");
const {getOrderById, createOrder, getAllOrders, getOrderStatus, updateStatus}  = require("../controllers/order");
const {updateStock} = require('../controllers/product');

router.param('orderId', getOrderById);
router.param('userId', getUserById);

router.post('/order/create/:userId', isSignedIn, isAuthenticated, pushOrderInPurcahseList, updateStock, createOrder);
router.get('/order/all/:userId',isSignedIn, isAuthenticated, isAdmin, getAllOrders);
router.get('/order/status/:userId', isSignedIn, isAuthenticated, isAdmin, getOrderStatus);
router.put('/order/:orderId/status/:userId', isSignedIn, isAuthenticated, isAdmin, updateStatus);
module.exports = router;