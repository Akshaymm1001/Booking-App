
const mongoose = require ('mongoose')
 const ShopSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
        
    },
    id:{
        type: String,
        required: true,
        unique:true
    },
    Email:{
        type: String,
        required: true,
        unique: true,
    },
    Password:{
        type: String,
        required: true,
    },
 })
 const Shop = mongoose.model('shop-data', ShopSchema);
 
 module.exports = Shop;
 