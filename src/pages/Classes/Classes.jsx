import React from 'react';
import useClasses from '../../hooks/useClasses';

const Classes = () => {
    const [classes] = useClasses()
    const approvedClasses=classes.filter(clasS => clasS.status === 'Approve')
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 p-20'>
        {
            approvedClasses.map(clasS =>
                <div className="card w-96 bg-slate-100 shadow-xl m-20">
                    <figure><img src={clasS.image} className='p-5' alt="Class" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{clasS.className}</h2>
                        <p>Instructor Name: {clasS.instName}</p>
                        <p>Available Seats: {clasS.seats}</p>
                        <p>Price: ${clasS.price}</p>
                        <p>Status: {clasS.status}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-info">Select</button>
                        </div>
                    </div>
                </div>)
        }
        </div>
    );
};

export default Classes;

{/**                {
                    classes.map(clasS =>
                        <div className="card w-96 bg-slate-100 shadow-xl m-20">
                            <figure><img src={clasS.image} className='p-5' alt="Class" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{clasS.className}</h2>
                                <p>Instructor Name: {clasS.instName}</p>
                                <p>Available Seats: {clasS.seats}</p>
                                <p>Price: ${clasS.price}</p>
                                <p>Status: {clasS.status}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-info">Select</button>
                                </div>
                            </div>
                        </div>)
                } */}