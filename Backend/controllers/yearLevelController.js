const yearLevelModel = require("../models/yearlevel")
exports.getClasses=async(req,res)=>{
    const allClasses = await yearLevelModel.find()
    return res.status(200).json({allClasses})
}