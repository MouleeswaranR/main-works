const products=require('../data/products.json');
const ProductSchema=require('../models/productModel');
const dotenv=require('dotenv');
const connectDatabase=require('../config/database.js');

dotenv.config({path:"backend/config/config.env"});
connectDatabase();

const seedProducts=async()=>{
  try{
    await ProductSchema.deleteMany();
    console.log('Products Deleted');
    await ProductSchema.create(products);
    console.log('Products Inserted');      
  }catch(error){
    console.log(error.message);
    
  }
  process.exit();
}

seedProducts();