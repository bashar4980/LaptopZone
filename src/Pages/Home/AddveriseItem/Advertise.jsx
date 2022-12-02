// import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect, useState } from "react";
import AddCard from "./AddCard";

const Advertise = () => {
    const [addProduct , setAddProduct] = useState([])
   console.log(addProduct)

 useEffect(()=>{
    axios.get("https://laptopzone.vercel.app/addvertise")
    .then(res=>{
        const value = res.data;
        setAddProduct(value)
    })
 },[]);
//  console.log(add)
  return (
    <div>
      {
        addProduct.length > 0 && 
        <section className="py-6 my-10 sm:py-12  text-gray-700">
        <div className="container p-6 mx-auto space-y-8">
          <div className="space-y-2 text-center">
            <h2 className="text-3xl font-bold">Advertises Products</h2>
          </div>
          <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
        {
            addProduct.map(product=>{
                return(
                    <AddCard key={product._id} addproduct={product}></AddCard>
                )
            })

        }
          </div>
        </div>
      </section>
      }
    </div>
  );
};

export default Advertise;
