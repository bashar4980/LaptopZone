import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useContext } from "react";
import toast from "react-hot-toast";
import { UserContext } from "../../../Context/AuthProvider";

const Allbuyers = () => {
    const role = "Buyers"
    const {user} = useContext(UserContext);
    
  const { data: Allbuyers, isLoading , refetch} = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(`https://laptopzone.vercel.app/users?role=${role}`);
      const data = await res.json();
      return data;
    },
  });
  if(isLoading){
    return  <div className="mx-auto w-16 h-16 border-4 border-dashed rounded-full t animate-spin border-secondary"></div>
  }

  const manageBuyer = buyer => {
    const email = user?.email;
    const userInfo ={
      email
    }
    fetch(`https://laptopzone.vercel.app/user/${buyer._id}`, {
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
            toast.success(`${buyer.name} deleted successfully`)
        }
    })
}

  return (
    <div>
     
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>No.</th>
              <th>Name</th>
              <th>Email</th>
              <th>Remove</th>
            </tr>
            {Allbuyers && (
              <>
                {Allbuyers.map((buyer , i) => {
                  return (
                    <tr key={buyer._id}>
                      <th>{i + 1}</th>
                      <td>{buyer.name}</td>
                      <td>{buyer.email}</td>
                      <td><button onClick={()=> manageBuyer(buyer)} className="btn btn-error btn-xs">Delete</button></td>
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

export default Allbuyers;
