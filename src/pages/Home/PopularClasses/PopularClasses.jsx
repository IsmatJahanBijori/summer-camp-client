import React from 'react';
import useClasses from '../../../hooks/useClasses';
import Marquee from 'react-fast-marquee';


const PopularClasses = () => {
    const [classes] = useClasses()

    const approvedClasses = classes.filter(clasS => clasS.status === 'Approve')
   
    return (
        <div>
        <span className='text-3xl text-center mx-96 mt-10 mb-0'>Our Top Classes</span>
        <Marquee className='grid grid-cols-1 md:grid-cols-3 p-20 my-10'>
            {
                approvedClasses.map(clasS =>
                    <div className="card w-96 h-[500px] bg-slate-100 shadow-xl m-20">
                        <figure><img src={clasS.image} className='p-5 w-full' alt="Class" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{clasS.className}</h2>
                            <p>Instructor Name: {clasS.instName}</p>
                            <p>Available Seats: {clasS.seats}</p>
                            <p>Price: ${clasS.price}</p>
                            <p>Status: {clasS.status}</p>
                        </div>
                    </div>)
            }
        </Marquee>
        </div>
    );
};

export default PopularClasses;