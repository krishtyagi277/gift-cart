const mongoose = require("mongoose");
const User = require('../database/models/User');
const {CartModel, CartSchema} = require("../database/models/Cart");
const { OrderModel } = require("../database/models/Order")

module.exports =async (req, res)=>{


 
  await User.findById(req.session.userId).then((user)=>{
     
     if(user.cartId){
        // delete cart   
       CartModel.deleteOne({_id:user.cartId}, (err)=> {
        if (err) return handleError(err);
        
      })

      /*
      * empty cart id for current user
      */
       User.findByIdAndUpdate(user._id, {
        cartId:""
       }, (err, data)=>{
            
            
         OrderModel.findById(req.session.orderId).then((orderData)=>{
          console.log(orderData)

          return res.render("confirmation", {
            orderData
          })
      }).catch((err)=>{
        console.log(err)
          return res.redirect("/");
      })
   })
  
  }
  else{
     
    OrderModel.findById(req.session.orderId).then((orderData)=>{
      console.log(orderData)

      return res.render("confirmation", {
        orderData
      })
  }).catch((err)=>{
    console.log(err)
      return res.redirect("/");
  })

  }

  }).catch((err)=>{
          console.log(err)
          return res.redirect("/");
      })

} 

