const crypto = require('crypto');
const keys = require("../config/keys");
const URLSafeBase64 = require('urlsafe-base64');

function replaceFilename(filename, string) {
  const lastDot = filename.lastIndexOf(".");
  if (lastDot === -1) { return string; }
  else {
    return string + filename.slice(lastDot);
  }
}

function randomURLSafeBase64Key() {
  return URLSafeBase64.encode(crypto.randomBytes(32));
}

function imageFileFilter(req,file,cb) {
  if(file.mimetype.split("/")[0] !== "image") {
    return cb(new Error("Invalid filetype"));
  }
  else {
    cb(null, true);
  }
}

function uploadParams(photo) {
  return {
    Bucket: keys.awsBucketName,
    Key: replaceFilename(photo.originalname,randomURLSafeBase64Key()),
    Body: photo.buffer,
    ContentType: photo.mimetype,
    ACL: "public-read",
  };
}

module.exports = {
  uploadParams,
  imageFileFilter
};