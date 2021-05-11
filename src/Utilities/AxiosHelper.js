// import React from 'react'
import axios from 'axios'

export function AxiosHelper(props) {
    const {
        method = 'get',
        url = '/',
        data = {},
        token = '',
        successMethod = response => console.log(response),
        failureMethod = error => console.log('error', error),
    } = props;

    const apiUrl = 'https://cityscavengebe-sflittrell527093.codeanyapp.com'

    return axios({
		method,
		url: apiUrl + url,
		headers: {
			'Content-Type': 'application/json;charset=UTF-8',
			'Access-Control-Allow-Origin': '*',
			'Accept': 'application/json',
			'Authorization': 'Bearer ' + token
		},
		data
	})
		.then(successMethod)
		.catch(failureMethod)
}
