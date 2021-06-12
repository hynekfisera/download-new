const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  path: {
    type: String,
    required: true,
    default: "",
  },
  category: {
    type: String,
    required: true,
    default: "other",
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

module.exports = Item = mongoose.model("item", ItemSchema);
