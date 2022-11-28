import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
// import { useForm } from "react-hook-form";
import { UserContext } from "../../../Context/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(UserContext);
  
  const {data: Category , isLoading} = useQuery({
    queryKey:["products" , "category"],
    queryFn: async()=>{
        const res = await fetch("http://localhost:5000/products/category");
        const data = await res.json();
        return data
    }
  })
  if (isLoading) {
    return (
      <div className="mx-auto w-16 h-16 border-4 border-dashed rounded-full t animate-spin border-secondary"></div>
    );
  }
  return (
    <div>
      <h1 className="text-4xl font-bold">Add a product</h1>
      <>
        <section className="p-6 bg-gray-800 text-gray-50 rounded-md">
          <form
            novalidate=""
            action=""
            className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <div className="avatar online">
                  <div className="w-24 rounded-full">
                    <img alt="/" src="https://placeimg.com/192/192/people" />
                  </div>
                </div>
                <p className="text-2xl font-bold">{user?.displayName}</p>
                <div className="indicator mt-5">
                  <span className="indicator-item badge badge-success">
                    
                  </span>
                  <button className="btn btn-ghost btn-xs">Verified</button>
                </div>
              </div>

              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full">
                  <label for="address" className="text-sm">
                    Select Category
                  </label>

                  <select className="select  w-full text-gray-900 border-gray-700">
                    <option disabled selected>
                      Select your product category
                    </option>
                   {
                    Category.map((category)=>{
                      return(
                        <option value={category?.Category} key={category._id}>{category?.Category}</option>
                      )
                    })
                   }
                  </select>
                </div>

                <div className="col-span-full">
                  <label for="address" className="text-sm">
                    Product Name
                  </label>
                  <input
                    id="address"
                    type="text"
                    placeholder="Write your product name"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                  />
                </div>

                <div className="col-span-full">
                  <label for="files" className="block text-sm font-medium">
                    Product Image
                  </label>
                  <div className="flex">
                    <input
                      type="file"
                      name="files"
                      id="files"
                      className="px-8 w-full py-4 border-2 border-dashed rounded-md border-gray-700 text-gray-400 bg-gray-800"
                    />
                  </div>
                </div>

                <div className="col-span-full sm:col-span-3">
                  <label for="firstname" className="text-sm">
                    Product Price
                  </label>
                  <input
                    id="firstname"
                    type="text"
                    placeholder="Write Product price"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label for="lastname" className="text-sm">
                    Product Re-sell price
                  </label>
                  <input
                    id="lastname"
                    type="text"
                    placeholder="Product resell price"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label for="firstname" className="text-sm">
                    Location
                  </label>
                  <select className="select  w-full text-gray-900 border-gray-700">
                    <option disabled selected>
                      Enter your location
                    </option>
                    <option value="Kushtia">Kushtia</option>
                    <option value="Dhaka">Dhaka</option>
                    <option value="Khulna">Khulna</option>
                    <option value="Chittagong">Chittagong</option>
                    
                  </select>
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label for="lastname" className="text-sm">
                    Product Condition
                  </label>
                  <select className="select  w-full text-gray-900 border-gray-700">
                    <option disabled selected>
                      Your product condition
                    </option>
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                    
                  </select>
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label for="email" className="text-sm">
                    Purchase Year
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Product purchase year"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                  />
                </div>

                <div className="col-span-full sm:col-span-3">
                  <label for="email" className="text-sm">
                    Uses time
                  </label>
                  <input
                    id="email"
                    type="text"
                    placeholder="How much time use?"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label for="email" className="text-sm">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                  />
                </div>

                <div className="col-span-full sm:col-span-3">
                  <label for="email" className="text-sm">
                    Phone
                  </label>
                  <input
                    id="email"
                    type="text"
                    placeholder="Enter your phone"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                  />
                </div>

                <div className="col-span-full">
                  <textarea
                    className="textarea w-full textarea-bordered text-gray-800"
                    placeholder="Product Description"
                  ></textarea>
                </div>

                <div className="col-span-full mx-auto">
                  <button className="btn btn-success px-20">Add Product</button>
                </div>
              </div>
            </fieldset>
          </form>
        </section>
      </>
    </div>
  );
};

export default AddProduct;
