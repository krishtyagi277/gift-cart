const {ProductModel}  = require("../database/models/Product")
const {CartModel, CartSchema} = require("../database/models/Cart");

module.exports = async (req, res)=>{
  
    const category = req.params.category;
    let productsData = [];
    if(category){
      productsData = await ProductModel.find({$or:[{category:category},{subCategory:category},{subCategory2:category},{subCategory3:category}]})
    }
    else{
        productsData = await ProductModel.find({})
    }
    // const productsData = await ProductModel.find({category:category})
    
    
    if(req.session.cartId!=undefined){
        
        CartModel.findById(req.session.cartId, (err, data)=>{
            if(err)
            throw err;

            return res.render("productListPage", {
                productsData,
                cartQuantity:data.cartQuantity
            })
        })
    }
    else{

        return res.render("productListPage", {
            productsData
        })
    }
    
}