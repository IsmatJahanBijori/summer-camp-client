import React, { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { useForm } from "react-hook-form";
const AddACLass = () => {

    const {user}=useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return (
        <div className="hero min-h-screen bg-slate-100">
            <div className="card w-[500px] shadow-2xl bg-base-100 ">
                <div className="card-body">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <h1 className="text-4xl">Add Your Class</h1>
                        {/**class name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Name</span>
                            </label>
                            <select {...register("className")} className="select select-info w-full max-w-xs">
                                <option disabled selected className='mb-2'>Select Your Course</option>
                                <option>Italian for Travelers</option>
                                <option>Japanese Language and Culture</option>
                                <option>English & Business Conversation</option>
                                <option>Spanish Immersion & Advanced Spanish Grammar</option>
                                <option>French for Beginners</option>
                                <option>German Language and Culture</option>
                            </select>
                        </div>

                        {/**class image */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Image</span>
                            </label>
                            <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-info w-full max-w-xs" />
                        </div>

                        {/**Instructor Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Name</span>
                            </label>
                            <input type="text" {...register("instName", { required: true })} defaultValue={user?.displayName} className="input input-bordered max-w-xs" />
                        </div>

                        {/**Instructor Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Instructor Email</span>
                            </label>
                            <input type="text" {...register("instEmail", { required: true })} defaultValue={user?.email} className="input input-bordered max-w-xs" />
                        </div>

                        {/**Available Seats */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Available Seats</span>
                            </label>
                            <input type="text" {...register("seats", { required: true })} placeholder="Available Seats" className="input input-bordered max-w-xs" />
                        </div>

                        {/**Price */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">$ Price</span>
                            </label>
                            <input type="text" {...register("price", { required: true })} placeholder="Price" className="input input-bordered max-w-xs" />
                        </div>

                        <div className="form-control mt-6">
                        <input className="btn btn-info max-w-xs" type="submit" value="Add Item" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddACLass;
