import React, {useState} from 'react';
import classNames from 'classnames';
import "./sidebar.css";
import Carousel from '../carousel/carouse'
import Comments from '../comments/comments'

const Sidebar = ({focusView}) => {
  // const [splashIdx, setSplashIdx] = useState(0);
  return Object.values(focusView).length === 0 ? "" : (
    
      <section className="sidebar">
        <div className="picture-carousel">
          <Carousel photos={focusView.photos} />
          {/* {!focusView.photos ? "" : focusView.photos.map((photo,idx) => (
            <figure key={idx} className={classNames({"focused": idx === splashIdx})} onClick={() => setSplashIdx(idx)}><img src={photo.s3Link}/></figure>
          ))} */}
        </div>
        <h2 className="view-name">{focusView.locationName}</h2>
        <p className="view-desc">{focusView.description}</p>
        <p>{focusView.comments}</p>
      </section>
    
  );
}

export default Sidebar;