import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEyeSlash, FaEye } from "react-icons/fa";
const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePassword = () => {
        setPasswordVisible(!passwordVisible);
    };

    const onSubmit = (data) => {
        console.log(data.email, data.password)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-full ml-5 mr-5 md:w-1/4 md:mx-auto mt-20 mb-10'>

            {/*Email */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Email</span>
                </label>
                <input
                    type="email"
                    name="email"
                    placeholder="email"
                    className="input input-bordered bg-slate-200"
                    {...register("email")}
                />
            </div>

            {/*password */}
            <div className="form-control flex">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input placeholder='Give your Password' className="input input-bordered bg-slate-200"
                type={passwordVisible ? 'text' : 'password'} 
                    {...register("password",)}
                />
                <div className='btn mt-5 w-1/3' onClick={togglePassword}>{passwordVisible?<FaEyeSlash className='w-10'/>:<FaEye className='w-10'/>}</div>
            </div>
            <input type="submit" className='btn btn-primary mt-5 w-2/3' value="Submit" />
        </form>
    );

};

export default Login;
{/**<button type="button" className='btn mt-5' onClick={togglePassword}>
                    {passwordVisible?<FaEyeSlash className='w-10'/>:<FaEye className='w-10'/>}
                </button> */}