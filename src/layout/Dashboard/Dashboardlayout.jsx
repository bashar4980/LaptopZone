import React from 'react';
import { Link } from 'react-router-dom';
import Dashboard from '../../Pages/Dashboard/Dashboard/Dashboard';
import Header from '../../Pages/Shared/Header/Header';

const Dashboardlayout = () => {
    return (
        <div>
            <Header></Header>
            <div className="drawer drawer-mobile">
  <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content flex flex-col items-center justify-center">
   <Dashboard></Dashboard>
    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
  
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 bg-base-100 text-base-content">
      {/* <!-- Sidebar content here --> */}
      <li>
        <Link to="/myorders">My Orders</Link>
      </li>
      <li>
        <Link to="/myproducts">My Products</Link>
      </li>
      <li>
        <Link to="/addproduct">Add Product</Link>
      </li>
      <li>
        <Link>All Buyers</Link>
      </li>
      <li>
        <Link>All Sellers</Link>
      </li>
    </ul>
  
  </div>
</div>
        </div>
    );
};

export default Dashboardlayout;