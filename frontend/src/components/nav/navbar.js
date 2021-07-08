import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { FaUserCircle, FaUserLock } from "react-icons/fa";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { navigate: false };
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  handleClick = () => {
    this.setState({ navigate: true });
  };

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    let { openModal } = this.props;
    if (this.props.loggedIn) {
      return (
        <div className="maincontain">
          <div className="NavBar">
            <div className="comment-links">
              <div className="t-link">
                <div className="logout-button">
                  <button className="logout" onClick={this.logoutUser}>
                    <div className="logout-lock">
                      <FaUserLock />
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="mainconatain">
          <div className="session-container">
            <div className="NavBar Links2">
              <div className="profile-container">
                <button
                  onClick={() => openModal("login")}
                  className="nav-button-login"
                >
                  <FaUserCircle />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="maincontain">
        <div className="logotainer">
          <div className="main-logo">
            <div className="loogo">
              <Link to="/" className="logo-link">
                ViewFinder
              </Link>
              {this.getLinks()}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;
