import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../../Context/AuthProvider";
import useRole from "../../Hooks/UserRole/useRole";

const BuyerPrivate = ({ children }) => {
  const { user, loading } = useContext(UserContext);
  const [role, roleLoading] = useRole(user?.email)
  const location = useLocation();

  if (loading || roleLoading) {
    return (
      <div className="mx-auto w-16 h-16 border-4 border-dashed rounded-full t animate-spin border-secondary"></div>
    );
  }

  if (role === 'Buyers') {
    return children;
  } else {
    return(
        
        <>
       
        <Navigate to="/login" state={{ from: location }} replace />
      
        </>
       
    )
  }
};

export default BuyerPrivate;
