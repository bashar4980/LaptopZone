// import React from 'react';
import { useEffect, useState } from "react";

const useRole = (email) => {
  const [role, setRole] = useState("");
  const [roleLoading, setRoleloading] = useState(true);
  console.log(role)

  useEffect(() => {
    if (email) {
      fetch(`https://laptopzone.vercel.app/users/${email}`)
        .then((res) => res.json())
        .then((data) => {
          const role = data.role;
          console.log("inside" , role)
          console.log(data)
          setRole(role);
          setRoleloading(false);
        });
    }
  }, [email]);

  return [role, roleLoading];
};

export default useRole;
