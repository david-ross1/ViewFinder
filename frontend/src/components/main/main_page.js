import React from "react";
import MapContainer from "../map/map_container";
import "./main.css";
import SidebarContainer from "../sidebar/sidebar_container";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <div className='main-body'>
          {process.env.NODE_ENV}
          <div className='map-container'>
            <MapContainer/>
          </div>
          <div className='side-section'>
            <SidebarContainer/>

            {/* <div className='comments'></div> */}
                   
          </div>
        </div>
        <footer className="body-footer">Copyright &copy; 2021 ViewFinder</footer>
      </div>
    );
  }
}

export default MainPage;
