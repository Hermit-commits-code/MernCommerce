import { connectDB } from './config/db.js';
import dotenv from 'dotenv';
import express from 'express';
import productRoutes from './routes/product.route.js';

dotenv.config();
const app = express();
app.use(express.json()); //allows us to accept JSON data in the request body

app.use('/api/products', productRoutes);

app.listen(5000, () => {
  // Connect to MongoDB
  connectDB();
  console.log('Server is running on port 5000');
});
