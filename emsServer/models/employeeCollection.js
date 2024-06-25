const mongoose=require('mongoose')

const employeeSchema=new mongoose.Schema({

    fname: {
        type:String,
        trim: true,
        required: true
    },
    lname:{
 
        type:String,
        trim: true,
        required: true
    },

    email: {
        type:String,
        unique: true,
        trim: true,
        required: true
    },
    mobile:{
 
        type:String,
        trim: true,
        unique:true,
        required: true,
        minlength:10,
        maxlenght:13
    },
    gender:{
 
        type:String,
        trim: true,
        required: true
    },
    status:{
 
        type:String,
        trim: true,
        required: true
    },
    profile:{
 
        type:String,
        trim: true,
        required: true
    },
    location:{
 
        type:String,
        trim: true,
        required: true
    },

}) 

const employees = new mongoose.model('employee', employeeSchema)

module.exports = employees