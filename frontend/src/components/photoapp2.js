import React, { useState } from 'react';
import './photo.css'

const PhotoApp = ({uploadPhoto, viewId, loggedIn}) => {
  const [file, setFile] = useState(null);
  const upload = (e) => {
    setFile(e.target.files[0]);
  };
  const handleSubmit = () => {
    uploadPhoto({photo: file, viewId});
  }
  return !loggedIn ? "" : (
    <div className="photo-upload-wrapper">
      <div className="photo-upload-container">
        <div className="photo-upload">
          <h3 className="photo-text">Upload photo</h3>
        </div>
        <input type="file" onChange={upload} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default PhotoApp; 