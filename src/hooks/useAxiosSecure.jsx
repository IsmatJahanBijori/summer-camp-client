import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const useAxiosSecure = () => {

    const { logOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const axiosSecure = axios.create({
        baseURL: 'https://summer-camp-server-alpha.vercel.app'
    })
    useEffect(() => {
        axiosSecure.interceptors.request.use((config) => {
            const token = localStorage.getItem('access-token')
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            return config;
        });



        axiosSecure.interceptors.response.use((res) => res, async (error) => {
            if (error.res && (error.res.status === 401 || error.res.status === 403)) {
                await logOut();
                navigate('/login')
            }
            return Promise.reject(error)
        })
    }, [logOut, navigate, axiosSecure])
    
    return [axiosSecure]
};

export default useAxiosSecure;