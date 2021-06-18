const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const Photo = require('../../models/Photo');
const View = require('../../models/View');
// const AWS = require('aws-sdk');

// const AWSBucket = new AWS.S3({
//   accessKeyId: keys.awsAccessKeyId,
//   secretAccessKey: keys.awsSecretAccessKey,
//   region: keys.awsRegion,
// });

router.post("/",
  passport.authenticate("jwt", {session: false}),
  (req, res) => {
    const newPhoto = new Photo({
      s3Link: req.body.s3Link,
      user: req.user.id,
    });
    newPhoto.save().then((photo) => {
      View.findOneAndUpdate(
        { _id: req.body.viewId },
        { $push: { photos: photo._id }},
        (err, success) => {
          if (err) {
            console.log(err);
          }
          else {
            return res.json(photo);
          }
        }
      );
    });
  }
)

module.exports = router;