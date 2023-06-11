import React, { createContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';
import axios from 'axios';
export const AuthContext = createContext(null)
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()


    // create user
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login user
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google User
    const googleUser = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // logout
    const logOut = () => {
        return signOut(auth)
    }

    // update user
const updateUserProfile=(name, photo)=>{
    // setLoading(true)
    return updateProfile(auth.currentUser, {
        displayName: name, photoURL: photo
      })
}
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            if(currentUser){
                axios.post('https://summer-camp-server-alpha.vercel.app/jwt', {email: currentUser.email})
                .then(data=>{
                    console.log(data.data.token)
                    localStorage.setItem('access-token', data.data.token)
                    // console.log(data.data)
                })
            }
            else{
                localStorage.removeItem('access-token')
            }
            setLoading(false)
        })

        return () => {
            return unsubscribe()
        }
    }, [])


    const authInfo = { user, loading, createUser, loginUser, googleUser, setUser, setLoading, logOut, updateUserProfile }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;