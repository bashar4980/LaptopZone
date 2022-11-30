// import { useQueries, useQuery } from "@tanstack/react-query";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { GoVerified } from "react-icons/go";

const ProductCard = ({ product }) => {
  const [verify, setVerify] = useState();

  // console.log(product);
  const {
    ProductImg,
    ProductName,
    ProductOrginalPrice,
    ResellPrice,
    Location,
    PostTime,
    UsesTime,
    ProductOwner,
    OwnerEmail,
  } = product;
  //check verify
  console.log(OwnerEmail);
  useEffect(() => {
    fetch(`http://localhost:5000/users/verify/${OwnerEmail}`)
      .then((res) => res.json())
      .then((data) => setVerify(data));
  }, [OwnerEmail]);
  console.log(verify);
  //
  return (
    <div className="card  shadow-xl  ">
      <figure>
        <img src={ProductImg} className="w-3/4" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{ProductName}</h2>
        <p className="font-bold">
          <span className="text-secondary">{ResellPrice}K</span>{" "}
          <span>
            <del>{ProductOrginalPrice}</del>K
          </span>
        </p>
        <p className=" font-semibold">Uses Times: {UsesTime}</p>
        <p className=" font-semibold">Location: {Location}</p>
        <p className="font-semibold">Post: {PostTime}</p>
        <div className="flex space-x-4">
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="/"
              className="text-2xl font-semibold"
            >
              {ProductOwner}
            </a>
            <span className=" text-secondary text-3xl">
              {verify?.verified === true ? (
                <GoVerified title="Verifiyed"></GoVerified>
              ) : (
                <p className="text-error">
                  <GoVerified title="Not variyfied" />
                </p>
              )}
            </span>
          </div>
        </div>

        <div className="card-actions mt-3 justify-center">
          <button className="btn btn-secondary w-full text-white hover:text-black hover:bg-transparent">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
