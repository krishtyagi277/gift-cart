const mongoose = require("mongoose");

mongoose.set('useCreateIndex', true)

const Product = new mongoose.Schema({

    code:{
        type:String
    },
    name:{
     type: String
    },
    price:{
        type:Number
    },
    description:{
        type:String
    },
    category:{
        type:String
    },
    subCategory:{
        type:String
    },
    subCategory2:{
        type:String
    },
    subCategory3:{
        type:String
    },
    miniPicture:{
        type:String
    },
    bigPicture:{
        type:String
    },
    displayPicture:{
        type:String
    },
    stock:{
        type:Boolean
    },
    salePrice:{
        type:Number
    }
})


module.exports = {
   ProductModel: mongoose.model('Product', Product),
   ProductSchema: Product   
}