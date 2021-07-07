const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const View = require("../../models/View");
const Comment = require('../../models/Comment');
const Photo = require("../../models/Photo");
const multer = require("multer");
const AWS = require("aws-sdk");
const keys = require("../../config/keys");
const {uploadParams, imageFileFilter} = require("../../util/photo_helper");
const AWSS3RootPath = keys.awsRootPath;
const storage = multer.memoryStorage();
const upload = multer({
  storage: storage,
  fileFilter: imageFileFilter,
  limits: {
    fileSize: 5*1024*1024,
  },
});


const s3bucket = new AWS.S3({
  accessKeyId: keys.awsAccessKeyId,
  secretAccessKey: keys.awsSecretAccessKey,
  region: keys.awsRegion,
});

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

router.get("/", (req,res) => {
  View.find().then(views => res.json(toGeoJSON(views)))
});

router.get("/:viewId", (req, res) => {
  View.findById(req.params.viewId)
      .populate({path: 'photos', model: 'photo'})
      .populate({path: 'comments', populate: {path: 'user'}})
      .then(view => res.json(view))
      .catch((err) => console.log(err))
});

router.post("/", 
  passport.authenticate("jwt", {session: false}),
  upload.array("photos",10),
  (req,res) => {
    Promise.all(req.files.map((photo) => {
        const params = uploadParams(photo);
        return s3bucket.upload(params)
        .promise()
        .then(() => new Photo({ s3Link: AWSS3RootPath+"/"+params.Key, user: req.user.id}).save())
      }))
      .catch(err => {
        res.status(422);
        return res.json({errors: err});
      })
      .then(values => values.map(v => v._id))
      .then(photoIds => {
        const newView = new View({
          longitude: req.body.longitude,
          latitude: req.body.latitude,
          locationName: req.body.locationName,
          description: req.body.description,
          photos: photoIds,
          comments: [],
        });
    return newView.save()
      .then(view => view.populate({path: 'photos', model: 'photo'}).execPopulate())
      .then(view => res.json(view))
      .catch(err => {
        res.status(422);
        return res.json({errors: err});
      });
    });
});

module.exports = router;