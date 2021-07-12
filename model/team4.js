const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Team4Schema = new Schema({
  name: String,
  phone: Number,
  type: String,
  member1: String,
  member2: String,
  member3: String,
  member4: String,
});
module.exports = mongoose.model("Team4", Team4Schema);
