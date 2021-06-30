import React, {useState} from 'react';
import classNames from 'classnames';
import "./sidebar.css";
import Carousel from '../carousel/carouse'
import Comments from '../comments/comments'
import { FaUserAlt } from 'react-icons/fa'

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
        <ul class="sidebar-comment-container">
          {
            focusView.comments.map((comment) => (<li>
                                                    <div class="sidebar-comment-user">
                                                      <FaUserAlt/> {comment.user.name}:
                                                    </div>
                                                    <div class="sidebar-comment-text">
                                                      {comment.text}
                                                    </div>
                                                    <br></br>

                                                  </li>))
          }
        </ul>
      
        
        
      </section>
    
  );
}

export default Sidebar;