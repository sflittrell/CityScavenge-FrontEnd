import React, { useEffect, useState, useCallback } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


export default function MapPage() {

  const [currentPosition, setCurrentPosition] = useState({})

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
        const currentPosition = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        setCurrentPosition(currentPosition);
      },
        function (error) {
          console.log(`Error Code = ${error.code} - ${error.message}`)
        });
    }
  })

  const containerStyle = {
    width: '400px',
    height: '400px'
  };

  const center = {
    lat: 38.046391, //currentPosition.coords.latitude, //38.0422243,
    lng: -84.497034 //currentPosition.coords.longitude //-84.49182119999999
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDX21MVlTXj0Ib3AKHakTH18mOThLNv9HM"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds();
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return (
    <div>
      {isLoaded && currentPosition !== {} ?
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={18}
        // onLoad={onLoad}
        // onUnmount={onUnmount}
        >
          {currentPosition.lat ?
            <Marker position={currentPosition} /> :
            null
          }
        </GoogleMap>
        : 'Loading'}
    </div>
  )
}