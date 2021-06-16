import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import {FaUserCircle} from "react-icons/fa"

class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.logoutUser = this.logoutUser.bind(this);
    this.getLinks = this.getLinks.bind(this);
  }

  logoutUser(e) {
    e.preventDefault();
    this.props.logout();
  }

  getLinks() {
    let {openModal} = this.props
    if (this.props.loggedIn) {
      return (
        <div className="NavBar">
          <div className="comment-links">
            <div className="t-link">
              <Link className="link" to={"/comments"}>
                All Comments
              </Link>
              <Link className="link" to={"/profile"}>
                Profile
              </Link>
              <Link className="link" to={"/new_comment"}>
                Write a Comment
              </Link>
              <div className="logout-button">
                <button className="logout" onClick={this.logoutUser}>
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <div className="session-container">
          <div className="NavBar Links2">
            
            <button onClick={() => openModal('login')} className='nav-button-login'><FaUserCircle/></button>
            
          </div>
        </div>
      );
    }
  }

  render() {
    return (
      <div className="logotainer">
        <div className="main-logo">
          <div className="loogo">
            <h1>ViewFinder</h1>
            {this.getLinks()}
          </div>
        </div>
      </div>
    );
  }
}

export default NavBar;







// import React from "react";
// import { Link } from "react-router-dom";
// import "./navbar.css";

// class NavBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.logoutUser = this.logoutUser.bind(this);
//     this.getLinks = this.getLinks.bind(this);
//   }

//   logoutUser(e) {
//     e.preventDefault();
//     this.props.logout();
//   }

//   getLinks() {
//     if (this.props.loggedIn) {
//       return (
//         <div className="NavBar">
//           <div className="comment-links">
//             <div className="t-link">
//               <Link className="link" to={"/comments"}>
//                 All Comments
//               </Link>
//               <Link className="link" to={"/profile"}>
//                 Profile
//               </Link>
//               <Link className="link" to={"/new_comment"}>
//                 Write a Comment
//               </Link>
//               <div className="logout-button">
//                 <button className="logout" onClick={this.logoutUser}>
//                   Logout
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     } else {
//       return (
//         <div className="session-container">
//           <div className="NavBar Links2">
//             <button className="session-button">
//               {" "}
//               <Link className="link" to={"/signup"}>
//                 Signup
//               </Link>{" "}
//             </button>
//             <button className="session-button">
//               <Link className="link" to={"/login"}>
//                 Login
//               </Link>
//             </button>
//           </div>
//         </div>
//       );
//     }
//   }

//   render() {
//     return (
//       <div className="logotainer">
//         <div className="main-logo">
//           <h1>ViewFinder</h1>
//           {this.getLinks()}
//         </div>
//       </div>
//     );
//   }
// }

// export default NavBar;
