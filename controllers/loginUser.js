const User = require("../database/models/User")
const bcrypt = require("bcrypt")

module.exports = (req, res)=>{

    const {email, password} = req.body;
    
    User.find({email}, (error, user)=>{
      
        if(error){
            return res.redirect("/auth/login")
        }

        if(user){
            bcrypt.compare(password, user[0].password, (err, gotUser)=>{
                
                if(err){
                    return res.redirect("/auth/login")
                }

                if(gotUser){
                    
                    req.session.userId = user[0]._id
                    return res.redirect("/")
                }
                else{
                    return res.redirect("/auth/login")
                }
            })
        }
        else{
            return res.redirect("/auth/login")
        }
    })
}