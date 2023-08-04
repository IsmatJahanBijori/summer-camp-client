import React, { useContext } from 'react';
import useClasses from '../../hooks/useClasses';
import { AuthContext } from '../../Provider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import { Link, NavLink } from 'react-router-dom';

const Classes = () => {
    const [classes] = useClasses()
    const { user } = useContext(AuthContext)
    const navigate=useNavigate()
    const location = useLocation(); 
    const approvedClasses = classes.filter(clasS => clasS.status === 'Approve')
    const handleSelectButton = (clasS) => {
        if (!user) {
            Swal.fire({
                title: `Please Login first to select the ${clasS.className}`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, Take to the login page!'
              }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', {state: {from:location}})
                    
                }
              })
            // navigate('/login')
        }
        else{
            
        }
    }
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
                                <button onClick={()=>handleSelectButton(clasS)} className="btn btn-info">Select</button>
                            </div>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default Classes;
