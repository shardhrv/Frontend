import { Link } from "react-router-dom";
import React from "react";
import LoginForm from "../../components/auth/LoginForm";
import LoginFormStub from "../../components/auth/LoginFormStub";

const LoginPage : React.FC = () => {
    return (
      <div className="bg-gray-100">
        {/* Logo */}
        <header className="absolute top-0 left-0 p-4">
          <img src="/src/assets/StuCo.svg" alt="StuCo Logo" className="h-12" />
        </header>
        {/* Login */}
        <div className="relative bg-white rounded-[10px] shadow-lg shadow-[#4A9B74]  flex flex-col justify-start items-center p-16 space-y-9 text-center">
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <h2 className="w-full text-center text-[#4A9B74] text-3xl font-extrabold whitespace-nowrap overflow-hidden text-ellipsis">
              Welcome to StuCo!
            </h2>
          </div>
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md shadow-md">
              <LoginForm />
              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-white text-gray-500">Don't have an account?</span>
                  </div>
                </div>
                <div className="mt-6">
                    Create Account
                </div>
              </div>
          </div>
        </div>
      </div>
    ); 
}

export default LoginPage;