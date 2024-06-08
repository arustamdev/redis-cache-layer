import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const ProductSchema = new Schema({
  _id: ObjectId,
  title: String,
  description: String,
  category: String,
  price: Number,
  discountPercentage: Number,
  rating: Number,
  stock: Number,
  tags: [String],
  brand: String,
  sku: String,
  weight: Number,
  dimensions: Object,
  warrantyInformation: String,
  shippingInformation: String,
  availabilityStatus: String,
  reviews: [Object],
  returnPolicy: String,
  minimumOrderQuantity: Number,
  meta: Object,
  images: [String],
  thumbnail: String,
});

const ProductModel = mongoose.model('Product', ProductSchema);
export default ProductModel;
