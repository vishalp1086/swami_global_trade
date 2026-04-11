const mongoose = require("mongoose");

const schema = new mongoose.Schema({

name:String,

category:{
type:mongoose.Schema.Types.ObjectId,
ref:"Category"
}

});

module.exports = mongoose.model("SubCategory",schema);