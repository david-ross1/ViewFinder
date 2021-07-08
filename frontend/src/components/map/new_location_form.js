import React, {useState, useRef} from 'react';
import './NewLocationForm.css';

const NewLocationForm = ({fetchViews, longitude,latitude,createView,setDisplayLocationForm}) => {
  const [name, setName] = useState("");
  const imageInput = useRef(null);
  const [photos, setPhotos] = useState([]);
  const handleSubmit = () => createView({longitude, latitude, locationName: name, photos});
  const upload = (e) => {
    e.stopPropagation();
    const _errors = [];
    if(e.target.files[0] === undefined) {
      return;
    }
    if(!e.target.files[0]) {_errors.push("No file given")}
    if(e.target.files[0].size/(1024**2) > 5) {_errors.push("File too large")}
    if(e.target.files[0].type.split("/")[0] !== "image") {_errors.push("Not an image")}
    if(_errors.length === 0) {
      setPhotos(photos.concat([e.target.files[0]]));
    }
    else {
      alert(_errors.join(", "));
    }
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
      <br/>
      <label>Images:
        <button onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          imageInput.current.click();}}>Add Image</button>
        <input type="file" id="new-location-images" onChange={upload} style={{display: "none"}} ref={imageInput}/>
      </label>
      <button className="create-view-button">Create View</button>
    </form>
  );
}

export default NewLocationForm;