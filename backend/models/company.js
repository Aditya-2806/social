const mongoose=require('mongoose');
const company_schema=new mongoose.Schema(
     {
        Company_Name:{
            type:String,
            required:true,
            maxLength:50,
        },
        GSTIN:{
            type:Number,
            required:true,
            maxLength:50,
        },
        Email_id:{
            type:String,
            required:true,
            maxLength:30,
        },
        domain:{
            type:String,
            required:true,
            maxLength:20
        },
        tag: {
            type: mongoose.Schema.Types.ObjectId,
            ref:"Tag",
        },
        address:{
            type:String,
            required:true,
            maxLength:30,
        },
        // Promotional_products: [
        //     {
        //         type:mongoose.Schema.Types.ObjectId,
        //         ref:"proposal",
        //     }
        // ]
 });
 module.exports=mongoose.model("company",company_schema)

