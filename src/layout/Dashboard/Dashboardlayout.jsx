import React from "react";
import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../Context/AuthProvider";
import useRole from "../../Hooks/UserRole/useRole";
// import Dashboard from "../../Pages/Dashboard/Dashboard/Dashboard";
import Header from "../../Pages/Shared/Header/Header";

const Dashboardlayout = () => {
  const { user } = useContext(UserContext);
  const [role] = useRole(user?.email);
  return (
    <div>
      <Header></Header>
      <div className="drawer drawer-mobile">
        <input id="Dashboard" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content mx-10 mt-5">
          <Outlet></Outlet>
          
        </div>
        <div className="drawer-side ">
          <label htmlFor="Dashboard" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-gray-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
          {
            role === "Buyers" &&  <>
            <li>
              <Link to="/dashboard/myorders">My Orders</Link>
            </li>
            </>
            
          }
            {role === "Seller" && (
              <>
                <li>
                  <Link to="/myproducts">My Products</Link>
                </li>
                <li>
                  <Link to="/addproducts">Add Product</Link>
                </li>
              </>
            )}
            {role === "Admin" && (
              <>
                <li>
                  <Link to="/dashboard/buyers">All Buyers</Link>
                </li>
                <li>
                  <Link>All Sellers</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboardlayout;
