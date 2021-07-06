const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const Photo = require('../../models/Photo');
const View = require('../../models/View');
const AWS = require('aws-sdk');
const crypto = require('crypto');
const URLSafeBase64 = require('urlsafe-base64');
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({storage: storage});
const AWSS3RootPath = keys.awsRootPath;

function replaceFilename(filename, string) {
  const lastDot = filename.lastIndexOf(".");
  if (lastDot === -1) { return string; }
  else {
    return string + filename.slice(lastDot);
  }
}

const randomURLSafeBase64Key = () => {
  let key = null;
  crypto.randomBytes(32, (err, buf) => {
    if (err) {
      throw err;
    }
    else {
      key = URLSafeBase64.encode(buf);
    }
  });
  return key;
}

const s3bucket = new AWS.S3({
  accessKeyId: keys.awsAccessKeyId,
  secretAccessKey: keys.awsSecretAccessKey,
  region: keys.awsRegion,
});

function uploadParams(photo) {
  return {
    Bucket: keys.awsBucketName,
    Key: replaceFilename(photo.originalname,randomURLSafeBase64Key()),
    Body: photo.buffer,
    ContentType: photo.mimetype,
    ACL: "public-read",
  };
}

router.post("/",
  passport.authenticate("jwt", {session: false}),
  upload.single("photo"),
  (req, res) => {
    const params = uploadParams(req.file);
    s3bucket.upload(params).promise().then(() => {
      const newPhoto = new Photo({
        s3Link: AWSS3RootPath + "/" + params.Key,
        user: req.user.id,
      });
      return newPhoto.save().then((photo) => {
        View.findByIdAndUpdate(
          req.body.viewId,
          { $push: { photos: photo._id }},
          (err, success) => {
            if (err) {
              console.log(err);
              res.status(500);
              return res.json({noassociatedview: err});
            }
            else {
              res.status(300);
              return res.json({photo, viewId: req.body.viewId});
            }
          }
        );
      });
      }
    )
  }
)

router.delete("/:photoId",
  passport.authenticate("jwt", {session: false}),
  (req, res) => {
    photo = Photo.findOne({ _id: req.params.photoId })
    if(photo && req.user.id === photo._id) {
      View.findOneAndUpdate(
        { _id: req.body.viewId },
        { $pull: { photos: photo._id }},
        (err, success) => {
          if (err) {
            console.log(err);
            res.status(500);
          }
          else {
            return res.json({photo});
          }
        }
      )
      Photo.deleteOne({ _id: photo._id });
      res.status(300);
      return res.json({photo, viewId: req.body.viewId});
    }
    res.status(404);
    return res.json({photo: "ID not found", viewId: null});
  }
)

module.exports = router;