import React, { useContext } from 'react';
import { AuthContext } from '../../../../Provider/AuthProvider';
import { useForm } from "react-hook-form";
import useAxiosSecure from '../../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const img_hosting_token = import.meta.env.VITE_IMG_URL
// console.log(img_hosting_url)
const AddACLass = () => {
    const [axiosSecure] = useAxiosSecure()
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        // console.log(data)

        const formData = new FormData()
        formData.append('image', data.image[0])
        // console.log(formData)
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(imgData => {
                // console.log(imgData)
                if (imgData.success) {
                    const imgUrl = imgData.data.display_url;
                    const { className, instName, instEmail, seats, price } = data;
                    const classItem = { className, instName, instEmail, seats, price: parseFloat(price), image: imgUrl }
                    console.log(classItem)
                    axiosSecure.post('/classes', classItem)
                        .then(data => {
                            // console.log('after posting new menu item', data.data)
                            if (data.data.insertedId) {
                                // reset();
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: `${className} added successfully`,
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }
                        })
                }
                // const imgUrl = imgData.data.display_url;
                // const { className, instName, instEmail, seats, price } = data;
                // const classItem = { className, instName, instEmail, seats, price: parseFloat(price), image: imgUrl }
                // console.log(classItem)
                // fetch('http://localhost:5000/classes', {
                //     method: 'POST',
                //     headers: {
                //         'content-type': 'application/json'
                //     },
                //     body: JSON.stringify(classItem)
                // }).then(res => res.json()).then(data => {
                //     console.log(data)
                // })
            })
    };

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
                                <option disabled defaultValue={"Select Your Course"} className='mb-2'>Select Your Course</option>
                                <option>Italian for Travelers</option>
                                <option>Japanese Language and Culture</option>
                                <option>English & Business Conversation</option>
                                <option>Spanish Immersion & Advanced Spanish Grammar</option>
                                <option>French for Beginners</option>
                                <option>German Language and Culture</option>
                            </select>
                        </div>
                        {errors.className && <span className='text-red-300 mt-5'>This field is required</span>}

                        {/**class image */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Class Image</span>
                            </label>
                            <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered file-input-info w-full max-w-xs" />
                        </div>

                        {errors.image && <span className='text-red-300 mt-5'>This field is required</span>}


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
                        {errors.seats && <span className='text-red-300 mt-5'>This field is required</span>}


                        {/**Price */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">$ Price</span>
                            </label>
                            <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered max-w-xs" />
                        </div>
                        {errors.price && <span className='text-red-300 mt-5'>This field is required</span>}


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
