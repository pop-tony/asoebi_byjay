const express = require('express');
const { getProducts, getProductBySlug, createProduct } = require('../controllers/productController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

router.get('/', getProducts);
router.get('/:slug', getProductBySlug);
router.post('/', protect, authorize('admin'), createProduct);

module.exports = router;
