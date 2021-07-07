import React from "react";
// import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Route } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";

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
