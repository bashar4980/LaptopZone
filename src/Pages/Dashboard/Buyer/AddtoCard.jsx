import React from "react";
import { Link } from "react-router-dom";

const AddtoCard = ({ booked }) => {
  const { ProductName, ProductImg, ResellPrice  , _id} = booked;
  console.log("bookedd", booked);
  return (
    <li className="flex flex-col py-6 sm:flex-row sm:justify-between">
      <div className="flex w-full space-x-2 sm:space-x-4">
        <img
          className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
          src={ProductImg}
          alt="Polaroid camera"
        />
        <div className="flex flex-col justify-between w-full pb-4">
          <div className="flex justify-between w-full pb-2 space-x-2">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                {ProductName}
              </h3>
              <p className="text-sm text-gray-400">Classic</p>
            </div>
            <div className="text-right">
         
             
              <Link to={`/dashboard/payment/${_id}`}>
              <button
                type="btn btn-primary"
                className=" btn btn-primary btn-xs flex items-center px-2 py-1 pl-0 space-x-1"
              >
                Pay Now
              </button>
              </Link>

            </div>
          </div>
          <div className="flex text-sm divide-x">
            <p className="text-lg font-semibold">{ResellPrice} Tk</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default AddtoCard;
