import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { UserContext } from "../../../Context/AuthProvider";
import "./Header.css"

const Header = () => {

  const {user , logOut} = useContext(UserContext);
  
  const logoutHandeler = () => {
    logOut().then(() => {
      toast.success("Log out successfully");
    });
  };
  const menuItem = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/blogs">Blogs</Link>
      </li>
      
      {
        user?.uid ? <>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <p>{user?.displayName}</p>
        </li>
        <li>
        <button onClick={logoutHandeler} className="btn-ghost">Logout</button>
        </li>
        </>:
        <>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
        <Link to="/signup">Signup</Link>
      </li>
        </>
      }
    </>
  )
  return (
    <div className="navbar bg-primary flex justify-between">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menuItem}

          </ul>
        </div>
        <a href="/" className="btn btn-ghost normal-case font-bold text-secondary text-xl">
         LaptopBazar
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">
          {menuItem}
        </ul>
      </div>

      <label tabIndex={2}  htmlFor="Dashboard" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
   
    </div>
  );
};

export default Header;
