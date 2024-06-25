const mongoose = require('mongoose')

// Admin Schema creation

const adminSchma =new mongoose.Schema({

    email: {
        type:String,
        unique: true,
        trim: true,
        required: true
    },
    password:{
 
        type:String,
        trim: true,
        required: true
    }
}) 

const admins = new mongoose.model('admins', adminSchma)

module.exports = admins