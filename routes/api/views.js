const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const View = require("../../models/View");

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
  View.findById(req.params.viewId).populate('photo','s3Link').populate('comments').then(view => res.json(view))
});

router.post("/", 
  passport.authenticate("jwt", {session: false}),
  (req,res) => { 
    const newView = {
      longitude: req.body.longitude,
      latitude: req.body.latitude,
      locationName: req.body.locationName,
      photos: req.body.photo ? [req.body.photo] : [],
      comments: [],
    }
    newView.save().then(view => res.json(view));
});