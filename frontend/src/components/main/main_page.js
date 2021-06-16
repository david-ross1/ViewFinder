import React from "react";
import Map from "../map/map";
import "./main.css";

class MainPage extends React.Component {
  render() {
    return (
      <div>
        <MapContainer/>
        <footer className="footer">Copyright &copy; 2021 ViewFinder</footer>
      </div>
    );
  }
}

export default MainPage;
