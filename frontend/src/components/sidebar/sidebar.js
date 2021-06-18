import React, {useState} from 'react';
import classNames from 'classnames';
import "./sidebar.css";
import Carousel from '../carousel/carouse'

const Sidebar = ({focusView}) => {
  // const [splashIdx, setSplashIdx] = useState(0);
  return !focusView ? "" : (
    <>
      <section className="sidebar">
        <div className="picture-carousel">
          <Carousel photos={focusView.photos} />
          {/* {!focusView.photos ? "" : focusView.photos.map((photo,idx) => (
            <figure key={idx} className={classNames({"focused": idx === splashIdx})} onClick={() => setSplashIdx(idx)}><img src={photo.s3Link}/></figure>
          ))} */}
        </div>
        <h2>{focusView.locationName}</h2>
        <p>{focusView.description}</p>
      </section>
    </>
  );
}

export default Sidebar;