const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const View = require("../../models/View");
const Comment = require('../../models/Comment');

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
  View.findById(req.params.viewId).then(view => res.json(view)).catch((err) => console.log(err))
});

//.populate('photo','s3Link').populate('comments')

router.post("/", 
  passport.authenticate("jwt", {session: false}),
  (req,res) => {
    const photoIds = [];
    let newPhoto = null;
    req.body.photos.forEach((photo) => {
      newPhoto = new Photo({
        s3Link: photo.s3Link,
        user: req.user.id,
      });
      newPhoto.save().then(photo => photoIds.push(photo._id));
    }); 
    const newView = new View({
      longitude: req.body.longitude,
      latitude: req.body.latitude,
      locationName: req.body.locationName,
      photos: req.body.photos ? req.body.photos : [],
      comments: [],
    });
    newView.save().then(view => res.json(view));
});

module.exports = router;