import React, {useEffect, useRef, useState} from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
const keys = require("../../config1/keys");
mapboxgl.accessToken = keys.mapboxAPI;

const MAX_ZOOM = 16;
const MIN_ZOOM = 7;
const [locLng,locLat] = [-122.250,37.807];
// const maxBounds = [
//   [-123.956,38.999],
//   [-120.679,36.474]
// ];

const Map = () => {
  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(locLng);
  const [lat, setLat] = useState(locLat);
  const [zoom, setZoom] = useState(8);
  // const zoomIn = () => {
  //   if(!map.current || zoom >= MAX_ZOOM) {return;}
  //   map.current.easeTo({
  //     zoom: zoom+1,
  //   });
  //   setZoom(zoom+1);
  // };
  // const zoomOut = () => {
  //   if(!map.current || zoom <= MIN_ZOOM) {return;}
  //   map.current.easeTo({
  //     zoom: zoom-1,
  //   });
  //   setZoom(zoom-1);
  // }

  useEffect(() => {
    if(map.current) {return;}
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: "mapbox://styles/kerapace/ckpwz1oel3dqt17mvkiquuo75",
      center: [lng,lat],
      zoom: zoom,
    });
    const navControl = new mapboxgl.NavigationControl();
    map.current.addControl(navControl, "bottom-left");
    // map.current.setMaxBounds(maxBounds);
  });

  useEffect(() => {
    if(!map.current) {return;}
    map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    });
  });
  return (
    <div className="App">
      <div ref={mapContainer} className="map-container">
        {/* <div className="button-container">
          <button onClick={zoomIn}>+</button>
          <button onClick={zoomOut}>-</button>
        </div> */}
      </div>
    </div>
  );
}

export default Map;