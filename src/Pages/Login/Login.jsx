import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../../Context/AuthProvider";
// import { UserContext } from "../../context/Authcontext";
// import Reset from "../ResetModal/Reset";

const Login = () => {
  const { signinUser, providerSignin } = useContext(UserContext);
  const { register, reset, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  let from = location.state?.from?.pathname || "/";

  const loginHandeler = (data) => {
    const email = data.email;
    const password = data.password;
    signinUser(email, password)
      .then((result) => {
        const user = result.user;
        toast.success("Login Successfully");
        console.log(user);
        navigate(from, { replace: true });
        reset();
      })
      .catch((error) => {
        setError(error.message);
        console.log(error);
      });
  };

  //sign in google

  const signinWithgoogle = () => {
    providerSignin(provider)
      .then((result) => {
        console.log(result);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //

  return (
    <div className="max-w-sm mx-auto  my-10 p-8 space-y-3 rounded-xl bg-white drop-shadow-lg text-neutral">
      <h1 className="text-2xl font-bold text-gray-900 text-center">Login</h1>

      <form className="space-y-6" onSubmit={handleSubmit(loginHandeler)}>
        <div className="space-y-1 text-sm">
          <label htmlFor="username" className="block text-neutral">
            Email
          </label>
          <input
            type="email"
            id="username"
            {...register("email")}
            placeholder="Enter your email"
            required
            className="w-full px-4 py-3 rounded-md border-gray-700 border text-neutral focus:border-violet-400"
          />
        </div>

        <div className="space-y-1 text-sm">
          <label htmlFor="password" className="block text-neutral">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register("password")}
            placeholder="Password"
            required
            className="w-full px-4 py-3 rounded-md border-gray-700 border text-neutral focus:border-violet-400"
          />
          <div className="flex justify-end text-xs text-neutral">
            <label className="reset" htmlFor="reset">
              Forgot password ?
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="block w-full p-3 text-center rounded-lg text-white bg-neutral"
        >
          Sign in
        </button>
        {error && <p className="text-red-400">{error}</p>}
      </form>
      <div className="flex items-center pt-4 space-x-1">
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
        <p className="px-3 text-sm text-neutral">Login with social accounts</p>
        <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
      </div>
      <div className="flex justify-center space-x-4">
        <button
          onClick={signinWithgoogle}
          aria-label="Log in with Google"
          className="p-3 rounded-sm"
        >
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
        Don't have an account?
        <Link to="/signup">Register</Link>
      </p>
      {/* <Reset></Reset> */}
    </div>
  );
};

export default Login;
