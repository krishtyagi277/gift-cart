const mongoose = require("mongoose");
const {ProductSchema, ProductModel} = require("./Product")
const {ProductEntryModel, ProductEntrySchema} = require("./ProductEntry")
const Order = new mongoose.Schema({
    orderEntry:[{
        _id: String,
        productModel:ProductEntrySchema,
        quantity: Number,
        totalPrice: Number,
        message:String
    }],
    orderQuantity:Number,
    orderTotalPrice:Number,
    userId:String,
    address:{
     addressLine1:String,
     addressLine2:String,
     city:String,
     pincode:String,
     phoneNumber: String
    },
    createdAt:{
        type: Date,
        default: new Date()
    },
    razorpayObj:{
         paymentId:{
             type:String,
             default:""
         },
         orderId:{
             type:String,
             default:""
         },
         razorpaySignature:{
             type:String,
             default:""
         }
    },
    paymentStatus:{
        type:String
    },
    orderStatus:{
        type:String
    }
    
})


module.exports = {
OrderModel: mongoose.model('OrderModel', Order),
OrderSchema: Order
}