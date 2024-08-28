const ProductSchema=require('../models/productModel');
const ErrorHandler = require('../utils/errorHandler');
const AsyncError = require('../middleware/catchAsyncError');

// Get Products - /api/v1/products
exports.getProducts=async(req,res,next)=>{
   const products=await ProductSchema.find();
   res.status(200).json({
    success:true,
    products,
    count:products.length
   })
};

// create product- /api/v1/product/new
exports.newProduct= AsyncError(async(req,res,next)=>{
   const product=await ProductSchema.create(req.body);
   res.status(201).json({
      success:true,
      product
   })
})

// get single products -/api/v1/product/:id (get)
exports.getSingleProduct=async(req,res,next)=>{
   const product=await ProductSchema.findById(req.params.id);
   if(!product){
    return next( new ErrorHandler("Product Not Found",400));
   }

     res.status(400).json({
      success:true,
      product
      })      
}

// update products -/api/v1/product/:id (put)
exports.updateProduct=async(req,res,next)=>{
   let product=await ProductSchema.findByIdAndUpdate(req.params.id);
   if(!product){
      return res.status(401).json({
         success:false,
         message:"No products Found"
      })
   }

   product=await ProductSchema.findByIdAndUpdate(req.params.id,req.body,{
      new:true,
      runValidators:true
   })

   res.status(200).json({
      success:true,
      product
   })
}

exports.deleteProduct=async(req,res,next)=>{
   const product=await ProductSchema.findById(req.params.id);
   if(!product){
      return res.status(401).json({
         success:false,
         message:"No product Found"
      })
   } 

   await ProductSchema.findByIdAndDelete(req.params.id);

   res.status(200).json({
      success:true,
      message:"product deleted"
   })
}


