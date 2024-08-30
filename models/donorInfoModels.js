const mongoose = require('mongoose')
const { type } = require('os')
const donorSchema=new mongoose.Schema({
    donorName:{
        type:String,
        required:true
    },
    donorBloodGroup:{
        type:String,
        required:true
    },
    donorLocation:{
        type:String,
        required:true
    },
    donorPhoneNo:{
        type:Number,
        required:true
    },
    donorAge:{
        type:Number,
        min:18,
        max:60,
        required:true
    },
    donorEmail:{
        type:String,
        unique:true
    },
    donorAvailability:{
        type:String,
        required:true
    }

})
module.exports =mongoose.model("Donor_Data",donorSchema);