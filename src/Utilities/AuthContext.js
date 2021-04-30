import React, {createContext, useState, useEffect, useContext} from 'react';
import {AxiosHelper} from './AxiosHelper';

const AuthContext = createContext({});

export const AuthHelper = () => {

    const [token, setToken] = useState('')

    useEffect(() => {
        let lsToken = window.localStorage.getItem('token');

        if (lsToken) {
            AxiosHelper({
                url: '/api/register',
            })
            setToken(lsToken);
        }
    }, [])

    function saveToken(response) {
        const apiToken = response.data.data.token;
        setToken(apiToken);
        window.localStorage.setItem('token', apiToken)
    }

    function register(regData) {

        AxiosHelper({
            method: 'post', 
            url: '/api/register', 
            data: regData, 
            successMethod: saveToken})

    }

    return {token, register}
}

export const AuthProvider = (props) => {

    const initialContext = {};

    return (
    <AuthContext.Provider value={initialContext}>
    {props.children}
    </AuthContext.Provider>
)}

export const useAuth = () => useContext(AuthContext)

export default AuthContext;