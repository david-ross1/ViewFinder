import React, {useState, useRef} from 'react';
import './photo.css';

const PhotoApp = ({uploadPhoto, viewId, loggedIn}) => {
  const [errors, setErrors] = useState([]);
  const uploadRef = useRef(null);
  const processFile = (e) => {
    const _errors = [];
    if(e.target.files[0] === undefined) {
      return;
    }
    if(!e.target.files[0]) {_errors.push("No file given")}
    if(e.target.files[0].size/(1024**2) > 5) {_errors.push("File too large")}
    if(e.target.files[0].type.split("/")[0] !== "image") {_errors.push("Not an image")}
    if(_errors.length === 0) {
      uploadPhoto({photo: e.target.files[0], viewId});
    }
    else {
      alert(_errors.join(", "));
      setErrors(_errors);
    }
  };
  const handleSubmit = () => {
    uploadRef.current.click();
  };
  return !loggedIn ? "" : (
    <div className="photo-upload-wrapper">
      <div className="photo-upload-container">
        <div className="photo-upload">
          <h3 className="photo-text">Upload photo</h3>
        </div>
        <input type="file" onChange={processFile} accept="image" ref={uploadRef} style={{display: "none"}}/>
        <button onClick={handleSubmit}>Upload a new photo</button>
      </div>
    </div>
  );
}

export default PhotoApp; 