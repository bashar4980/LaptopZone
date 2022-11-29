import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../Context/AuthProvider';

const Myproducts = () => {
    const {user} = useContext(UserContext)
    const {data:sellerProduct , isLoading } = useQuery({
        queryKey:["seller"],
        queryFn:async()=>{
            const res = await fetch(`http://localhost:5000/products/seller/${user?.email}`)
            const data = await res.json();
            return data
        }
    })
    if(isLoading){
        return(
            <div>Loading</div>
        )
    }
    return (
        <div>
 <div className="container p-2 mx-auto sm:p-4 text-gray-100">
	<h2 className="mb-4 text-2xl font-semibold leading-tight text-gray-500">My Products</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<colgroup>
				<col/>
				<col/>
				<col/>
				<col/>
				<col/>
				<col className="w-24"/>
			</colgroup>
			<thead className="bg-gray-700">
				<tr className="text-left">
					<th className="p-3">No</th>
					<th className="p-3">Name</th>
					<th className="p-3">Price</th>
					<th className="p-3">Stock</th>
					
					<th className="p-3">Delete</th>
				</tr>
			</thead>
			<tbody>
            {sellerProduct.map((product, i) => {
    return (
      <tr className="border-opacity-20 border-gray-700 bg-gray-900" key={i}>
        <td className="p-3">{i + 1}</td>
        <td className="p-3">{product.ProductName}</td>
        <td className="p-3">{product.ResellPrice}</td>
        <td className="p-3">
          <button className="btn btn-xs btn-success">Sold</button>
        </td>
        <td className="p-3">
          <button className="btn btn-xs btn-warning">Delete</button>
        </td>
      </tr>
    );
  })}
				
			</tbody>
		</table>
	</div>
</div>
        </div>
    );
};

export default Myproducts;