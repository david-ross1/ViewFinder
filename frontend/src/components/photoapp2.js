import React , { Component } from 'react'; 
// import S3FileUpload from 'react-s3'
import S3 from "react-aws-s3";
import { awsAccessKeyId, awsSecretAccessKey } from "../config1/keys";

import './photo.css'

const config = {
  bucketName: "view-finder",
  //dirName: "media" /* optional */,
  region: "us-west-1",
  accessKeyId: awsAccessKeyId,
  secretAccessKey: awsSecretAccessKey,
  //s3Url: "https:/your-custom-s3-url.com/" /* optional */,
};

const ReactS3Client = new S3(config);
class Photoapp2 extends Component {
  constructor() {
    super(); 
    this.upload = this.upload.bind(this)
  }

  upload(e) {
    console.log(e.target.files[0]);
    debugger;
    ReactS3Client.uploadFile( e.target.files[0] , e.target.files.name)
      .then( (data) => {
        console.log(data)
      })
      .catch( (err)=>{
        alert(err)
      })
  }

  render() {
    return (
      <div className="photo-upload-wrapper">
        <div className="photo-upload-container">
          <div className="photo-upload">
            <h3 className="photo-text">Upload photo</h3>
          </div>
          <input type="file" onChange={this.upload} />
        </div>
      </div>
    );
  }
}

export default Photoapp2; 
