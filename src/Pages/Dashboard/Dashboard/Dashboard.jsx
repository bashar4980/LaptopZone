import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../Context/AuthProvider';
// import Display from '../Display';


const Dashboard = () => {
    const {user} = useContext(UserContext)
    return (
        <div>
            <h1 className='text-4xl'>Welcome , <span className='text-secondary'>{user?.displayName} </span></h1>
        </div>
    );
};

export default Dashboard;