import React from 'react';
import "./sidebar.css";
import Carousel from '../carousel/carouse'
import PhotoAppContainer from "../photo_app_container";
import Comments from '../comments/comments'
import { FaUserAlt } from 'react-icons/fa'
import CommentComposeContainer from '../comments/comment_compose_container';




class Sidebar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      page: "show",
      buttonText: "Write a Comment"
      }

    this.handleWriteComment = this.handleWriteComment.bind(this);

  }

  handleWriteComment = (e) => {
    e.preventDefault();
    if (this.state.page === "show") {
      this.setState({ page: "write", buttonText: "Show Comments" });
    } else { this.setState({ page: "show", buttonText: "Write a Comment"})};
  };

  // const [splashIdx, setSplashIdx] = useState(0);
  render() {
    const { focusView } = this.props;
    if (Object.values(focusView).length === 0) { return "" }
    else if (this.state.page === "write") {
      return (
        <section className="sidebar">
          <div className="picture-carousel">
            <Carousel photos={focusView.photos} />
          </div>
          <h2 className="view-name">{focusView.locationName}</h2>
          <p className="view-desc">{focusView.description}</p>
          <div className="comment-button-container">
            <button className="write-comment-button" onClick={this.handleWriteComment}>{this.state.buttonText}</button>
          </div>
          <CommentComposeContainer/>
        </section>
      );
    } else if ((this.state.page === "show") && this.props.isAuthenticated) {
      return (
        <section className="sidebar">
          <div className="picture-carousel">
            <Carousel photos={focusView.photos} />
            {/* {!focusView.photos ? "" : focusView.photos.map((photo,idx) => (
              <figure key={idx} className={classNames({"focused": idx === splashIdx})} onClick={() => setSplashIdx(idx)}><img src={photo.s3Link}/></figure>
            ))} */}
          </div>
          <h2 className="view-name">{focusView.locationName}</h2>
          <p className="view-desc">{focusView.description}</p>
          <div className="comment-button-container">
            <button className="write-comment-button" onClick={this.handleWriteComment}>{this.state.buttonText}</button>
          </div>
          <ul className="sidebar-comment-container">
            {
              focusView.comments.map((comment) => (<li>
                                                      <div className="sidebar-comment-user">
                                                        <FaUserAlt/> {comment.user.name}:
                                                      </div>
                                                      <div className="sidebar-comment-text">
                                                        {comment.text}
                                                      </div>
                                                      <br></br>
                                                    </li>))
            }
          </ul>
        </section>
      );
    } else {
      return (
        <section className="sidebar">
          <div className="picture-carousel">
            <Carousel photos={focusView.photos} />
            {/* {!focusView.photos ? "" : focusView.photos.map((photo,idx) => (
              <figure key={idx} className={classNames({"focused": idx === splashIdx})} onClick={() => setSplashIdx(idx)}><img src={photo.s3Link}/></figure>
            ))} */}
          </div>
          <h2 className="view-name">{focusView.locationName}</h2>
          <p className="view-desc">{focusView.description}</p>
          <ul className="sidebar-comment-container">
            {
              focusView.comments.map((comment) => (<li>
                                                      <div className="sidebar-comment-user">
                                                        <FaUserAlt/> {comment.user.name}:
                                                      </div>
                                                      <div className="sidebar-comment-text">
                                                        {comment.text}
                                                      </div>
                                                      <br></br>
                                                    </li>))
            }
          </ul>
        </section>
      );
    }
  }
};

export default Sidebar;