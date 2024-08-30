const mongoose=require('mongoose')
const recipientSchema=new mongoose.Schema({
    recipientName:{
        type:String,
        required:true
    },
    recipientBloodGroup:{
        type:String,
        required:true
    },
    recipientLocation:{
        type:String,
        required:true
    },
    recipientPhoneNo:{
        type:String,
        required:true
    },

    recipientHospital:{
        type:String,
        required:true
    }
})
module.exports=mongoose.model("Recipient",recipientSchema)