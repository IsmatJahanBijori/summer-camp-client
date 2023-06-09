import React, { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';

const AddACLass = () => {
    const { user } = useContext(AuthContext)


    return (
        <div className="hero min-h-screen bg-slate-100">
            <div className="card w-[500px] shadow-2xl bg-base-100 ">
                <div className="card-body">
                    <h1 className="text-5xl">Add Your Class</h1>
                    {/**class name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Class Name</span>
                        </label>
                        <select className="select select-info w-full max-w-xs">
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
                        <input type="file" className="file-input file-input-bordered file-input-info max-w-xs " />
                    </div>


                    {/**Instructor Name */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Name</span>
                        </label>
                        <input type="text" placeholder="instructorName" defaultValue={user?.displayName} className="input input-bordered max-w-xs" />
                    </div>

                    {/**Instructor Email */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Instructor Email</span>
                        </label>
                        <input type="text" placeholder="instructorEmail" defaultValue={user?.email} className="input input-bordered max-w-xs" />
                    </div>

                    {/**Available Seats */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available Seats</span>
                        </label>
                        <input type="number" placeholder="seats" className="input input-bordered max-w-xs" />
                    </div>

                    {/**Price */}
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="number" placeholder="price" className="input input-bordered max-w-xs" />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-info max-w-xs">Add Class</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddACLass;