import React from 'react';
import useInstructors from '../../hooks/useInstructors';

const Instructors = () => {
    const [instructors] = useInstructors()
    return (
        <div className="overflow-x-auto m-20">
            <table className="table">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Number Of Classes Taken</th>
                        <th>Name Of Classes Taken</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        instructors.map((instructor, index) =>
                            <tr>
                                <td>{index + 1}</td>
                                <td>{instructor.image}</td>
                                <td>{instructor.name}</td>
                                <td>{instructor.email}</td>
                                <td>{instructor.classesTaken}</td>
                                <td>{instructor.classesNames}</td>
                             </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Instructors;