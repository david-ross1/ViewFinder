import React, {useState, useRef} from 'react';
import './NewLocationForm.css';

const NewLocationForm = ({fetchViews, longitude,latitude,createView,setDisplayLocationForm}) => {
  const [name, setName] = useState("");
  const imageInput = useRef(null);
  // const [description, setDescription] = useState("");
  const [photos, setPhotos] = useState([]);
  // const [previews, setPreviews] = useState([]);
  const handleSubmit = () => createView({longitude, latitude, locationName: name, photos});
  const upload = (e) => {
    e.stopPropagation();
    setPhotos(photos.concat([e.target.files[0]]));
    setPreviews(previews.concat(URL.createObjectURL(e.target.files[0])));
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
      {/* <label><h2>Description:</h2>
        <input value={description} onChange={(e) => setDescription(e.target.value)}/>
      </label> */}
      <br/>
      <label>Images:
        <button onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          imageInput.current.click();}}>Add Image</button>
        <input type="file" id="new-location-images" onChange={upload} style={{display: "none"}} ref={imageInput}/>
      </label>
      {/* {previews.length === 0 ? "" : (
        <nav className="thumbnail-display">
          {previews.map(preview => (
            <img src={preview} width={"100px"} height={"100px"}/>
          ))}
        </nav>
      )} */}
      <button className="create-view-button">Create View</button>
    </form>
  );
}

export default NewLocationForm;