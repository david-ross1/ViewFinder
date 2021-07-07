import React from "react";
import { Route } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";
// import CommentsContainer from "./comments/comments_container";
import MainPage from "./main/main_page";
import Footer from "./footer/footer"
import Modal from "./modal/modal"

const App = () => (
  <div>
    <Modal/>
    <NavBarContainer />
    {/* <PhotoApp2 /> */}
      <Route exact path="/" component={MainPage} />
    <Footer/>
  </div>
);

export default App;
