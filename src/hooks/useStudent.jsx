import React, { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
// TODO code kaj na korle bad dibo
const useStudent = () => {
    const {user}=useContext(AuthContext);
    const [axiosSecure]=useAxiosSecure();
    const {data: isStudent, isLoading: isStudentLoading}=useQuery({
        queryKey: ['isStudent', user?.email],
        queryFn: async()=>{
            const res=await axiosSecure.get(`/users/student/${user?.email}`)
            console.log('is student response', res)
            return res.data.student;
        }
    })
    return [isStudent, isStudentLoading]
};

export default useStudent;