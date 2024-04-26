const mongoose=require('mongoose');
const proposal_schema=new mongoose.Schema(
     {
        Product_Name:{
            type:String,
            required:true,
            maxLength:50,
        },
        companyName:{
            type:String,
            required:true,
        },
        domain:{
            type:Number,
            required:true,
            maxLength:50,
        },
        expextedReach:{
            type:Number,
            required:true,
            maxLength:30,
        },
        maxCost:{
            type:Number,
            required:true,
            maxLength:20
        },
        Description:{
            type:String,
            required:true,
            maxLength:30,
        },

 });
 module.exports=mongoose.model("proposal",proposal_schema)

