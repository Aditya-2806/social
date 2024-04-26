const proposal= require("../models/proposal");

exports.createProposal = async (req, res) => {
  try {
    console.log("req body", req.body);

    const {productName,companyName,domain,expectedReach,maxCost,Description } = req.body;


    if (!productName|| !companyName || !domain|| !expectedReach|| !maxCost || !Description ) {
      console.log("not all fields...");
      return res.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    }
    const proposal = await proposal.create({
        productName,
        companyName,
        domain,
        expectedReach,
        maxCost,
        Description
    });
    return res.status(200).json({
      status: 201,
      message: "proposal created successfully",
      data: user,
    });
  } catch (error) {
    console.log("error", error);
    return res.status(500).json({
      status: 500,
      message: error.message,
    });
  }
};
