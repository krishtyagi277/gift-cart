const mongoose = require("mongoose");
const User = require("../database/models/User")
const { CartModel, CartSchema } = require("../database/models/Cart")

module.exports = async (req, res) => {

    const userId = req.session.userId;

    if (req.session.userId) {
        const currentUser = await User.findById(userId);
        
        if (currentUser.cartId) {
        CartModel.findById(currentUser.cartId).then((currentCartData)=>{
            
            
                res.render("cart", {
                    currentCartData,
                    cartQuantity: currentCartData.cartQuantity
                })
            
        }).catch((err)=>{
          
            console.log(err);
        });
        
         }
        else {
        res.render("cart");
        }

       

    }


}