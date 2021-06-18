import React from "react";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import { Switch, Route } from "react-router-dom";
import NavBarContainer from "./nav/navbar_container";

import CommentsContainer from "./comments/comments_container";
import MainPage from "./main/main_page";
import ProfileContainer from "./profile/profile_container";
import CommentComposeContainer from "./comments/comment_compose_container";
import Footer from "./footer/footer"
import Modal from "./modal/modal"


import PhotoApp2 from './photoapp2'

const App = () => (
  <div>
    <Modal/>
    <NavBarContainer />
    <PhotoApp2 />
    <Switch>
      <Route exact path="/" component={MainPage} />
      <ProtectedRoute exact path="/comments" component={CommentsContainer} />
      <ProtectedRoute exact path="/profile" component={ProfileContainer} />
      <ProtectedRoute
        exact
        path="/new_comment"
        component={CommentComposeContainer}
      />
    </Switch>
    <Footer/>
  </div>
);

export default App;
