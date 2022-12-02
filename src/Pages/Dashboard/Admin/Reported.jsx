import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { UserContext } from '../../../Context/AuthProvider';
import Loading from '../../Shared/loading/Loading';

const Reported = () => {
    const {user} = useContext(UserContext)
    const {data:reportProduct , isLoading, refetch} = useQuery({
        queryKey:["product/report"],
        queryFn:async()=>{
            const res = await fetch("https://laptopzone.vercel.app/product/report")
            const data = res.json();
            return data;
        }
    })
    if(isLoading){
        return <Loading></Loading>
    }

    const reportHandeler = product => {
        const email = user?.email;
        const userInfo ={
          email
        }
        fetch(`https://laptopzone.vercel.app/product/report/${product._id}`, {
            method: 'DELETE', 
            headers:{'authorization': `bearer ${localStorage.getItem('Access_token')}`,
            "Content-type":"application/json"
          },
            body:JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(data => {
            if(data.deletedCount > 0){
                refetch();
                toast.success(` deleted successfully`)
            }
        })
    }

    return (
        <div>
            <h1 className='text-3xl my-5'>Reported item</h1>
            <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>price</th>
              
              <th>Remove</th>
            </tr>
            {reportProduct && (
              <>
                {reportProduct.map((product , i) => {
                  return (
                    <tr key={product._id}>
                      <th>{i + 1}</th>
                      <td>{product.productName}</td>
                      <td>{product.price}</td>
                     
                      <td><button onClick={()=>reportHandeler(product)} className="btn btn-error btn-xs">Delete</button></td>
                    </tr>
                  );
                })}
              </>
            )}
          </thead>
          <tbody></tbody>
        </table>
      </div>
        </div>
    );
};

export default Reported;