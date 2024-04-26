const express=require("express");
const router=express.Router();

const{createInfluencer}=require("../controllers/createInfluencer");
const{getInfluencersById}=require("../controllers/getInfluencers");
const{createCompany}=require("../controllers/createCompany");
const{getCompanyById}=require("../controllers/getCompany");
// const{createProposal}=require("../models/proposal");
// const{getProposal}=require("../models/getProposal")


router.post("/createInfluencer",createInfluencer);
router.get("/getInfluencers/:id",getInfluencersById);
router.post("/createCompany",createCompany);
router.get("/getCompany/:id", getCompanyById);
// router.post("/createProposal", createProposal);
// router.get("/getallProposal", getProposal);


module.exports=router;