import React, {useEffect, useRef, useState} from 'react';
import 'mapbox-gl/dist/mapbox-gl.css';
import mapboxgl from 'mapbox-gl';
import ReactMapGL, {Marker, NavigationControl} from 'react-map-gl';
import classNames from 'classnames';
import NewLocationFormContainer from './new_location_form_container';

const mapboxApiAccessToken = require("../../config1/keys_dev1").mapboxAPI;

const MAX_ZOOM = 16;
const MIN_ZOOM = 7;
const [locLng,locLat] = [-122.250,37.807];
// const maxBounds = [
//   [-123.956,38.999],

//   [-120.679,36.474]
// ];

const Pin = () => (
  <svg xmlns="http://www.w3.org/2000/svg"
    width="24" height="24" viewBox="0 0 24 24">
    <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z"/>
  </svg>
);

const Map = ({geoJSON,focusId,fetchViews,fetchView}) => {
  const [newPinLocation, setNewPinLocation] = useState(null);
  const [displayLocationForm,setDisplayLocationForm] = useState(false);
  const _onClick = (e) => {
    setNewPinLocation({
      longitude: e.lngLat[0],
      latitude: e.lngLat[1],
    });
    setDisplayLocationForm(true);
  };
  const [viewport, setViewport] = useState({
    latitude: locLat,
    longitude: locLng,
    zoom: 8,
  });
  const [readyToPlace, setReadyToPlace] = useState(false);
  useEffect(() => {
    fetchViews()
  },[fetchViews]);
    return (
  <div className="map">
    <ReactMapGL
      mapStyle={"mapbox://styles/kerapace/ckpwz1oel3dqt17mvkiquuo75"}
      mapboxApiAccessToken={mapboxApiAccessToken}
      {...viewport}
      width={"100%"}
      height={"100%"}
      onViewportChange={viewport => setViewport(viewport)}
      onClick = {(e) => readyToPlace ? _onClick(e) : ""}
    >
      {!geoJSON.features ? "" : geoJSON.features.map(feature => (
        <Marker key={feature.geometry.properties.id}
          longitude={feature.geometry.coordinates[0]}
          latitude={feature.geometry.coordinates[1]} 
          className={classNames("view-location",{"selected": feature.geometry.properties.id === focusId})}
          onClick={(e) => {
            fetchView(feature.geometry.properties.id);
            e.stopPropagation();
          }}
        >
          <Pin/>
        </Marker>
      ))}
      {newPinLocation === null ? "" : (
        <Marker key={"new"} className={"view-location new selected"}
          {...newPinLocation}
        >
          <Pin/>
        </Marker>
      )}
      <NavigationControl />
    </ReactMapGL>
    <button className={"new-location-button"} onClick={() => {
        setNewPinLocation(null);
        setReadyToPlace(!readyToPlace); 
      }}>Place New Location</button>
    {!displayLocationForm ? "" : (<NewLocationFormContainer fetchViews={fetchViews} fetchView={fetchView} setDisplayLocationForm={setDisplayLocationForm} {...newPinLocation} />)}
  </div>
  );
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

  // useEffect(() => {
  //   if(map.current) {return;}
  //   map.current = new mapboxgl.Map({
  //     container: mapContainer.current,
  //     style: "mapbox://styles/kerapace/ckpwz1oel3dqt17mvkiquuo75",
  //     center: [lng,lat],
  //     zoom: zoom,
  //   });
  //   const navControl = new mapboxgl.NavigationControl();
  //   map.current.addControl(navControl, "bottom-left");
  //   // map.current.setMaxBounds(maxBounds);
  // });

  // useEffect(() => {
  //   if(!map.current) {return;}
  //   map.current.on('move', () => {
  //     setLng(map.current.getCenter().lng.toFixed(4));
  //     setLat(map.current.getCenter().lat.toFixed(4));
  //     setZoom(map.current.getZoom().toFixed(2));
  //   });
  // });
}

export default Map;