const subjectModel = require("../models/subject");
exports.addSubject = async (req,res) => {
  try {
    const { department_name, subject_name } = req.body;
    await subjectModel.create({
      department_name,
      subject_name,
    });
    return res.status(200).json({ message: "Subject Added Successfully" });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

exports.getAllSubjects = async(req,res)=>{
  const findSubjects = await subjectModel.find()
  const subjectNames = findSubjects.map((subObj)=>(subObj.subject_name));
  return res.status(200).json({subjectNames});
}