import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/AuthProvider";
import useToken from "../../Hooks/useToken/useToken";
// import { UserContext } from "../../context/Authcontext";

const Signup = () => {
  const { createUser, updateUser , providerSignin } = useContext(UserContext);
  const provider = new GoogleAuthProvider();
  const [email , setEmail] = useState("")
  const [token] = useToken(email);
  const navigate = useNavigate()

  if(token){
     navigate("/");
    
  }
  

  //
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const signupHandeler = (data) => {
    const email = data.Email;
    const password = data.password;
    const name = data.firstName;
    const role = data.role;
   
   const User = {
    name,
    email,
    role
   }
    const userInfo = {
      displayName: name,

    };
    createUser(email, password)
      .then((result) => {
        userUpdateInfo(userInfo);
        storeUserinfo(User)
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
   
  };

  //update user
  const userUpdateInfo = (profile) => {
    updateUser(profile)
      .then(() => {})
      .catch((error) => console.log(error));
  };

  //store user information
  const storeUserinfo =(user) =>{
    const email = user.email;
    fetch(`https://laptopzone.vercel.app/users` , {
      method:"POST",
      headers:{
        "Content-type":"application/json"
      },
      body:JSON.stringify(user)

    })
    .then(res => res.json())
    .then(data=> {
     
      if(data.acknowledged){
        setEmail(email)
     
        toast.success("User created successfully");
       
        reset()
      }

    }
    )
  }
 //login by email 

 const signinWithgoogle =()=>{
  providerSignin(provider)
  .then(result =>{
    const name = result.user.displayName;
    const email= result.user.email;
    const role  = "Buyers"
    const User = {
      name,
      email,
      role
     }

    storeUserinfo(User);
    
  })
  .catch(error =>{
    console.log(error)
  })
 }


  return (
    <div className="max-w-sm mx-auto  my-10 p-8 space-y-3 rounded-xl bg-white drop-shadow-lg text-neutral">
      <h1 className="text-2xl font-bold text-gray-900 text-center">Register</h1>

      <form onSubmit={handleSubmit(signupHandeler)} className="space-y-6">
        <div className="space-y-1 text-sm ">
          <label htmlFor="username" className="block text-neutral">
            First Name
        
          </label>
          <input
            type="text"
            id="username"
            {...register("firstName", {
              required: true,
              minLength: 5,
              maxLength: 15,
            })}
            placeholder="Enter your Name"
            className="w-full px-4 py-3 rounded-md border-gray-700 border text-neutral focus:border-violet-400"
          />
          {errors.firstName?.type === "required" && (
            <span className="text-red-400">Name is required</span>
          )}
          {errors.firstName?.type === "minLength" && (
            <span className="text-red-400">
              Name is must be at least 5 leters long
            </span>
          )}
          {errors.firstName?.type === "maxLength" && (
            <span className="text-red-400">
              Name is must be less than 15 leters
            </span>
          )}
        </div>

        <div className="space-y-1 text-sm bordered">
          <label htmlFor="useremail" className="block text-neutral">
            Email
          </label>
          <input
            {...register("Email")}
            type="email"
            id="useremail"
            placeholder="Enter your email"
            className="w-full px-4 py-3 rounded-md border-gray-700 border text-neutral focus:border-violet-400"
            required
          />
          <p className="text-red-400">{errors.Email?.message}</p>
        </div>
        <div className="space-y-1 text-sm bordered">
          <label htmlFor="password" className="block text-neutral">
            Password
          </label>
          <input
            type="password"
            {...register("password", {
              required: true,
              pattern:
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            })}
            id="password"
            placeholder="Password"
            className="w-full px-4 py-3 rounded-md border-gray-700 border text-neutral focus:border-violet-400"
          />
          {errors.password?.type === "required" && (
            <span className="text-red-400">Password is required</span>
          )}
          {errors.password?.type === "pattern" && (
            <span className="text-red-400">
              Password must be Minimum eight characters, at least one letter,
              one number and one special character:
            </span>
          )}
        </div>
        <div  className="space-y-1 text-sm">
        <select {...register("role")}  className="select border-gray-700  w-full max-w-xs">
          
          <option value="Buyers" selected>Buyers</option>
          <option value="Seller">Seller</option>
        </select>
        </div>
        <button
          type="submit"
          className="block w-full p-3 text-center rounded-lg text-white bg-neutral"
        >
          Sign in
        </button>
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        <p className="px-3 text-sm text-neutral">Login with social accounts</p>
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button onClick={signinWithgoogle} aria-label="Log in with Google" className="p-3 rounded-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
        </button>
      </div>
      <p className="text-xs text-center sm:px-6 text-neutral">
        Alerady have an account?
        <Link to="/login">Login</Link>
      </p>
    </div>
  );
};

export default Signup;
