import { useQuery } from "@tanstack/react-query";
import { format } from "date-fns";
import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaUserCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../Context/AuthProvider";

const AddProduct = () => {
  const { user } = useContext(UserContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const Apikey = "e83c4aac14fa6e1ed5c98c392dad426c";
  const { data: Category, isLoading } = useQuery({
    queryKey: ["products", "category"],
    queryFn: async () => {
      const res = await fetch("https://laptopzone.vercel.app/products/category");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return (
      <div className="mx-auto w-16 h-16 border-4 border-dashed rounded-full t animate-spin border-secondary"></div>
    );
  }
  //
  const productHandeler = (data) => {
    console.log(data);
    const date = new Date();
    const Category = data.Category;
    // const ProductImg = data.
    const ProductName = data.ProductName;
    const ProductOrginalPrice = data.ProductOrginalPrice;
    const ResellPrice = data.ResellPrice;
    const Location = data.Location;
    const UsesTime = data.UsesTime;
    const ProductOwner = user?.displayName;
    const OwnerEmail = user?.email;
    const PostTime = format(date, "PP");
    const ProductCondition = data.ProductDescription;
    const UserPhone = data.phone;
    const ProductDescription = data.ProductDescription;
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    fetch(`https://api.imgbb.com/1/upload?key=${Apikey}`, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        const productInfo = {
          ProductImg: imgData.data.url,
          ProductName,
          ProductOrginalPrice,
          ResellPrice,
          Location,
          UsesTime,
          ProductOwner,
          OwnerEmail,
          ProductCondition,
          ProductDescription,
          UserPhone,
          PostTime,
        };
        if (imgData.success) {
          fetch(`https://laptopzone.vercel.app/products/update/${Category}`, {
            method: "PATCH",
            headers: { "Content-type": "application/json" },
            body: JSON.stringify(productInfo)
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged) {
                toast.success(
                  `${user?.displayName} ,  product add successfully`
                );

                navigate("/dashboard/myproducts");
              }
            });
        }
      });
  };

  return (
    <div>
      <h1 className="text-4xl font-bold">Add a product</h1>
      <>
        <section className="p-6 bg-gray-800 text-gray-50 rounded-md">
          <form
            onSubmit={handleSubmit(productHandeler)}
            className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
          >
            <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-900">
              <div className="space-y-2 col-span-full lg:col-span-1">
                <div className="avatar placeholder">
                  <div className="bg-neutral-focus text-neutral-content rounded-full w-12 ml-5">
                    <span><FaUserCircle></FaUserCircle></span>
                  </div>
                </div>
                <p className="text-2xl font-bold">{user?.displayName}</p>
              
              </div>

              <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                <div className="col-span-full">
                  <label htmlFor="address" className="text-sm">
                    Select Category
                  </label>

                  <select
                    {...register("Category")}
                    required
                    className="select  w-full text-gray-900 border-gray-700"
                  >
                    <option disabled selected>
                      Select your product category
                    </option>
                    {Category.map((category) => {
                      return (
                        <option value={category?.Category} key={category._id}>
                          {category?.Category}
                        </option>
                      );
                    })}
                  </select>
                </div>

                <div className="col-span-full">
                  <label htmlFor="address" className="text-sm">
                    Product Name
                  </label>
                  <input
                    {...register("ProductName")}
                    id="address"
                    type="text"
                    required
                    placeholder="Write your product name"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                  />
                </div>

                <div className="col-span-full">
                  <label htmlFor="files" className="block text-sm font-medium">
                    Product Image
                  </label>
                  <input
                    type="file"
                    {...register("image")}
                    className="input text-gray-800 input-bordered w-full max-w-xs"
                  />
                </div>

                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="price" className="text-sm">
                    Product Price
                  </label>
                  <input
                    id="price"
                    required
                    {...register("ProductOrginalPrice")}
                    type="text"
                    placeholder="Write Product price"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="resell" className="text-sm">
                    Product Re-sell price
                  </label>
                  <input
                    required
                    {...register("ResellPrice")}
                    id="resell"
                    type="text"
                    placeholder="Product resell price"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label className="text-sm">Location</label>
                  <select
                    {...register("Location")}
                    required
                    className="select   w-full text-gray-900 border-gray-700"
                  >
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
                  <label className="text-sm">Product Condition</label>
                  <select
                    {...register("ProductCondition")}
                    className="select  w-full text-gray-900 border-gray-700"
                  >
                    <option disabled selected>
                      Your product condition
                    </option>
                    <option value="excellent">Excellent</option>
                    <option value="good">Good</option>
                    <option value="fair">Fair</option>
                  </select>
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="pYear" className="text-sm">
                    Purchase Year
                  </label>
                  <input
                    required
                    {...register("PurchaseYear")}
                    id="pYear"
                    type="text"
                    placeholder="Product purchase year"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                  />
                </div>

                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="usetime" className="text-sm">
                    Uses time
                  </label>
                  <input
                    id="usetime"
                    type="text"
                    required
                    {...register("UsesTime")}
                    placeholder="How much time use?"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                  />
                </div>
                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="email" className="text-sm">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    defaultValue={user?.email}
                    disabled
                    placeholder="Enter your email"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                  />
                </div>

                <div className="col-span-full sm:col-span-3">
                  <label htmlFor="phone" className="text-sm">
                    Phone
                  </label>
                  <input
                    id="phone"
                    {...register("PhoneNumber")}
                    type="text"
                    placeholder="Enter your phone"
                    className="w-full p-2 rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                  />
                </div>

                <div className="col-span-full">
                  <textarea
                    {...register("ProductDescription")}
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
