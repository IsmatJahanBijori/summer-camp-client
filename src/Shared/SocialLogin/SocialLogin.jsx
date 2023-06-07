import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { useLocation } from 'react-router-dom';

const SocialLogin = () => {
    const { googleUser } = useContext(AuthContext)
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";
    const handleGoogleLogin = () => {
        googleUser().then(result => {
            console.log(result.user)
            navigate(from, { replace: true });
        })
            .catch(error => console.log(error.message))
    }
    return (
        <div>
            <button onClick={handleGoogleLogin} className='btn btn-primary'><FaGoogle style={{ "color": "red" }} /></button>
        </div>
    );
};

export default SocialLogin;