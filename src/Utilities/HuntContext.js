import React, { createContext, useState, useEffect, useContext } from 'react';
import { AxiosHelper } from './AxiosHelper';
import { useAuth } from '../Utilities/AuthContext';
import history from './history';


const HuntContext = createContext({});

export const HuntHelper = () => {

    const { token } = useAuth();

    const [huntData, setHuntData] = useState('')
    const [huntsList, setHuntsList] = useState([])
    const [huntProgress, setHuntProgress] = useState(checkLS)

    function checkLS() {
        let lsHuntProgress = window.localStorage.getItem('huntProgress');
        if (lsHuntProgress) {
            return JSON.parse(lsHuntProgress)
        } else {
            return { hunt: 0, waypoint: 0, clue: 0, atWaypoint: false }
        }
    }

    function createHuntData(id) {
        if (token.length > 0 ) {
            let lsHuntProgress = window.localStorage.getItem('huntProgress');
            if (!lsHuntProgress || lsHuntProgress.hunt === 0) {
                console.log('create hunt')
                AxiosHelper({
                    method: 'post',
                    url: `/api/userhunt/create`,
                    token,
                    data: { hunt_id: parseInt(id) },
                    successMethod: saveHuntData
                })
                history.push('/map/')
            } else {
                history.push('/map/')
            }
            // console.log('This is the api call')
        } else {
            history.push('/login')
        }
    }

    useEffect(() => {
        let lsHuntProgress = window.localStorage.getItem('huntProgress');
        let lsToken = window.localStorage.getItem('token');
        // console.log('lsHuntProgress', lsHuntProgress)

        if (lsHuntProgress && lsToken) {
            let newlsHuntProgress = JSON.parse(lsHuntProgress)
            AxiosHelper({
                url: `/api/userhunt/show/${newlsHuntProgress.hunt}`,
                token: lsToken,
                successMethod: saveHuntData,
            })
        }
    }, [])

    // function updateHuntData(response) {
    //     console.log('updateHuntData', response.data)
    //     setHuntData(response.data);
    // }

    function saveHuntData(response) {
        setHuntData(response.data);
        // console.log('hunt response', response)
        // updateHuntProgress()
        setHuntProgress(prev => {
            let newHuntProgress = { ...prev }
            newHuntProgress.hunt = response.data.id
            window.localStorage.setItem('huntProgress', JSON.stringify(newHuntProgress))
            return newHuntProgress
        })
        // console.log('saveHuntData')
        // history.push('/map')
    }

    function winHunt() {
        let today = new Date();
        let dateTime = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()+' '+today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        AxiosHelper({
            method: 'post',
            data: dateTime,
            url: `/api/userhunt/update/${huntProgress.hunt}`,
            token,
            successMethod: win
    })
}

function win() {
    window.localStorage.removeItem('huntProgress');
    history.push('/win/')
    setHuntProgress(prev => {
        let newHuntProgress = { ...prev }
        newHuntProgress.waypoint = 0;
        newHuntProgress.atWaypoint = false;
        return newHuntProgress
    })
}

    useEffect(() => {
        AxiosHelper({
            url: '/api/hunts',
            successMethod: saveHunts,
        })
    }, [])

    function saveHunts(response) {
        // console.log("huntsList data", response.data)
        setHuntsList(response.data)
    }
    function findDistance(lat1, lon1, lat2, lon2) {
        const R = 6371e3; // metres
        const φ1 = lat1 * Math.PI / 180; // φ, λ in radians
        const φ2 = lat2 * Math.PI / 180;
        const Δφ = (lat2 - lat1) * Math.PI / 180;
        const Δλ = (lon2 - lon1) * Math.PI / 180;

        const a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
            Math.cos(φ1) * Math.cos(φ2) *
            Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

        const d = R * c * 3.281; // in feet
        return d
    }

    return { huntsList, createHuntData, huntData, findDistance, huntProgress, setHuntProgress, winHunt }
}

export const HuntProvider = (props) => {

    const initialContext = HuntHelper();

    return (
        <HuntContext.Provider value={initialContext}>
            {props.children}
        </HuntContext.Provider>
    )
}

export const useHunt = () => useContext(HuntContext)

export default HuntContext;