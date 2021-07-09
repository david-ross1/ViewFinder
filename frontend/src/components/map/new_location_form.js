import React, {useState, useRef} from 'react';
import './NewLocationForm.css';

const NewLocationForm = ({fetchViews, longitude,latitude,createView,setDisplayLocationForm}) => {
  const [name, setName] = useState("");
  const imageInput = useRef(null);
  const [photos, setPhotos] = useState([]);
  const [previews, setPreviews] = useState([]);
  const handleSubmit = () => {
    previews.forEach((url) => URL.revokeObjectURL(url));
    return createView({longitude, latitude, locationName: name, photos});
  };
  const deleteImage = (idx) => {
    const preview = previews[idx];
    setPhotos(photos.slice(0,idx).concat(photos.slice(idx+1)));
    setPreviews(previews.slice(0,idx).concat(previews.slice(idx+1)));
    URL.revokeObjectURL(preview);
  };
  const uploadImage = (e) => {
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
      setPreviews(previews.concat(URL.createObjectURL(e.target.files[0])));
    }
    else {
      e.target.value = "";
      alert(_errors.join(", "));
    }
  };

  return (
    <form className="new-location-form" onSubmit={e => {
      e.preventDefault();
      handleSubmit().then(fetchViews);
      setDisplayLocationForm(false);
    }}>
      <label className='loc-title-text'>Name your location
        <input className='loc-input' value={name} onChange={(e) => setName(e.target.value)}/>
      </label>
      <br/>
      <label>
        <button className='image-modal-text-button' onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          imageInput.current.click();}}>Add Images</button>
        <input type="file" id="new-location-images" onChange={uploadImage} style={{display: "none"}} ref={imageInput}/>
      </label>
      {previews.length === 0 ? "" : (
        <nav className="thumbnail-display">
          {previews.map((preview,idx) => (
            <img src={preview} onClick={() => deleteImage(idx)} width={"100px"} height={"100px"}/>
          ))}
        </nav>
      )}
      <button className="image-modal-text-button">Create View</button>
    </form>
  );
}

export default NewLocationForm;