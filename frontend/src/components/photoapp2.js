import React, { useState } from 'react';
import './photo.css'

const

const PhotoApp = ({uploadPhoto, viewId, loggedIn}) => {
  const [file, setFile] = useState(null);
  const [errors, setErrors] = useState([]);
  const upload = (e) => {
    setErrors([]);
    if(!e.target.files[0]) {setErrors(errors.concat(["No image found"]));}
    if(e.target.files[0].size/(1024**2) > 5) {setErrors(errors.concat(["Image too large"]));}
    if(!e.target.files[0].type.includes("image")) {setErrors(errors.concat(["File not an image"]))}
    if(errors.length === 0) {setFile(e.target.files[0]);}
  };
  const handleSubmit = () => {
    if (file === null) {return;} 
    uploadPhoto({photo: file, viewId});
  }
  return !loggedIn ? "" : (
    <div className="photo-upload-wrapper">
      <div className="photo-upload-container">
        <div className="photo-upload">
          <h3 className="photo-text">Upload photo</h3>
        </div>
        <input type="file" onChange={upload} accept="image"/>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default PhotoApp; 