import React from 'react';
import { useLoaderData } from 'react-router-dom';
// import ModalProduct from '../ProductCard/ModalProduct';
import ProductCard from '../ProductCard/ProductCard';


const Products = () => {
    const product = useLoaderData();
    console.log(product)
    const{ Products} = product
 
    return (
        <div className='py-20 max-w-[1220px] mx-auto'>
            <h1 className='font-bold text-4xl text-center'>Welcome to <span className='text-secondary'>{product?.Category}</span> gallary</h1>
            <div className='grid grid-cols-1  mt-10 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-10'>
             {
                Products.map((product , i) =>{
                      return(
                        <ProductCard key={i} product={product}></ProductCard>
                      )
                })
             }
            </div>
         
        </div>
    );
};

export default Products;