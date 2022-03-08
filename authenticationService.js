import React from 'react';
import axios from 'axios';

const USER_REST_API_URL="http://localhost:8080"
const getToken=()=>{
    return localStorage.getItem('USER_KEY');
}

export const userLogin=(authRequest)=>{
    return axios({
        'method':'POST',
        'url':`${process.env.hostUrl||'http://localhost:8080'}/auth/login`,
        'data':authRequest
    })
}


