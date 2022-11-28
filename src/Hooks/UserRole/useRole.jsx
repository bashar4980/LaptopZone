// import React from 'react';
import { useState } from "react";
import { useEffect } from "react";

const useRole = (email) => {
  const [role, setRole] = useState("");
  const [roleLoading, setRoleloading] = useState(true);

  useEffect(() => {
    if (email) {
      fetch(`http://localhost:5000/users/${email}`)
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
