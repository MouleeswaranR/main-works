const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter Product Name"],
    trim: true,
    maxlength: [100],
  },
  price: {
    type: Number,
    default: 0.0,
  },
  description: {
    type: String,
    required: [true, "Please Enter Product Description"],
  },
  rating: {
    type: String,
    default: 0,
  },
  images: [
    {
      image: {
        type: String,
        required: [true, "Please Enter the File Path"],
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please enter the product category"],
    enum: {
      values: [
        "Electronics",
        "Mobile Phones",
        "Laptops",
        "Accessories",
        "Headphones",
        "Food",
        "Books",
        "Clothes/Shoes",
        "Beauty/Health",
        "Sports",
        "Outdoor",
        "Home",
      ],
      message: "Please enter correct category",
    },
  },
  seller: {
    type: String,
    required: [true, "Please enter the seller name"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter the products stock"],
    maxlength: [20, "Product stock cannot exceed 20"],
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  reviews: [
    {
      name: {
        type: String,
        required: [true],
      },
      rating: {
        type: String,
        required: [true],
      },
      comment: {
        type: String,
        required: [true],
      },
    },
  ],
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

const schema = mongoose.model("Products", productSchema);
module.exports=schema;
