const User = require("../database/models/User")

module.exports = (req, res, next)=>{

    if(req.session.userId){
    User.findById(req.session.userId, (error, user)=>{

        if(error || !user){
           return res.redirect("/auth/login")
        }
    
        next()
      })
    }
    else{
        return res.redirect("/auth/login")
    }
}
