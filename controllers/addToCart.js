const mongoose = require("mongoose");
const User = require('../database/models/User');
const {ProductModel, ProductSchema} = require("../database/models/Product")
const {CartModel, CartSchema} = require("../database/models/Cart");
const {PaymentStatus, OrderStatus} = require("../database/models/Status")

module.exports = async (req, res)=>{
  
    const productId = req.body.productId;
    const productQuantity = Number(req.body.quantity>0? req.body.quantity: 1);
    const messageWithProduct = req.body.message;

    const currentProductData = await ProductModel.findById(productId);
    
    const currentUser = User.findById(req.session.userId).then((user)=>{
      console.log(user);

      if(user.cartId!=undefined && user.cartId!=""){
        console.log(`Cart-Id found in session ${user.cartId}`);
        
        const getCart = cartId=>new Promise((resolve, reject)=>{
            
          let currentCart = CartModel.findById(cartId, (err, data)=>{
              if(err)
              throw err;
  
              resolve(data);
          });
          
       })
       
       getCart(user.cartId).then((currCartData)=>{
         
          console.log("cart found");
          
          let currCartEntries = currCartData.cartEntry;
          let productFound = false;
          let cartQuantity = 0;
          let cartTotalPrice=0;
          for(let i=0;i<currCartEntries.length;i++){
              
              if(currCartEntries[i]._id==currentProductData._id && currentProductData._id!=undefined){
                 
                  currCartEntries[i].quantity+=1
                  
                  currCartEntries[i].totalPrice =currCartEntries[i].productModel.price * currCartEntries[i].quantity
                  
                  productFound=true;
              }
           
              cartQuantity+=currCartEntries[i].quantity;
              cartTotalPrice+=currCartEntries[i].totalPrice;
  
          }
          
          // if we found product in the cart
          if(productFound){
             
              CartModel.findByIdAndUpdate(req.session.cartId, {
                  cartEntry:currCartEntries,
                  cartQuantity:cartQuantity,
                  cartTotalPrice:cartTotalPrice
              }, (err, data)=>{
               
                  if(err)
                  throw err;
  
                  req.session.cartQuantity = cartQuantity;
                  //req.session.globalMessage = "Prodcut Added Successfully!"
                  res.redirect("/cart")
              })
          }
          /* 
           * if we found product in the cart
           */
          else{
               
              let createProductEntry = {
                  _id:currentProductData._id,
                  productModel:{
                     productId:currentProductData._id,
                     code:currentProductData.code,
                     name:currentProductData.name,
                     price:currentProductData.price,
                     description:currentProductData.description,
                    category: currentProductData.category,
                    subCategory:currentProductData.subCategory,
                    superCategory:currentProductData.superCategory,
                    type:currentProductData.type,
                    miniPicture:currentProductData.miniPicture,
                    bigPicture:currentProductData.bigPicture,
                    displayPicture:currentProductData.displayPicture,
                    stock:currentProductData.stock,
                    salePrice:currentProductData.salePrice
                  },
                  quantity: 1,
                  totalPrice: currentProductData.price
              }
  
              let currCartEntryArray = currCartData.cartEntry;
              currCartEntryArray.push(createProductEntry);
              
              let cartQuantity = 0;
              let cartTotalPrice=0;
              for(let i=0; i<currCartEntryArray.length;i++){
                  cartQuantity+=currCartEntryArray[i].quantity;
                  cartTotalPrice+=currCartEntryArray[i].totalPrice;
              }
  
              CartModel.findByIdAndUpdate(user.cartId, {
                  cartEntry:currCartEntryArray,
                  cartQuantity:cartQuantity,
                  cartTotalPrice:cartTotalPrice
              }, (err, data)=>{
               
                  if(err)
                  throw err;
                 
                 req.session.cartQuantity= cartQuantity;
                // req.session.globalMessage = "Prodcut Added Successfully!"
                 res.redirect("/cart")
              })
  
          }
  
  
          
       }).catch((err)=>{
           console.log(err)
       })
  
  
      }
      // If cartId is not exist.
      else{
         
          const cartObj = {
              cartEntry:[{
                  _id:currentProductData._id,
                  productModel:{
                     productId:currentProductData._id,
                     code:currentProductData.code,
                     name:currentProductData.name,
                     price:currentProductData.price,
                    description:currentProductData.description,
                    category: currentProductData.category,
                    subCategory:currentProductData.subCategory,
                    superCategory:currentProductData.superCategory,
                    type:currentProductData.type,
                    miniPicture:currentProductData.miniPicture,
                    bigPicture:currentProductData.bigPicture,
                    displayPicture:currentProductData.displayPicture,
                    stock:currentProductData.stock,
                    salePrice:currentProductData.salePrice
                  },
                  quantity: productQuantity,
                  totalPrice: currentProductData.price*productQuantity,
                  message:messageWithProduct
              }],
              cartQuantity:1,
              cartTotalPrice:currentProductData.price,
              userId: req.session.userId,
              address:{
                addressLine1:"",
                addressLine2:"",
                city:"",
                pincode:"",
                phoneNumber: ""
               },
               razorpayObj:{
                paymentId:PaymentStatus.initialize,
                orderId:OrderStatus.initialize,
                razorpaySignature:""
           },
           paymentStatus:PaymentStatus.initialize,
           OrderStatus:OrderStatus.initialize

          }
      
      
          CartModel.create(cartObj, (err, data)=>{
      
              if(err)
              throw err;
              console.log(`Cart-created successfully ${data._id}`);
              user.cartId =  data._id

              //add cart id to Db
               User.findByIdAndUpdate(req.session.userId, {
                  cartId: data._id
               }, (err, data)=>{
                   if(err)
                   throw err;

                   console.log(`--------cartId added to user data ${data}`);
               })

              req.session.cartQuantity= data.cartQuantity;
             // req.session.globalMessage = "Prodcut Added Successfully!"
              res.redirect("/cart");
          })
      }
    
    }).catch((err)=>{
       console.log(err);
    });
// if session cart exist
  
    
    


}

