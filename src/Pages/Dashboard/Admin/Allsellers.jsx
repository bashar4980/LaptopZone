import { useQuery } from "@tanstack/react-query";
import React from "react";
import toast from "react-hot-toast";

const AllSellers= () => {
    const role = "Seller"
  const { data: AllSellers, isLoading , refetch} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/users?role=${role}`);
      const data = await res.json();
      return data;
    },
  });
  if(isLoading){
    return  <div className="mx-auto w-16 h-16 border-4 border-dashed rounded-full t animate-spin border-secondary"></div>
  }
 
  // console.log("usr" , AllSellers)
  const updateUser = buyer =>{
    const email = buyer.email;
    const name = buyer.name
    fetch(`http://localhost:5000/users/seller/${email}`,{
      method:"PATCH"
    })
    .then(res=>res.json())
    .then(data=>{
   
      if(data.acknowledged){
        toast.success(`${name}is now verified`)
        refetch()
      }
       
    })
  }
  //delte user
  // const manageSeller = seller =>{
  //   const id= seller._id;
  //   // const name = seller.name;
  //   fetch(`http://localhost:5000/user/${id}`,{
  //     method:"DELETE",
     
  //   })
  //   .then(res=>res.json())
  //   .then(data=>{
  //     console.log(data)
  //     refetch()
  //   })
  // }
  //

  const manageSeller = seller => {
    fetch(`http://localhost:5000/user/${seller._id}`, {
        method: 'DELETE', 
    })
    .then(res => res.json())
    .then(data => {
        if(data.deletedCount > 0){
            refetch();
            toast.success(`${seller.name} deleted successfully`)
        }
    })
}



  //

  return (
    <div>
     
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Verify</th>
              <th>Remove</th>
            </tr>
            {AllSellers && (
              <>
                {AllSellers.map((buyer , i) => {
                  return (
                    <tr key={buyer._id}>
                      <th>{i + 1}</th>
                      <td>{buyer.name}</td>
                      <td>{buyer.email}</td>
                      <td>{
                        buyer.verify ? <button onClick={()=> updateUser(buyer)} disabled className="btn btn-success btn-xs">verify</button>
                        : <button onClick={()=> updateUser(buyer)} className="btn btn-success btn-xs">verify</button>
                        }</td>
                      <td><button onClick={()=> manageSeller(buyer)} className="btn btn-error btn-xs">Delete</button></td>
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

export default AllSellers;
