const bcrypt = require("bcrypt")
const mongoose = require("mongoose");

mongoose.set('useCreateIndex', true)

const UserSchema = new mongoose.Schema({
    
    name:{
        type:String,
        required:[true, 'Please Enter Valid Name']
    },
    email:{
        type:String,
        required:[true, 'Please Enter Valid Email'],
        unique:true
    },
    dateOfBirth:{
        type:Date
    },
    password:{
        type: String,
        required:[true, 'Please Enter Valid Password']
    },
    confirmPassword:{
        type: String,
        required:[true, 'Please Enter Valid Password']
    },
    cartId:{
        type:String
    },
    createdAt:{
        type: Date,
        default: new Date()
    }


})

UserSchema.pre('save', function(next){

    const user = this;
    bcrypt.hash(user.password, 10, function(error, encrypted){
        
         user.password = encrypted;

         next()
    })
})


module.exports = mongoose.model('User', UserSchema)