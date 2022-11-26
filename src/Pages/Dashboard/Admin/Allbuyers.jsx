import { useQuery } from "@tanstack/react-query";
import React from "react";

const Allbuyers = () => {
    const role = "Buyers"
  const { data: Allbuyers, isLoading } = useQuery({
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
                      <td><button className="btn btn-error btn-xs">Delete</button></td>
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
