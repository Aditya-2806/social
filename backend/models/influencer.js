const mongoose=require('mongoose');
const influencer_schema=new mongoose.Schema(
     {
        Name:{
            type:String,
            required:true,
            maxLength:50,
        },
        Instagram_id:{
            type:String,
            required:true,
            maxLength:50,
        },
        Email_id:{
            type:String,
            required:true,
            maxLength:30,
        },
        Phone_no:{
            type:Number,
            required:true,
            maxLength:10,
        },
        Followers:{
            type:Number,
            required:true,
            maxLength:10,
        },
        Highest_views:{
            type:Number,
            required:true,
            maxLength:20,

        },
        Domain:{
            type:String,
            required:true,
            maxLength:20,
        },
        DemandPerPromotion:{
            type:Number,
            required:true,
        },
        additionalDetails: {
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"Profile",
        },
        accountNo:{
            type:Number,
            required:true,
            maxLength:20,

        },
        // Current_Partnership: [
        //     {
        //         type:mongoose.Schema.Types.ObjectId,
        //         ref:"Company",
        //     }
        // ],
              
        progress:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Progress",
            }
        ]   
 });
 module.exports = mongoose.model("influencer",influencer_schema)

