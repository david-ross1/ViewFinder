import React, {useState} from 'react';
import S3 from "react-aws-s3";
import { awsAccessKeyId, awsSecretAccessKey } from "../../config1/keys";

const config = {
  bucketName: "view-finder",
  //dirName: "media" /* optional */,
  region: "us-west-1",
  accessKeyId: awsAccessKeyId,
  secretAccessKey: awsSecretAccessKey,
  //s3Url: "https:/your-custom-s3-url.com/" /* optional */,
};

const ReactS3Client = new S3(config);

const NewLocationForm = ({fetchViews, longitude,latitude,createView,setDisplayLocationForm}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const photos = [];
  const handleSubmit = () => createView({longitude, latitude, locationName: name, description, photos});
  const upload = (e) => {
    ReactS3Client.uploadFile( e.target.files[0] , `${longitude.toFixed(4)},${latitude.toFixed(4)}-${photos.length}`)
      .then( (data) => {
        photos.push({s3Link: data.location});
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <form onSubmit={e => {
      e.preventDefault();
      handleSubmit().then(fetchViews);
      setDisplayLocationForm(false);
    }}>
      <label><h2>Name:</h2>
        <input value={name} onChange={(e) => setName(e.target.value)}/>
      </label>
      <label><h2>Description:</h2>
        <input value={description} onChange={(e) => setDescription(e.target.value)}/>
      </label>
      <label>Images:
        <input type="file" onChange={upload}/>
      </label>
      <button>Create View</button>
    </form>
  );
}

export default NewLocationForm;