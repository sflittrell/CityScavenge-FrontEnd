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
            data: {hunt_id: parseInt(id)},
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

    return { huntsList, getHuntData, huntData }
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