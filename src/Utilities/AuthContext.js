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
        } else {
            if (history.location.pathname === '/map') {
                history.push('/login')
            }
        }
    }, [])

    function saveUserData(response) {
        setUser(response.data);
    }

    function saveToken(response) {
        // console.log(response)
        const apiToken = response.data.data ? response.data.data.token : response.data.access_token;
        setToken(apiToken);
        window.localStorage.setItem('token', apiToken)
        history.goBack();
        getUserData(apiToken);
    }

    function destroyToken() {
        setToken('')
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('huntProgress');
    }

    function getUserData(t) {
        AxiosHelper({
            url: '/api/user',
            successMethod: saveUserData,
            token: t
        })
        // console.log(user)
    }

    function errorAlert(error) {
        alert("Something went wrong, please check your email and password and try again")
    }

    function register(regData) {

        AxiosHelper({
            method: 'post',
            url: '/api/register',
            data: regData,
            successMethod: saveToken,
            failureMethod: errorAlert
        })
    }

    function login(loginData) {
        AxiosHelper({
            method: 'post',
            url: '/oauth/token',
            data: loginData,
            successMethod: saveToken,
            failureMethod: errorAlert
        })
    }

    function logout() {
        AxiosHelper({
            url: '/api/logout',
            successMethod: destroyToken,
            token
        })
        history.push('/login')
    }

    return { token, register, login, logout, user }
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