import React from "react";

const ProductCard = ({ product }) => {
  console.log(product);
  const {
    ProductImg,
    ProductName,
    ProductOrginalPrice,
    ResellPrice,
    Location,
    PostTime,
    UsesTime,
    ProductOwner,
  } = product;
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
          <img
            alt=""
            src="https://source.unsplash.com/100x100/?portrait"
            className="object-cover w-12 h-12 rounded-full shadow bg-gray-500"
          />
          <div className="flex flex-col space-y-1">
            <a
              rel="noopener noreferrer"
              href="/"
              className="text-sm font-semibold"
            >
              {ProductOwner}
            </a>
            <span className="text-xs text-secondary">Veryfied</span>
          </div>
        </div>

        <div className="card-actions mt-3 justify-center">
          <button className="btn btn-secondary w-full text-white hover:text-black hover:bg-transparent">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
