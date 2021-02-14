const express = require('express');
const router = express.Router();
const {getAllProducts, getProductById, createProduct, getProduct, photo, updateProduct, deleteProduct, getAllUniqueCategories} = require("../controllers/product");
const {getUserById} = require("../controllers/user");
const {isAdmin, isSignedIn, isAuthenticated} = require("../controllers/auth");

router.param('userId', getUserById);
router.param('productId', getProductById);

router.post("/product/create/:userId", isSignedIn, isAuthenticated, isAdmin, createProduct);

router.get('/product/:productId', getProduct);
router.get('/product/photo/:productId', photo);

router.delete('/product/:productId/:userId', isSignedIn, isAuthenticated, isAdmin, deleteProduct);
router.put('/product/:productId/:userId', isSignedIn, isAuthenticated, isAdmin, updateProduct);

//listing route
router.get('/products', getAllProducts);

router.get('/products/categories', getAllUniqueCategories);
module.exports = router;