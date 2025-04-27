import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    price: {
      type: Number,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, //createdAt, updatedAt
  },
);
// Create a model called Product based on the productSchema
// and export it for use in other parts of the application
const Product = mongoose.model('Product', productSchema);
export default Product;
