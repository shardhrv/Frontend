import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/StuCoLogo.png"; // Update with the correct path to your logo image

const CreateAnAccount: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPasswordChange = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="bg-[#e3f2eb] flex justify-center w-full min-h-screen">
      <div className="bg-white border border-solid border-black w-full max-w-[1440px] h-full relative">
        {/* Header with logo */}
        <header className="flex items-center absolute top-11 left-[150px]">
          <div className="relative w-[161px] h-11 flex items-center">
            <img
              src={logoImage} // Using the imported logo image
              alt="StuCo Logo"
              className="w-11 h-11 object-cover"
            />
            <div className="ml-2 text-green-500 font-bold text-xl">StuCo</div>
          </div>
        </header>

        {/* Main container */}
        <div className="absolute w-[922px] top-[125px] left-1/2 transform -translate-x-1/2 bg-white rounded-[32px] shadow-lg p-8">
          {/* Title and subtitle centered over entire container */}
          <div className="mb-8 text-center">
            <h1 className="text-black font-bold text-[34px] leading-[48px]">
              Create an account
            </h1>
            <p className="mt-2 text-gray-500 text-sm leading-5">
              Enter your details to proceed further
            </p>
          </div>

          {/* Flex container to arrange form and image side by side */}
          <div className="flex">
            {/* Left side (form) */}
            <div className="w-3/5 pr-8">
              {/* Form */}
              <form>
                {/* First name and Last name inputs */}
                <div className="flex space-x-4 mb-4">
                  {/* First name input */}
                  <div className="w-1/2">
                    <label
                      htmlFor="firstName"
                      className="block text-gray-500 text-sm mb-1"
                    >
                      First Name *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      placeholder="First Name"
                      className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                    />
                  </div>

                  {/* Last name input */}
                  <div className="w-1/2">
                    <label
                      htmlFor="lastName"
                      className="block text-gray-500 text-sm mb-1"
                    >
                      Last Name *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      placeholder="Last Name"
                      className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                    />
                  </div>
                </div>

                {/* Email address input */}
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-gray-500 text-sm mb-1"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Email address shown here"
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  />
                </div>

                {/* Password input */}
                <div className="mb-4">
                  <label
                    htmlFor="password"
                    className="block text-gray-500 text-sm mb-1"
                  >
                    Password *
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Password"
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  />
                </div>

                {/* Confirm password input */}
                <div className="mb-4">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-gray-500 text-sm mb-1"
                  >
                    Confirm your password *
                  </label>
                  <input
                    type={showPassword ? "text" : "password"}
                    id="confirmPassword"
                    placeholder="Confirm your password"
                    className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:outline-none focus:border-green-500"
                  />
                </div>

                {/* Password hint */}
                <p className="text-gray-500 text-sm leading-5 mb-4">
                  Use 8 or more characters with a mix of letters, numbers &amp;
                  symbols
                </p>

                {/* "Show password" label and checkbox */}
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    className="w-4 h-4 mr-2"
                    id="show-password"
                    checked={showPassword}
                    onChange={handleShowPasswordChange}
                  />
                  <label
                    htmlFor="show-password"
                    className="text-gray-500 text-sm leading-5"
                  >
                    Show password
                  </label>
                </div>
              </form>
            </div>

            {/* Right side (image) */}
            <div className="w-2/5 flex items-center justify-center">
              <img
                src={logoImage} // Using the imported logo image
                alt="Illustration"
                className="w-[253px] h-[263px] object-cover"
              />
            </div>
          </div>

          {/* Create account button and "Log in instead" link centered */}
          <div className="mt-8 text-center">
            <button
              type="submit"
              className="h-14 w-1/2 rounded-[13px] bg-green-500 text-white font-bold text-lg"
            >
              Create an account
            </button>
            <div className="mt-4">
              <Link
                to="/login"
                className="text-gray-500 underline text-sm leading-5"
              >
                Log in instead
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAnAccount;
