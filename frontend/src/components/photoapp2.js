import React, { useState } from 'react';

import './photo.css'

const PhotoApp = () => {
  const [file, setFile] = useState(null);
  const upload = (e) => {
    setFile(e.target.files[0]);
    
  };
  return (
    <div className="photo-upload-wrapper">
      <div className="photo-upload-container">
        <div className="photo-upload">
          <h3 className="photo-text">Upload photo</h3>
        </div>
        <input type="file" onChange={upload} />
      </div>
    </div>
  );
}

export default Photoapp2; 
