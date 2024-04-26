const Company= require("../models/company");
const Tag = require("../models/tags");

//createCourse handler function
exports.createCompany = async(req, res) => {
    try {

        //fetch data 
        const {Company_Name,GSTIN,Email_id,domain,tag} = req.body;

        //validation
        if(!Company_Name || !GSTIN || !Email_id || !domain || !tag || !address ) {
            return res.status(400).json({
                success:false,
                message:'All fields are required',
            });
        }
        //check given tag is valid or not
        const tagDetails = await Tag.findById(tag);
        if(!tagDetails) {
            return res.status(404).json({
                success:false,
                message:'Tag Details not found',
            });
        }

        const newCompany = await company.create({
            Company_Name,
            GSTIN,
            Email_id,
            domain,
            tag:tagDetails._id,
            address,
        })
        return res.status(200).json({
            success:true,
            message:"Course Created Successfully",
            data:newCourse,
        });


    } 
    
    catch (error) {
        console.log("error", error);
        return res.status(500).json({
          status: 500,
          message: error.message,
        });

    }
}