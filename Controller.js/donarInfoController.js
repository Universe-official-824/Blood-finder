const donorInfoModels=require("../models/donorInfoModels");

const addDonorInfo=async(req,res)=>{
    try{
        const{donorName,donorEmail,donorPhoneNo,donorAge,donorBloodGroup,donorLocation,donorAvailability}=req.body;
        if(
                !donorName||
                !donorEmail||
                !donorPhoneNo||
                !donorAge||
                !donorBloodGroup||
                !donorLocation||
                !donorAvailability
            ){
                return res.status(400).json("All credentials required");
            }
        if(donorAge<18 || donorAge>60 ){
            return res.status(400).json("Your Age is not Eligible");
        }
        const donorData={
             donorName:donorName,
             donorEmail:donorEmail,
             donorPhoneNo:donorPhoneNo,
             donorAge:donorAge,
             donorBloodGroup:donorBloodGroup,
             donorAvailability:donorAvailability,
             donorLocation:donorLocation
        }
        const result=await donorInfoModels.create(donorData);
        if(result){
            res.status(200).json("response noted successfully")
        }
        else{
            res.status(500).json("Internal server error try Again");
        }
    }
    catch(err){
        console.log(err);
        if (err.code === 11000) { // Duplicate key error code
            res.status(409).json("Email already exists");
        }
        else{
            res.status(404).json({message:error});
        }
    }
}

const searchBlood= async(req,res)=>{
    try{
        const bloodGroup = req.query.bloodGroup.trim();
        console.log(req.query)
        if(!bloodGroup){
            return res.status(400).json({message:"blood group is not received"})
        }
        const findBlood=await donorInfoModels.find({donorBloodGroup:bloodGroup,donorAvailability:true})
        res.status(201).json(findBlood)
    }
    catch(err){
        console.error("error on finding your blood group",err);
        res.status(500).json({message:"an error occured while finding blood Group",error:err.message});
    }
}

const changeAvailability=async(req,res)=>{
    try{
        const {id}=req.params;
        const {donorAvailability}=req.body;
        if (donorAvailability===undefined){
            return res.status(400).json({message:"donor availability is not received"});
        }
        const updatedDonor=await donorInfoModels.findByIdAndUpdate(id,{donorAvailability},{ new: true, runValidators: true })
        if(!updatedDonor){
            return res.status(404).json({message:"Donor not found"})
        }
        console.log("Updating donor with ID:", id);
        console.log("New availability status:", donorAvailability);
        return res.status(200).json({message:"Donor Availability status updated successfully"})
    }
    catch(err){
        console.error("Error in updating Donor Availability Status",err);
        res.status(500).json({message:"error in updating donor anvilability status",error:err.message})
    }
}

module.exports={addDonorInfo,searchBlood,changeAvailability}