import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { UserContext } from '../../Context/AuthProvider';

const Private = ({children}) => {
    const {user , loading} = useContext(UserContext);
    const location = useLocation()
    if(loading){
        return (
            <div className="mx-auto w-16 h-16 border-4 border-dashed rounded-full t animate-spin border-secondary"></div>
          );
    }
   
    if(user){
        return children;
    }
    else{
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
   
};

export default Private;