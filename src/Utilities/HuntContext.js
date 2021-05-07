import React, { createContext, useState, useEffect, useContext } from 'react';
import { AxiosHelper } from './AxiosHelper';
import { useAuth } from '../Utilities/AuthContext';


const HuntContext = createContext({});

export const HuntHelper = () => {

    const { token, user } = useAuth();

    const [huntData, setHuntData] = useState('')

    function getHuntData(id) {
        console.log(user.id, id);
        AxiosHelper({
            method: 'post',
            url: `/api/hunt/create`,
            token,
            data: { hunt_id: parseInt(id) },
            successMethod: saveHuntData
        })
        console.log('This is the api call')
    }

    function saveHuntData(response) {
        setHuntData(response.data)
        window.localStorage.setItem('huntData', huntData)
        console.log(response.data)

    }

    const [huntsList, setHuntsList] = useState([])

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

        const d = R * c; // in metres
    }

    return { huntsList, getHuntData, huntData, findDistance }
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