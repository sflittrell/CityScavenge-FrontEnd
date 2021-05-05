import React, { useState, useEffect } from 'react'
import { AxiosHelper } from '../Utilities/AxiosHelper'
import Hunt from './Hunt.js'

export default function HuntsPage() {

    const [hunts, setHunts] = useState({})

    useEffect(() => {
        AxiosHelper({
            url: '/api/hunts',
            successMethod: saveHunts,
        })
    }, [])

    function saveHunts(response) {
        console.log("hunts data", response.data)
        setHunts(response.data)
    }

    return (
        <div className="t-5">
        {console.log(hunts)}
        {hunts.length > 0 ? 
            hunts.map((hunt) => {
                <Hunt
                    hunt={hunt}
                />
            }
            )
            : 
            'Loading'}
            
        </div>
    )
}
