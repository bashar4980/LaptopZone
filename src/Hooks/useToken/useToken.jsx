import { useState } from "react";
import { useEffect } from "react";


const useToken = (email) => {

    const [token , setToken] = useState('')
   
    useEffect(()=>{
      fetch(`http://localhost:5000/jwt?email=${email}`)
      .then(res=>res.json())
      .then(data=>{
        const access_token = data.Access_token;
        localStorage.setItem("Access_token" , access_token)
        setToken(access_token)
      })
    }, [email])
    return [token]
  
};

export default useToken;