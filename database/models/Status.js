const PaymentStatus = {
    initialize:"initialize",
    created:"created",
    captured:"captured",
    refunded:"refunded",
    failed:"failed"
}

const OrderStatus = {
    initialize:"initialize",
    created:"created",
    attempted:"attempted",
    paid:"paid",
    failed:"failed",
    confirmed:"confirmed"
}

module.exports = {
    PaymentStatus:PaymentStatus,
    OrderStatus: OrderStatus
}