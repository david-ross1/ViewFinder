const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ViewSchema = new Schema({
  locationName: {
    type: String,
  },
  photos: [
    {type: Schema.Types.ObjectId, ref: 'Photo'}
  ],
  latitude: {
    type: Number,
    required: true,
  },
  address: {
    type: String
  },
  longitude: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
  },
  comments: [
    {type: Schema.Types.ObjectId, ref: 'Comment'}
  ]
});

module.exports = View = mongoose.model("view",ViewSchema);