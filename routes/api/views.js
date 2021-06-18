const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const View = require("../../models/View");
const Comment = require('../../models/Comment');
const Photo = require("../../models/Photo");

const toGeoJSON = (viewData) => ({
  "type": "FeatureCollection",
  "features": 
    viewData.map(view => ({
      "type": "Feature",
      "geometry": {
        "type": "Point",
        "properties": {
          "name" : view.locationName ? view.locationName : undefined,
          "id": view.id,
        },
        "coordinates": [
          view.longitude,
          view.latitude,
        ],
      }
    }))
});

router.get("/" , (req,res) => {
  View.find().then(views => res.json(toGeoJSON(views)))
});

router.get("/:viewId", (req, res) => {
  View.findById(req.params.viewId).populate('photos').then(view => res.json(view)).catch((err) => console.log(err))
});

//.populate('photo','s3Link').populate('comments')

router.post("/", 
  passport.authenticate("jwt", {session: false}),
  // I apologize for writing this
  (req,res) => {
    Promise.all(req.body.photos.map((photo) => 
      new Photo({ s3Link: photo.s3Link, user: req.user.id})
      .save()))
      .then(values => values.map(v => v._id))
      .then(photoIds => {
        const newView = new View({
          longitude: req.body.longitude,
          latitude: req.body.latitude,
          locationName: req.body.locationName,
          name: req.body.name,
          description: req.body.description,
          photos: photoIds,
          comments: [],
        });
    return newView.save().then(view => res.json(view));
    });
});

module.exports = router;