const express=require('express');

const RecipitentRouter=express.Router();

const {addRecipitentInfo}=require('../Controller.js/recipitentController');

RecipitentRouter.post("/addRecipitentInfo",addRecipitentInfo);

module.exports=RecipitentRouter;