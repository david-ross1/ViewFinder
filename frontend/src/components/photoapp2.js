import React, {useState, useRef} from 'react';
import './photo.css';

const PhotoApp = ({uploadPhoto, viewId, loggedIn}) => {
  // const [errors, setErrors] = useState([]);
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
      // setErrors(_errors);
    }
  };
  const handleSubmit = () => {
    uploadRef.current.click();
  };
  return !loggedIn ? "" : (
    <>
      <input type="file" onChange={processFile} accept="image" ref={uploadRef} style={{display: "none"}}/>
      <button className='upload-photo' onClick={handleSubmit}>Upload Photo</button>
    </>
  );
}

export default PhotoApp; 