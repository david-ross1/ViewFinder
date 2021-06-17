import React from "react";
import MapContainer from "../map/map_container";
import "./main.css";

class MainPage extends React.Component {
  render() {
    return (
      <div className='mappy'>
        <MapContainer/>
        <footer className="footer">Copyright &copy; 2021 ViewFinder</footer>
      </div>
    );
  }
}

export default MainPage;
