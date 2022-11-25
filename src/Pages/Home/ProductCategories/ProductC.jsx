import React from "react";
import { useQuery } from "@tanstack/react-query";
import Categories from "./Categories";

const ProductC = () => {
  const { data: ProductData, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/products");
      const data = await res.json();
      return data;
    },
  });
  // console.log("Inside", ProductData);
  if (isLoading) {
    return (
      <div className="mx-auto w-16 h-16 border-4 border-dashed rounded-full t animate-spin border-secondary"></div>
    );
  }
  return (
    <div className="py-20">
      <h1 className="text-4xl text-center pb-20 text-neutral">Browse items by category</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {
        ProductData.map(Product =>{
          return(
            <Categories  key={Product._id} Product ={Product}></Categories>
          )
        })
      }
      </div>
    </div>
  );
};

export default ProductC;
