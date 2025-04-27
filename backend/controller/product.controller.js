import Product from '../models/product.model.js';
import mongoose from 'mongoose';

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}); // Fetch all products from the database
    res.status(200).json({ success: true, data: products }); // Send response with products
  } catch (error) {
    console.error('Error fetching products:', error); // Log the error for debugging
    res.status(500).json({ success: false, message: 'Server error' }); // Send error response
  }
};

export const createProducts = async (req, res) => {
  const product = req.body; // Assuming you have a product object in the request body
  if (!product.name || !product.price || !product.image) {
    return res
      .status(400)
      .json({ success: false, message: 'All fields are required' }); // Use 'return' to stop further execution
  }

  const newProduct = new Product(product);

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct }); // Send response only once
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const updateProducts = async (req, res) => {
  const { id } = req.params; // Extracting id from the request parameters
  const product = req.body; // Assuming you have an updated product object in the request body

  try {
    const updatedproduct = await Product.findByIdAndUpdate(id, product, {
      new: true,
    });
    res.status(200).json({ success: true, data: product }); // Send response only once
    if (!product) {
      return res
        .status(404)
        .json({ success: false, message: 'Product not found' });
    }
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

export const deleteProducts = async (req, res) => {
  const { id } = req.params; // Extracting id from the request parameters
  console.log('Deleting product with id:', id); // Log the id to be deleted
  try {
    await Product.findByIdAndDelete(id);
    res
      .status(200)
      .json({ success: true, message: 'Product deleted successfully' });
  } catch (error) {
    console.error('Error deleting product:', error);
    return res.status(500).json({ success: false, message: 'Server error' });
  }
};
