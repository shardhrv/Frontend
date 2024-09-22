// src/components/AuthCard.tsx
import React, { useState } from 'react';

const AuthCard = () => {
  // State for email and password inputs
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Placeholder function for login/sign up button
  const handleAuthClick = () => {
    alert("Login/Sign Up functionality not implemented yet.");
  };

  return (
    <div className="w-[414px] h-[472.64px] relative bg-white rounded-[10px] shadow flex flex-col justify-start items-center p-4 space-y-4 text-center">
      {/* Updated styling for the title to stay on one line */}
      <div className="w-full text-center text-[#007bff] text-2xl font-bold whitespace-nowrap overflow-hidden text-ellipsis">
        Welcome to StuCo
      </div>
      <div className="w-[350px] h-[274.34px] relative flex flex-col">
        {/* Email Field */}
        <div className="flex flex-col items-start space-y-2">
          <label className="text-left text-[#333333] text-sm" htmlFor="email">
            Email:
          </label>
          <input
            id="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full h-[42.59px] px-4 bg-white rounded-lg border border-[#dddddd] focus:outline-none focus:ring-2 focus:ring-[#007bff]"
            placeholder="Enter your email"
          />
        </div>
        
        {/* Password Field */}
        <div className="flex flex-col items-start space-y-2 py-2">
          <label className="text-left text-[#333333] text-sm" htmlFor="password">
            Password:
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full h-[42.59px] px-4 bg-white rounded-lg border border-[#dddddd] focus:outline-none focus:ring-2 focus:ring-[#007bff]"
            placeholder="Enter your password"
          />
        </div>
        
        {/* Stay Connected Checkbox and Text */}
        <div className="flex justify-start items-center space-x-2 space-y-1 ">
          <input
            type="checkbox"
            className="w-[13px] h-[13px] bg-white rounded-sm border border-[#767676]"
          />
          <div className="flex flex-col grow">
            <div className="text-right text-sm text-[#333333] grow">Stay</div>
            <div className="text-right text-[13.16px] text-[#333333]">connected</div>
          </div>
        </div>
        
        {/* Login / Sign Up Button */}
        <div className= "w-[350px] h-[43.59px] flex py-5">
            <button
            className="w-[350px] h-[43.59px] bg-[#007bff] rounded-lg flex justify-center items-center cursor-pointer text-white text-[15.12px] font-medium hover:bg-blue-600"
            onClick={handleAuthClick}
            > 
            Login / Sign Up
            </button>
        </div>
      </div>
      <div className="w-[313.33px] mx-auto text-center text-[#666666] text-sm py-2">
        First time here? You'll be prompted to set up you
      </div>
      <div className="w-[126.59px] mx-auto text-center text-[#666666] text-sm">
        profile after sign up.
      </div>
    </div>
  );
};

export default AuthCard;
