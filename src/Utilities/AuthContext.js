import React, { createContext, useState, useEffect, useContext } from 'react';
import { AxiosHelper } from './AxiosHelper';
import history from './history';

const AuthContext = createContext({});

export const AuthHelper = () => {

    // let history = useHistory();

    const [token, setToken] = useState('')
    const [user, setUser] = useState('')

    useEffect(() => {
        let lsToken = window.localStorage.getItem('token');

        if (lsToken) {
            AxiosHelper({
                url: '/api/user',
                successMethod: saveUserData,
                failureMethod: destroyToken,
                token: lsToken
            })
            setToken(lsToken);
        }
    }, [])
    
    function saveUserData(response) {
        setUser(response.data);
        console.log(user)

    }
    
    function saveToken(response) {
        // console.log(response)
        const apiToken = response.data.data ? response.data.data.token : response.data.access_token;
        setToken(apiToken);
        window.localStorage.setItem('token', apiToken)
        history.replace('/');
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
    }
    
    function login(loginData) {
        AxiosHelper({
            method: 'post',
            url: '/oauth/token',
            data: loginData,
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
    
    const [hunts, setHunts] = useState([])
    
        useEffect(() => {
            AxiosHelper({
                url: '/api/hunts',
                successMethod: saveHunts,
            })
        }, [])
    
    function saveHunts(response) {
        // console.log("hunts data", response.data)
        setHunts(response.data)
    }
    
    return { token, register, login, logout, hunts }
}

export const AuthProvider = (props) => {
    
    const initialContext = AuthHelper();
    
    return (
        <AuthContext.Provider value={initialContext}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => useContext(AuthContext)

export default AuthContext;