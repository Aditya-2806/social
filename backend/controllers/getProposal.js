const proposal=require('../models/proposal');

exports.getProposal= async(req,res)=>{
    try{
        const id=req.params.id;
        const proposal=await proposal.find({ });
        if(!proposal){
            return  res.status(404).json({
                sucess:false,
                message: 'No proposal found',
            })
        }
        res.status(200).json({
            sucess:true,
            data:proposal,
            message:`proposal retrived`,
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