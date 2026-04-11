const mongoose = require( "mongoose")

const masterSchema = new mongoose.Schema({

name:String,

type:String

})

module.exports = mongoose.model("Master",masterSchema)
