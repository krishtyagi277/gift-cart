const { ProductModel } = require("../database/models/Product")
const { CartModel, CartSchema } = require("../database/models/Cart");
const User = require("../database/models/User")
module.exports = async (request, response) => {

    request.session.globalMessage = "";
    const productDisplayData = await ProductModel.find({}, (err, data) => { if (err) throw err; return data; }).limit(8)

    const userId = request.session.userId;


    if (userId) {

        User.findById(userId).then((currentUser) => {

            if (currentUser.cartId!=="" && currentUser.cartId!==undefined) {
                CartModel.findById(currentUser.cartId, (err, data) => {
                    if (err)
                        throw err;

                    return response.render("index", {
                        productDisplayData,
                        cartQuantity: data.cartQuantity
                    })
                })
            }
            else {

                response.render("index", {
                    productDisplayData
                })
            }
        }).catch((err) => {

            console.log(err)
        })

    }
    else {

        response.render("index", {
            productDisplayData
        })
    }


}


