const company=require('../models/company');

exports.getCompanyById= async(req,res)=>{
    try{
        const id=req.params.id;
        const company=await company.findById({_id:id});
        if(!company){
            return  res.status(404).json({
                sucess:false,
                message: 'No company found',
            })
        }
        res.status(200).json({
            sucess:true,
            data:company,
            message:`company ${id} is retrived`,
        })

    }
    catch(error) {
        console.log("error", error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
    }
}
