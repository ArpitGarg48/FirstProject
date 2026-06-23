import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

export default function Login() {
  let [loginData,setLoginData] = useState({})
  let[error,setError] =useState({})
  let navigate =useNavigate()

let handelChange=(e)=>{

  let{name,value} = e.target;
  setLoginData({...loginData,[name]:value})

}

// console.log(loginData);

let handleSubmit = (event) => {
  console.log(loginData);
  
};


// validation
let handleValidate=(loginData)=>{
  let formError={}

 if(!loginData.email){
  formError.email= "Email is require"
 }
 if(!loginData.password){
  formError.password= "Password is require"
 }
 
  
  else{
  console.log("Api data", loginData)
  navigate("/panel");
 }


console.log(formError);
 setError(formError);

}

let handelClick =() =>{
  handleValidate(loginData);
  console.log(loginData)

}
// console.log(error.email)
// console.log(error.password)
// console.log(error.confirmPassword)


  return (
  <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-800 to-pink-700 flex justify-center items-center px-4">
    <div className="w-full max-w-md">
      <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-3xl overflow-hidden">
        
        {/* Header */}
        <div className="text-center py-8 px-6">
          <div className="w-20 h-20 mx-auto bg-white/20 rounded-full flex items-center justify-center mb-4">
            <svg
              className="w-10 h-10 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A9 9 0 1118.88 17.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>

          <h1 className="text-3xl font-bold text-white">
            Welcome Back
          </h1>

          <p className="text-gray-200 mt-2">
            Login to your account
          </p>
        </div>

        {/* Form */}
        <div className="px-8 pb-8 space-y-5">

          <div>
            <label className="block text-white mb-2 text-sm font-medium">
              Email Address
            </label>

            <input
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-pink-400"
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={handelChange}
            />

            <p className="text-red-300 text-sm mt-1">
              {error.email}
            </p>
          </div>

          <div>
            <label className="block text-white mb-2 text-sm font-medium">
              Password
            </label>

            <input
              className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-pink-400"
              name="password"
              type="password"
              placeholder="Enter your password"
              onChange={handelChange}
            />

            <p className="text-red-300 text-sm mt-1">
              {error.password}
            </p>
          </div>

          

            

          <button
            onClick={handelClick}
            className="w-full bg-white text-purple-700 font-semibold py-3 rounded-xl hover:bg-gray-100 transition duration-300 shadow-lg cursor-pointer"
          >
            Sign In
          </button>

          <div className="relative">
            <div className="border-t border-white/20"></div>
            <span className="absolute left-1/2 -translate-x-1/2 -top-3 px-3 text-sm text-gray-300">
              OR
            </span>
          </div>

          

          <div className="text-center pt-2">
            <Link
              to="/signup"
              className="text-pink-300 hover:text-pink-200 font-medium"
            >
              Don't have an account? Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
}