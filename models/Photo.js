const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PhotoSchema = new Schema({
  s3Link: {
    type: String,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  }
});

module.exports = Photo = mongoose.model('photo', PhotoSchema);