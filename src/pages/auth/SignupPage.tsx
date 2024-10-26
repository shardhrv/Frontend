import { Link } from "react-router-dom";
import React from "react";
import SignUpForm from "../../components/auth/SignupForm"; // Assuming SignUpForm is defined similar to the LoginForm

const SignUpPage: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      {/* Logo */}
      <header className="absolute top-0 left-0 p-4">
        <img src="/src/assets/StuCo.svg" alt="StuCo Logo" className="h-12" />
      </header>

      {/* Sign Up Form */}
      <div className="relative bg-white rounded-[10px] shadow-lg shadow-[#4A9B74] flex flex-col justify-start items-center p-16 space-y-9 text-center">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          <h2 className="w-full text-center text-[#4A9B74] text-3xl font-extrabold whitespace-nowrap overflow-hidden text-ellipsis">
            Join StuCo Today!
          </h2>
        </div>
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow-md">
          <SignUpForm />
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Already have an account?</span>
              </div>
            </div>
            <div className="mt-6">
              <Link to="/login">
                <button className="text-[#4A9B74] hover:underline">Sign In</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
