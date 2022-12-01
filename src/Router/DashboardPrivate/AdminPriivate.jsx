import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { UserContext } from "../../Context/AuthProvider";
import useRole from "../../Hooks/UserRole/useRole";

const AdminPrivate = ({ children }) => {
  const { user, loading , logOut} = useContext(UserContext);
  const [role, roleLoading] = useRole(user?.email)
  const location = useLocation();
  const logoutHandeler = () => {
    logOut().then(() => {
      
    });
  };
  if (loading || roleLoading) {
    return (
      <div className="mx-auto w-16 h-16 border-4 border-dashed rounded-full t animate-spin border-secondary"></div>
    );
  }

  if (role === 'Admin') {
    return children;
  } else {
    return(
        
        <>
       
        <Navigate to="/login" state={{ from: location }} replace />
        {logoutHandeler()}
        </>
       
    )
  }
};

export default AdminPrivate;
