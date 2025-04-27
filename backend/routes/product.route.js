import {
  createProducts,
  deleteProducts,
  getProducts,
  updateProducts,
} from '../controller/product.controller.js';

import express from 'express';

const router = express.Router();

// Get all products
router.get('/', getProducts);

// Create a new product
router.post('/', createProducts);

// Update a product by ID
router.put('/:id', updateProducts);

// Delete a product by ID
router.delete('/:id', deleteProducts);

export default router;
