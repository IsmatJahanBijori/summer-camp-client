import React from 'react';
import useClasses from '../../hooks/useClasses';

const Classes = () => {
    const [classes] = useClasses()
    return (
        <div>
        {classes.length}
        </div>
    );
};

export default Classes;