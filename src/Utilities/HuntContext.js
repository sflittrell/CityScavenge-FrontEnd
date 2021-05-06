import React, { createContext, useState, useEffect, useContext } from 'react';
import { AxiosHelper } from './AxiosHelper';

const HuntContext = createContext({});

export const HuntHelper = () => {

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