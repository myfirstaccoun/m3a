const mongoose = require("mongoose");
const Schema = mongoose.Schema;
 
// define the Schema (the structure of the article)
const theSchema = new Schema({
  title: String,
  summary: String,
  body: String,
});
 
 
// Create a model based on that schema
const Works = mongoose.model("Article", theSchema);
 
 
// export the model
module.exports = Works;