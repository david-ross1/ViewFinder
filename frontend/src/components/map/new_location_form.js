import React, {useState} from 'react';
import S3 from "react-aws-s3";
import { awsAccessKeyId, awsSecretAccessKey } from "../../config1/keys";
import './NewLocationForm.css';

const NewLocationForm = ({fetchViews, longitude,latitude,createView,setDisplayLocationForm}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState([]);
  const handleSubmit = () => createView({longitude, latitude, locationName: name, description, photos});
  const upload = (e) => {
    e.stopPropagation();
    setPhotos(photos.concat([e.target.files[0]]));
  };

  return (
    <form className="new-location-form" onSubmit={e => {
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
      <br/>
      <label>Images:
        <input type="file" onChange={upload}/>
      </label>
      <button>Create View</button>
    </form>
  );
}

export default NewLocationForm;