import React, { useEffect, useState, useCallback } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { googleKey } from './constraints.js';
import Footer from './Footer.js';
import { useHunt } from '../Utilities/HuntContext';

export default function MapPage() {

  const { huntData, findDistance } = useHunt();

  const progress = {
    waypoint: 0,
    clue: 0
}

  const [currentPosition, setCurrentPosition] = useState({})

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        // console.log("Latitude is :", position.coords.latitude);
        // console.log("Longitude is :", position.coords.longitude);
        const geoPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        setCurrentPosition(previousState => geoPosition);
      },
        function (error) {
          console.log(`Error Code = ${error.code} - ${error.message}`)
        });
    }
  })

  const containerStyle = {
    width: '700px',
    height: '700px'
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: googleKey
  })

  const [map, setMap] = useState(null)

  const onLoad = useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (

    <div className="container-fluid center-text mt-5">
    {/* {console.log(findDistance(currentPosition.lat, currentPosition.lng, huntData.hunts.waypoints[0].lat, huntData.hunts.waypoints[0].lng))} */}
      {/* {huntData ? <div className="alert alert-success alert-dismissible fade show mt-5" role="alert">
        <h4 className="alert-heading">Well done!</h4>
        <p>{huntData.hunts.waypoints[0].clues[0].clueText}</p>
        <hr />
        <button type="button" className="btn btn-primary" data-bs-dismiss="alert" aria-label="Close">Click to Close</button>

      </div>
      : 'Loading'} */}
      <div className="row mt-5">
        <div className="col">
          {isLoaded && Object.keys(currentPosition).length > 0 ? 
          <>
          {console.log(findDistance(currentPosition.lat, currentPosition.lng, huntData.hunts.waypoints[0].lat, huntData.hunts.waypoints[0].lng))}
          <div className="alert alert-success alert-dismissible fade show" role="alert">
        <h4 className="alert-heading">Clue...</h4>
        <p>{huntData.hunts.waypoints[0].clues[0].clueText}</p>
      </div>
      
            <GoogleMap
              mapContainerStyle={containerStyle}
              center={currentPosition}
              zoom={18}
            // onLoad={onLoad}
            // onUnmount={onUnmount}
            >
              {currentPosition.lat ?
                <Marker position={currentPosition} /> :
                null
              }
            </GoogleMap>
            </>
            : <div className="d-flex align-items-center m-5">
              <strong>Loading...</strong>
              <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
            </div>}
          <Footer />
        </div>
      </div>
    </div>
  )
}