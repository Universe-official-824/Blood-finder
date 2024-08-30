const recipientSchema=require('../models/recipitentModels');

const addRecipitentInfo=async (req, res) => {
    try{
        const { recipientName, recipientBloodGroup, recipientLocation, recipientPhoneNo, recipientHospital } = req.body;

        if (!recipientName || !recipientBloodGroup || !recipientLocation || !recipientPhoneNo || !recipientHospital) {
            return res.status(400).json({ message: "All fields are required." });
        }

        const recipient = await recipientSchema.create({
            recipientName,
            recipientBloodGroup,
            recipientLocation,
            recipientPhoneNo,
            recipientHospital
        });

        res.status(201).json(recipient);
    }
    catch(err){
        console.error("Error creating recipient:", err);
        res.status(500).json({ message: "An error occurred while creating the recipient.", error: err.message });
    }   
}

module.exports={addRecipitentInfo}


