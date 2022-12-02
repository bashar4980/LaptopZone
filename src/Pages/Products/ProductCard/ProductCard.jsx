// import { useQueries, useQuery } from "@tanstack/react-query";
import React from "react";
// import { useContext } from "react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
// import toast from "react-hot-toast";
import { GoVerified } from "react-icons/go";
// import { UserContext } from "../../../Context/AuthProvider";
import ModalProduct from "./ModalProduct";

const ProductCard = ({ product }) => {
  const [verify, setVerify] = useState();
  // const { user } = useContext(UserContext);
  const [selectedproduct, setSelectedProduct] = useState(null);

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

  useEffect(() => {
    fetch(`https://laptopzone.vercel.app/users/verify/${OwnerEmail}`)
      .then((res) => res.json())
      .then((data) => setVerify(data));
  }, [OwnerEmail]);
//

const reportHandeler =(product) =>{
  const productName = product.ProductName;
  const price = product.ResellPrice
  const productInfo ={
         productName,
         price
  }
  fetch("https://laptopzone.vercel.app/product/report", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify(productInfo),
  })
    .then((res) => res.json())
    .then((data) => {
      if (data.acknowledged) {
        toast.success(`Report successfully`);
       
      }
    });
}

//


  const bookingHandeler = (product) => {
    setSelectedProduct(product);
  };
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
       <>
       <button onClick={()=>reportHandeler(product)} className="w-20 btn btn-error btn-xs">Report</button>
       </>
        <div className="card-actions mt-3 justify-center">
          
          <label
            onClick={() => bookingHandeler(product)}
            htmlFor="booking"
            className="btn btn-secondary w-full text-white hover:text-black hover:bg-transparent"
          >
            Book Now
          </label>
        </div>
      </div>
      {selectedproduct && (
        <ModalProduct
          product={selectedproduct}
          setSelectedProduct={setSelectedProduct}
        ></ModalProduct>
      )}
    </div>
  );
};

export default ProductCard;
