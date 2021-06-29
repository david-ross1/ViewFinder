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
const AWSS3RootPath = keys.awsRootPath;

function appendToFilename(filename, string) {
  const lastDot = filename.lastIndexOf(".");
  if (lastDot === -1) { return filename + string;}
  else {
    return filename.slice(0,lastDot) + string + filename.slice(lastDot);
  }
}

const s3bucket = new AWS.S3({
  accessKeyId: keys.awsAccessKeyId,
  secretAccessKey: keys.awsSecretAccessKey,
  region: keys.awsRegion,
});



const storage = multer.memoryStorage();
const upload = multer({storage: storage});

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
  View.findById(req.params.viewId).populate({path: 'photos', model: 'photo'}).then(view => res.json(view)).catch((err) => console.log(err))
});

//.populate('photo','s3Link').populate('comments')

router.post("/", 
  passport.authenticate("jwt", {session: false}),
  upload.array("photos",10),
  (req,res) => {
    Promise.all(req.files.map((photo) => {
        const uploadParams = {
          Bucket: keys.awsBucketName,
          Key: appendToFilename(photo.originalname,Math.floor(1000*Math.random())),
          Body: photo.buffer,
          ContentType: photo.mimetype,
          ACL: "public-read",
        };
        return s3bucket.upload(uploadParams)
        .promise()
        .then(() => new Photo({ s3Link: AWSS3RootPath+"/"+uploadParams.Key, user: req.user.id}).save())
        .catch(err => console.log(err));
      }))
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
    return newView.save().then(view => res.json(view));
    });
});

module.exports = router;