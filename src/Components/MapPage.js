import React, { useEffect, useState, useCallback } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';


export default function MapPage() {

  const [currentPosition, setCurrentPosition] = useState({})

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(function (position) {
        console.log("Latitude is :", position.coords.latitude);
        console.log("Longitude is :", position.coords.longitude);
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
    width: '400px',
    height: '400px'
  };


  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyDX21MVlTXj0Ib3AKHakTH18mOThLNv9HM"
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
    <div>
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
        : 'Loading'}
    </div>
  )
}