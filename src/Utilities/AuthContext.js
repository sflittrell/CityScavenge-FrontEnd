import React, {createContext, useState, useEffect, useContext} from 'react';
import {AxiosHelper} from './AxiosHelper';
import { BrowserRouter as Router, useHistory} from 'react-router-dom';

const AuthContext = createContext({});

export const AuthHelper = () => {

    let history = useHistory();

    const [token, setToken] = useState('')

    useEffect(() => {
        let lsToken = window.localStorage.getItem('token');

        if (lsToken) {
            AxiosHelper({
                url: '/api/register',
                successMethod: saveUserData,
            })
            setToken(lsToken);
        }
    }, [])

    function saveUserData(response) {
        console.log("user data", response.data)
    }

    function saveToken(response) {
        const apiToken = response.data.data.token;
        setToken(apiToken);
        window.localStorage.setItem('token', apiToken)
        console.log(history)
    }

    function destroyToken() {
        setToken('')
        window.localStorage.removeItem('token');
    }

    function register(regData) {

        AxiosHelper({
            method: 'post', 
            url: '/api/register', 
            data: regData, 
            successMethod: saveToken
        })
        // history.replace('/')

    }

    function login(loginData) {
        AxiosHelper({
            method: 'post', 
            url: '/oauth/token', 
            data: loginData, 
            grant_type: "password", 
            client_id: "2",
            client_secret: "bG2EW3f3W57kB0AD1eKuVp8u9EddYcBKW2dgp2ZS",
            username: loginData.email,
            password: loginData.password,
            successMethod: saveToken
        })
    }

    function logout() {
        AxiosHelper({
            url: '/api/logout',
            successMethod: destroyToken,
            token
        })
    }

    return {token, register, login, logout}
}

export const AuthProvider = (props) => {

    const initialContext = AuthHelper();

    return (
    <AuthContext.Provider value={initialContext}>
    {props.children}
    </AuthContext.Provider>
)}

export const useAuth = () => useContext(AuthContext)

export default AuthContext;