const {ProductModel}  = require("../database/models/Product")
const {CartModel, CartSchema} = require("../database/models/Cart");

module.exports = async (req, res)=>{

    const individualProductData = await ProductModel.findById(req.params.id)
    
    //fetch cart quantity if cart exist
    if(req.session.cartId!=undefined){
        
        CartModel.findById(req.session.cartId, (err, data)=>{
            if(err)
            throw err;

            return res.render("productDetailPage", {
                individualProductData,
                cartQuantity:data.cartQuantity
            })
        })
    }
    else{
       return res.render("productDetailPage", {
            individualProductData,
            cartQuantity:0
      })
    }

    
}