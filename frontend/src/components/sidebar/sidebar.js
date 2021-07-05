import React from 'react';
import "./sidebar.css";
import Carousel from '../carousel/carouse'

import CommentComposeContainer from '../comments/comment_compose_container';
import CommentsShowContainer from '../comments/comments_show_container';




class Sidebar extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      showPage: true,
      buttonText: "Write a Comment",
      }

    this.handleWriteComment = this.handleWriteComment.bind(this);
    this.handleWrite = this.handleWrite.bind(this);
  }

  
  handleWrite = (e) => {
    e.preventDefault();
	this.handleWriteComment(e);
  }
  
  handleWriteComment = (e) => {
    e.preventDefault();
    if (this.state.showPage === true) {
      this.setState({ showPage: false, buttonText: "Show Comments" });
    } else { this.setState({ showPage: true, buttonText: "Write a Comment"})};
	this.forceUpdate();
  };

  // const [splashIdx, setSplashIdx] = useState(0);
  render() {
    const { focusView } = this.props;
	const { isAuthenticated } = this.props;
    if (Object.values(focusView).length === 0) return "";
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
          	  {isAuthenticated && <button className="write-comment-button" onClick={this.handleWriteComment}>{this.state.buttonText}</button>}
          	</div>
          	{(isAuthenticated && !this.state.showPage) && <CommentComposeContainer trigerFunction={this.handleWrite}/>}
			      {this.state.showPage && <CommentsShowContainer/>}
        </section>
      );
    }
};

export default Sidebar;