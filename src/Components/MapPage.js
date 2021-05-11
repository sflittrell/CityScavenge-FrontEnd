import React, { useEffect, useState, /*useCallback*/ } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { googleKey } from './constraints.js';
import Footer from './Footer.js';
import { useHunt } from '../Utilities/HuntContext';

export default function MapPage() {

  // let atWaypoint = false;

  const { huntData, findDistance, huntProgress, setHuntProgress } = useHunt();

  const [currentPosition, setCurrentPosition] = useState({})

  const [formInput, setFormInput] = useState('');

  // console.log(huntProgress)
  // console.log(huntData)

  useEffect(() => {
    if (navigator.geolocation) {
      const intervalID = setInterval(function () {
        var options = {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0
        };

        function success(position) {
          const geoPosition = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          setCurrentPosition(previousState => geoPosition);
          console.log("Latitude is :", position.coords.latitude);
          console.log("Longitude is :", position.coords.longitude);
        }

        function error(err) {
          console.warn(`ERROR(${err.code}): ${err.message}`);
        }

        // possibly use watchPosition instead of setInterval with getCurrentPosition
        navigator.geolocation.getCurrentPosition(success, error, options);
      }, 15000)

      if (huntData && huntProgress.hunt > 0 && currentPosition) {
        console.log('huntData', huntData, 'huntProgress', huntProgress)
        let currentLat = currentPosition.lat
        let currentLng = currentPosition.lng
        let waypointLat = huntData.hunts.waypoints[huntProgress.waypoint].lat
        let waypointLng = huntData.hunts.waypoints[huntProgress.clue].lng
        let dist = findDistance(currentLat, currentLng, waypointLat, waypointLng)
        let wayDist = huntData.hunts.waypoints[huntProgress.waypoint].distance;
        // let clueDist = huntData.hunts.waypoints[huntProgress.clue].clues[huntProgress.clue].distance;
        if (dist < wayDist && !huntProgress.atWaypoint) {
          setHuntProgress({ ...huntProgress, atWaypoint: true })
        }
        // console.log('at waypoint', huntProgress.atWaypoint)
      }
      return function cleanup() {
        clearInterval(intervalID)
      }
    }
  })

  const handleChange = (e) => {
    setFormInput(previousState => (
      e.target.value
    ))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('answer', huntData.hunts.waypoints[huntProgress.waypoint].answer);
    if (formInput === huntData.hunts.waypoints[huntProgress.waypoint].answer) {
      // setHuntProgress({ ...huntProgress, waypoint: huntProgress.waypoint + 1, })
      setHuntProgress(prev => {
        let newHuntProgress = { ...prev }
        newHuntProgress.waypoint = newHuntProgress.waypoint + 1;
        newHuntProgress.atWaypoint = false;
        window.localStorage.setItem('huntProgress', JSON.stringify(newHuntProgress))
        return newHuntProgress
      })

      console.log('success', huntProgress)
    } else {
      console.log('fail');
    }
  }

  const containerStyle = {
    width: '400px',
    height: '400px'
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: googleKey
  })

  // const [map, setMap] = useState(null)

  // const onLoad = useCallback(function callback(map) {
  //   const bounds = new window.google.maps.LatLngBounds();
  //   map.fitBounds(bounds);
  //   setMap(map)
  // }, [])

  // const onUnmount = useCallback(function callback(map) {
  //   setMap(null)
  // }, [])

  // console.log(typeof huntProgress)

  return (

    <div className="container-fluid center-text mt-5">
      <div className="row mt-5">
        <div className="col">
          {isLoaded && Object.keys(currentPosition).length > 0 && Object.keys(huntData).length > 0 ?
            <>
              {/* {console.log('distance from current location to waypoint', currentPosition.lat, currentPosition.lng, Number(huntData.hunts.waypoints[0].lat), Number(huntData.hunts.waypoints[0].lng), findDistance(currentPosition.lat, currentPosition.lng, huntData.hunts.waypoints[0].lat, huntData.hunts.waypoints[0].lng))} */}
              <div className="alert alert-success alert-dismissible fade show" role="alert">
                <h4 className="alert-heading">Clue...</h4>
                <p>{findDistance(currentPosition.lat, currentPosition.lng, huntData.hunts.waypoints[huntProgress.waypoint].lat, huntData.hunts.waypoints[huntProgress.clue].lng)}</p>
                <p>{huntProgress.atWaypoint ? 'true' : 'false'}</p>
                <p>{!huntProgress.atWaypoint ?
                  huntData.hunts.waypoints[huntProgress.waypoint].clues[huntProgress.clue].clueText
                  :
                  huntData.hunts.waypoints[huntProgress.waypoint].question}</p>
                {huntProgress.atWaypoint &&
                  <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                      <label htmlFor="question" className="form-label">Answer Here</label>
                      <input type="question" className="form-control" id="question" value={formInput || ''} onChange={handleChange} aria-describedby="question" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                  </form>
                }
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
              <strong>Creating your hunt, please stand by...</strong>
              <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
            </div>}
          <Footer />
        </div>
      </div>
    </div>
  )
}