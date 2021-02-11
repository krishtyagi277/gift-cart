const mongoose = require("mongoose");
const User = require('../database/models/User');
const { ProductModel, ProductSchema } = require("../database/models/Product")
const { CartModel, CartSchema } = require("../database/models/Cart");
const Razorpay = require("razorpay");
const shortid = require("shortid");
const { OrderModel } = require("../database/models/Order")
const { OrderStatus, PaymentStatus } = require("../database/models/Status");
const Order = require("../database/models/Order");

const instance = new Razorpay({
    key_id: 'rzp_test_Ctvwlil3ArEq43',
    key_secret: 'tvkeY3OWUyqDT4jeWcriGKV8'
})

/*
* This controller will manage all the order related method
*/
module.exports =async (req, res) => {

    const data = req.body;
    const payment_capture = 1;
    const currency = 'INR';
    let OrderObj = {};

    CartModel.findById(data.cartId).then((cartData) => {

        try {

            const address = {
                addressLine1: data.addressLine1,
                addressLine2: data.addressLine2,
                city: data.city,
                pincode: data.pincode,
                phoneNumber: data.phoneNumber
            }

            // update address fields in cart
            CartModel.findByIdAndUpdate(data.cartId, {
                address: address
            }, (err, data) => {
                if (err) {
                    return res.status(500).json({
                        message: "Something Went Wrong",
                    });

                }
                /*
                * create Order Object 
                */
                OrderObj = {
                    orderEntry: data.cartEntry,
                    orderQuantity: data.cartQuantity,
                    orderTotalPrice: data.cartTotalPrice,
                    userId: data.userId,
                    address: data.address,
                    razorpayObj: data.razorpayObj,
                    paymentStatus: data.paymentStatus,
                    orderStatus: data.orderStatus

                }

                

            })

            const options = {
                amount: cartData.cartTotalPrice * 100,
                currency,
                receipt: shortid.generate(),
                payment_capture
            }

            /*
            * Creating Razorpay API call for getting Order ID
            */
            instance.orders.create(options, async function (err, order) {
                if (err) {
                    return res.status(500).json({
                        message: "Something Went Wrong with Order API",
                    });
                }

                /*
                * Update payment status in order Object
                */

                OrderObj.paymentStatus = PaymentStatus.created
                OrderObj.orderStatus = OrderStatus.created
                OrderObj.razorpayObj.orderId = order.id
                
                /*
                * Create Order Model in DB
                */
                await OrderModel.create(OrderObj).then((data) => {
                    console.log(`Order Model created: ${data}`)
                    

                    req.session.orderId = data._id;
                    return res.status(200).json(order);
                    
                }).catch((err) => {
                    return res.status(500).json({
                        message: "Error in crearting order model",
                    });

                })

               
            })

        }
        catch (err) {
            return res.status(500).json({
                message: "Something Went Wrong",
            });
        }

    }).catch((err) => {

    })

}