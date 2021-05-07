import React, { useEffect, useState, useCallback } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { googleKey } from './constraints.js';
import Footer from './Footer.js';



export default function MapPage() {

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
    <div className="container-fluid center-text">
      <div className="row mt-5">
        <div className="col">
          {isLoaded && Object.keys(currentPosition).length > 0 ?
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