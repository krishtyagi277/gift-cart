const mongoose = require("mongoose");
const { PaymentStatus, OrderStatus } = require("../database/models/Status")
const { OrderModel } = require("../database/models/Order")
const { compareSync } = require("bcrypt");
module.exports = async (req, res) => {


    console.log("----------------" + req.session.orderId)

    await OrderModel.findByIdAndUpdate(req.session.orderId, {
        razorpayObj: {
            paymentId: req.body.payment_id,
            orderId: req.body.order_id,
            razorpaySignature: req.body.razorpay_signature,

        },
        paymentStatus: PaymentStatus.captured,
        orderStatus: OrderStatus.confirmed

    }, (err, data) => {

        if (err) {
            console.log(err)
            return res.status(500).json({
                message: "Error in crearting order model",
            });
        }

        return res.status(200).json({
            message: "payment completed"
        });

    })


}