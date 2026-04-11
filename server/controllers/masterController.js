
// // exports.getForms = async(req,res)=>{

// // const data = await Form.find();

// // res.json(data);

// // };

// // exports.createForm = async(req,res)=>{

// // const form = new Form(req.body);

// // await form.save();

// // res.json(form);

// // };

// // exports.deleteForm = async(req,res)=>{

// // await Form.findByIdAndDelete(req.params.id);

// // res.json({message:"Deleted"});

// // };

// // exports.getApplications = async(req,res)=>{

// // const data = await Form.find();

// // res.json(data);

// // };
// // exports.createApplications = async(req,res)=>{

// // const application = new Application(req.body);

// // await application.save();

// // res.json(application);

// // };

// // exports.deleteApplications = async(req,res)=>{

// // await Application.findByIdAndDelete(req.params.id);

// // res.json({message:"Deleted"});

// // };

// const Form = require("../models/Form");
// const Application = require("../models/Application");
// const Packaging = require("../models/Packaging");
// const Parameter = require("../models/Parameter");
// const Category = require("../models/Category");
// const SubCategory = require("../models/SubCategory");

// const models = {
//   forms: Form,
//   applications: Application,
//   packaging: Packaging,
//   parameters: Parameter,
//   categories: Category,
//   subcategories: SubCategory
// };

// exports.getMasterData = async (req, res) => {
//   try {

//     const type = req.params.type;
//     const Model = models[type];

//     if (!Model) {
//       return res.status(400).json({ message: "Invalid master type" });
//     }

//     const data = await Model.find();

//     res.json(data);

//   } catch (error) {

//     res.status(500).json({ message: error.message });

//   }
// };
// exports.getMasterData = async (req, res) => {
//   try {

//     const type = req.params.type;
//     const Model = models[type];

//     if (!Model) {
//       return res.status(400).json({ message: "Invalid master type" });
//     }

//     const data = await Model.find();

//     res.json(data);

//   } catch (error) {

//     res.status(500).json({ message: error.message });

//   }
// };
// exports.createMasterData = async (req, res) => {

//   try {

//     const type = req.params.type;
//     const Model = models[type];

//     if (!Model) {
//       return res.status(400).json({ message: "Invalid master type" });
//     }

//     const newItem = new Model(req.body);

//     await newItem.save();

//     res.status(201).json(newItem);

//   } catch (error) {

//     res.status(500).json({ message: error.message });

//   }

// };

const Master = require("../models/Master.js")

const getMaster = async (req, res) => {

  try {

    const { type } = req.params

    const data = await Master.find({ type })

    res.json({
      success: true,
      data
    })

  } catch (error) {

    res.status(500).json({
      success:false,
      message:error.message
    })

  }

}

const createMaster = async (req, res) => {

  try {

    const { type } = req.params

    const item = await Master.create({
      name: req.body.name,
      type
    })

    res.json({
      success: true,
      data: item
    })

  } catch (error) {

    res.status(500).json({
      success:false,
      message:error.message
    })

  }

}

const deleteMaster = async (req, res) => {

  try {

    await Master.findByIdAndDelete(req.params.id)

    res.json({
      success: true
    })

  } catch (error) {

    res.status(500).json({
      success:false,
      message:error.message
    })

  }

}

module.exports = {
  getMaster,
  createMaster,
  deleteMaster
}