import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function SignUp() {
  const [signupData, setSignupData] = useState({});
  const [error, setError] = useState({});
  let navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSignupData({
      ...signupData,
      [name]: value,
    });
  };

  const handleValidate = (signupData) => {
    let formError = {};

    if (!signupData.name) {
      formError.name = "Name is required";
    }

    if (!signupData.email) {
      formError.email = "Email is required";
    }

    if (!signupData.password) {
      formError.password = "Password is required";
    }

    if (!signupData.confirmPassword) {
      formError.confirmPassword = "Confirm Password is required";
    } 
    else if (signupData.password !== signupData.confirmPassword) {
      formError.wrongpass = "The confirm password does not match";
    }
    else{
      axios.post("http://localhost:5000/api/signup", signupData)
      .then((res)=>{
        alert("User Created"); 
        navigate("/");

      })
      .catch((err)=>{
        console.log(err.response.data);
        
      })

    }
    setError(formError);

    if (Object.keys(formError).length === 0) {
      console.log("Signup Data:", signupData);
    }
    
  };

  const handleClick = () => {
    handleValidate(signupData);
  };

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
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </div>

            <h1 className="text-3xl font-bold text-white">
              Create Account
            </h1>

            <p className="text-gray-200 mt-2">
              Join us and get started today
            </p>
          </div>

          {/* Form */}
          <div className="px-8 pb-8 space-y-5">

            {/* Name */}
            <div>
              <label className="block text-white mb-2 text-sm font-medium">
                Full Name
              </label>

              <input
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-pink-400"
                type="text"
                name="name"
                placeholder="Enter your full name"
                onChange={handleChange}
              />

              <p className="text-red-300 text-sm mt-1">
                {error.name}
              </p>
            </div>

            {/* Email */}
            <div>
              <label className="block text-white mb-2 text-sm font-medium">
                Email Address
              </label>

              <input
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-pink-400"
                type="email"
                name="email"
                placeholder="Enter your email"
                onChange={handleChange}
              />

              <p className="text-red-300 text-sm mt-1">
                {error.email}
              </p>
            </div>

            {/* Password */}
            <div>
              <label className="block text-white mb-2 text-sm font-medium">
                Password
              </label>

              <input
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-pink-400"
                type="password"
                name="password"
                placeholder="Create password"
                onChange={handleChange}
              />

              <p className="text-red-300 text-sm mt-1">
                {error.password}
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-white mb-2 text-sm font-medium">
                Confirm Password
              </label>

              <input
                className="w-full px-4 py-3 rounded-xl bg-white/20 border border-white/30 text-white placeholder-gray-300 outline-none focus:ring-2 focus:ring-pink-400"
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
                onChange={handleChange}
              />

              <p className="text-red-300 text-sm mt-1">
                {error.confirmPassword}
              </p>

              <p className="text-red-300 text-sm mt-1">
                {error.wrongpass}
              </p>
            </div>

            {/* Button */}
            <button
              onClick={handleClick}
              className="w-full bg-white text-purple-700 font-semibold py-3 rounded-xl hover:bg-gray-100 transition duration-300 shadow-lg cursor-pointer"
            >
              Create Account
            </button>

            {/* Divider */}
            <div className="relative">
              <div className="border-t border-white/20"></div>
              <span className="absolute left-1/2 -translate-x-1/2 -top-3 px-3 text-sm text-gray-300">
                OR
              </span>
            </div>
            

            {/* Login Link */}
            <div className="text-center pt-2">
              <Link
                to="/"
                className="text-pink-300 hover:text-pink-200 font-medium"
              >
                Already have an account? Sign In
              </Link>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}