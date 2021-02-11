$(document).ready(function () {

    const paymentHandler = async (e) => {
        e.preventDefault();
        let url = window.location.origin + "/order"

        let data = {
            cartId: $('#cartId').val(),
            addressLine1: $('#addressLine1').val(),
            addressLine2: $('#addressLine2').val(),
            city: $('#city').val(),
            pincode: $('#pincode').val(),
            phoneNumber: $('#phoneNumber').val()
        }


        // ajax request for getting order id
        $.ajax({
            type: "POST",
            url: url,
            data: data,
            success: function (data) {
                initiatePayment(data);
            },
            error: function (error) {
                console.log(error);
            }
        })

    }

    const initiatePayment = (data)=>{
        const __DEV__ = document.domain === 'localhost' 
		const options = {
			key: __DEV__ ? 'rzp_test_Ctvwlil3ArEq43' : 'PRODUCTION_KEY',
			currency: data.currency,
			amount: data.amount.toString(),
			order_id: data.id,
			name: 'Gift Cart',
			description: 'Pay for your items',
			//image: 'http://localhost:1337/logo.svg',
			handler: function (response) {
				
                const razorpayObj = {
                    payment_id:response.razorpay_payment_id,
                    order_id:response.razorpay_order_id,
                    razorpay_signature:response.razorpay_signature
                }
                paymentSuccessCall(razorpayObj);
                
			},
			// prefill: {
			// 	name,
			// 	email: 'sdfdsjfh2@ndsfdf.com',
			// 	phone_number: '9899999999'
			// }
		}
		const paymentObject = new window.Razorpay(options)
        paymentObject.open()
        
        paymentObject.on('payment.failed', function (response){
            console.log(response.error.code);
            console.log(response.error.description);
            console.log(response.error.source);
            console.log(response.error.step);
            console.log(response.error.reason);
            console.log(response.error.metadata.order_id);
            console.log(response.error.metadata.payment_id);
        })
    
    }
    // binding submit event with payment button
    $('#checkout-form-page').submit((e) => {
        paymentHandler(e);
    })


    //payment success call
    const paymentSuccessCall = (data)=>{
        $.ajax({
            type:"POST",
            url:window.location.origin+"/payment-success",
            data: data,
            success:function(data){
               console.log(data);
               location.replace(window.location.origin + "/confirm-page");
            },
            error: function(err){
             alert(err.toString());
            }
        })
    }
})