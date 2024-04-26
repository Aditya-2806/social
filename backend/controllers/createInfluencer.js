const influencer= require("../models/influencer");

exports.createInfluencer = async (req, res) => {
  try {
    console.log("req body", req.body);

    const { Name,Instagram_id,Email_id,Followers,Highest_views,Domain } = req.body;


    if (!Name|| !Instagram_id || !Email_id || !Followers || !Highest_views || !Domain || !Phone_no) {
      console.log("not all fields...");
      return res.status(400).json({
        status: 400,
        message: "Please fill all fields",
      });
    }
    const influencer = await influencer.create({
        Name,
        Instagram_id,
        Email_id,
        Followers,
        Highest_views,
        Domain,
        Phone_no 
    });
    return res.status(200).json({
      status: 201,
      message: "User created successfully",
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
