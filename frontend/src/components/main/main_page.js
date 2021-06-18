import React from "react";
import MapContainer from "../map/map_container";
import "./main.css";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <div className='main-body'>
          <div className='map-container'>
            <MapContainer/>
          </div>
          <div className='thumbnails'>
            <SidebarContainer/>
          </div>
        </div>
        <footer className="footer">Copyright &copy; 2021 ViewFinder</footer>
      </div>
    );
  }
}

export default MainPage;
