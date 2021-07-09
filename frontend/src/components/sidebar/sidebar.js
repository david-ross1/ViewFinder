import React from "react";
import "./sidebar.css";
import Carousel from "../carousel/carouse";
import CommentComposeContainer from "../comments/comment_compose_container";
import CommentsShowContainer from "../comments/comments_show_container";
import PhotoAppContainer from "../photo_app_container";

import { FaCar } from "react-icons/fa";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPage: true,
      buttonText: "Write a Comment",
      showDeleteIcon: false,
      deleteButtonText: "Delete Comment",
    };

    this.handleWriteComment = this.handleWriteComment.bind(this);
    this.handleDeleteIcon = this.handleDeleteIcon.bind(this);
  }
  componentDidMount() {
    const initialViewId = "60ccfe961fca6f6304f7710a";
    this.props.fetchView(initialViewId);
  }

  handleWriteComment = e => {
    e.preventDefault();
    if (this.state.showPage === true) {
      this.setState({
        showPage: false,
        buttonText: "Show Comments",
        showDeleteIcon: false,
        deleteButtonText: "Delete Comment",
      });
    } else {
      this.setState({
        showPage: true,
        buttonText: "Write a Comment",
        showDeleteIcon: false,
        deleteButtonText: "Delete Comment",
      });
    }
  };

  handleDeleteIcon = e => {
    e.preventDefault();
    if (this.state.showDeleteIcon === false) {
      this.setState({
        showPage: true,
        buttonText: "Write a Comment",
        showDeleteIcon: true,
        deleteButtonText: "Cancel Delete",
      });
    } else {
      this.setState({
        showPage: true,
        buttonText: "Write a Comment",
        showDeleteIcon: false,
        deleteButtonText: "Delete Comment",
      });
    }
  };

  render() {
    const { focusView, isAuthenticated, comments, currentUser } = this.props;
    const currentUserEmail = currentUser ? currentUser.email : undefined;
    const userCommentExist = !!comments
      ? comments.some(element => element.user.email === currentUserEmail)
      : false;
    if (Object.values(focusView).length === 0) return "";
    return (
      <section className="sidebar">
        <div className="csarousel-tet">
          <div className="picture-carousel">
            <Carousel photos={focusView.photos} />
            <div className="photoapp-upload"></div>
            <div className="directions-action">
              <a
                target="_blank"
                href={`https://www.google.com/maps/dir/Current+Location/${focusView.latitude},${focusView.longitude}`}
              >
                <div className="car-icon">
                  <FaCar />
                </div>
              </a>
            </div>
            ;<h2 className="view-name">{focusView.locationName}</h2>
            <h2 className="view-name">{focusView.locationName}</h2>
            <p className="view-desc">{focusView.description}</p>
          </div>
        </div>
        <div className="sidebar-comment-section">
          <div className="comment-button-outer-container">
            <div className="comment-button-container">
              {isAuthenticated && (
                <button
                  className="write-comment-button"
                  onClick={this.handleWriteComment}
                >
                  {this.state.buttonText}
                </button>
              )}
              {isAuthenticated &&
                (userCommentExist || currentUserEmail === "admin@admin.com") &&
                !!comments.length && (
                  <button
                    className="show-delete-button"
                    onClick={this.handleDeleteIcon}
                  >
                    {this.state.deleteButtonText}
                  </button>
                )}

              {isAuthenticated ? <PhotoAppContainer /> : ""}
            </div>
          </div>
          {isAuthenticated && !this.state.showPage && (
            <CommentComposeContainer trigerFunction={this.handleWriteComment} />
          )}
          {this.state.showPage && (
            <CommentsShowContainer showDeleteIcon={this.state.showDeleteIcon} />
          )}
        </div>
      </section>
    );
  }
}

export default Sidebar;
