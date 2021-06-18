import React, {useState, useEffect} from 'react';
import classNames from 'classnames';
import "./sidebar.css";

const Sidebar = ({focusView,focusId,fetchView}) => {
  const [splashIdx, setSplashIdx] = useState(0);

  return !focusView ? "" : (
    <>
      <section className="sidebar">
        <div className="picture-carousel">
          {!focusView.photos ? "" : focusView.photos.map((photo,idx) => (
            <figure className={classNames({"focused": idx === splashIdx})} onClick={setSplashIdx(idx)}><img src={photo.s3Link}/></figure>
          ))}
        </div>
        <h2>{focusView.name}</h2>
        <p>{focusView.description}</p>
      </section>
    </>
  );
}

export default Sidebar;