import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Signup = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePassword = () => {
        setPasswordVisible(!passwordVisible);
    };

    const onSubmit = (data) => {
        console.log(data.name, data.email, data.password, data.photo)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='w-full ml-5 mr-5 md:w-1/4 md:mx-auto mt-20 mb-10'>

            {/*Name */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Name</span>
                </label>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                    className="input input-bordered bg-slate-200"
                    {...register("name", {  maxLength: 20 })}
                />
            </div>

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


            {/*photo url */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">PhotoUrl</span>
                </label>
                <input
                    type="url"
                    name="photo"
                    placeholder="photo"
                    className="input input-bordered bg-slate-200"
                    {...register("photo")}
                />
            </div>

            {/*password */}
            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input placeholder='Give your Password' className="input input-bordered bg-slate-200"
                    type={passwordVisible ? 'text' : 'password'}
                    {...register("password", {
                        required: true,
                        minLength: 6,
                        pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                    })}
                />
                {errors.password?.type === 'required' && <span>This field is required</span>}
                {errors.password?.type === 'minLength' && (
                    <span>Password must be at least 6 characters long</span>
                )}
                {errors.password?.type === 'pattern' && (
                    <span>Password must contain a capital letter and a special character</span>
                )}

                <button type="button" className='btn btn-primary mt-5 w-2/3' onClick={togglePassword}>
                    {passwordVisible ? 'Hide' : 'Show'}
                </button>
            </div>



            <div className="form-control">
                <label className="label">
                    <span className="label-text">Password</span>
                </label>
                <input placeholder='Confirm your Password' className="input input-bordered bg-slate-200"
                    type={passwordVisible ? 'text' : 'password'}
                    {...register("confirmPassword", {
                        required: true,
                        validate: (value) => value === watch("password"),
                    })}
                />
                {errors.confirmPassword && (
                    <span>Passwords do not match</span>
                )}
            </div>


            <input type="submit" className='btn btn-primary mt-5 w-2/3' value="Submit" />
        </form>
    );

};

export default Signup;