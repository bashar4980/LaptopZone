import React from "react";

const AddCard = ({ addproduct }) => {
//   console.log("bg", addproduct);
  const { addProduct } = addproduct;
  // console.log(ProductImg)
  return (
    <div className="card  shadow-xl  ">
    <figure>
      <img src={addProduct.ProductImg} className="w-3/4" alt="Shoes" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{addProduct.ProductName}</h2>
      <p className="font-bold">
        <span className="text-secondary">{addProduct.ResellPrice}K</span>{" "}
        <span>
          <del>{addProduct.ProductOrginalPrice}</del>K
        </span>
      </p>
      {/* <p className=" font-semibold">Uses Times: {UsesTime}</p> */}
      <p className=" font-semibold">Location: {addProduct.Location}</p>
      <p className="font-semibold">Post: {addProduct.PostTime}</p>
     

    </div>
  </div>
  );
};

export default AddCard;
