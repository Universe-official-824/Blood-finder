const express=require('express');

const donorInfoRouter=express.Router();

const {addDonorInfo,searchBlood,changeAvailability} = require("../Controller.js/donarInfoController")

donorInfoRouter.post("/personalData",addDonorInfo);

donorInfoRouter.get("/findBlood",searchBlood);

donorInfoRouter.patch("/updateAvailability/:id",changeAvailability);

module.exports=donorInfoRouter;