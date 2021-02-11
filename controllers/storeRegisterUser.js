const User = require("../database/models/User")
module.exports = (req, res)=>{
   
    User.create({...req.body, cartId:""}, (error, user)=>{
         
        if(error){
            console.log(error)
            return res.redirect("/auth/register")
        }

        res.redirect("/")
    })
    
}
