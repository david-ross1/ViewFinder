const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Photo = require("./Photo");
const Comment = require("./Comment");

const ViewSchema = new Schema({
  locationName: {
    type: String,
  },
  photos: [{ type: Schema.Types.ObjectId, ref: "photo" }],
  latitude: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
  },
  longitude: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  comments: [{ type: Schema.Types.ObjectId, ref: "comment" }],
});

module.exports = View = mongoose.model("view", ViewSchema);
