const mongoose = require("mongoose");

mongoose.set('useCreateIndex', true)

const ProductEntry = new mongoose.Schema({
    productId:{
        type:String
    },
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
    superCategory:{
        type:String
    },
    type:{
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
    ProductEntryModel: mongoose.model('ProductEntry', ProductEntry),
    ProductEntrySchema: ProductEntry   
}