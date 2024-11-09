import { Link } from "react-router-dom";
import logoImage from "../../assets/StuCoLogo.png";
import SignUpForm from "../../components/auth/SignupForm";

const SignupPage: React.FC = () => {
  return (
    <div className="bg-[#e3f2eb] flex justify-center w-full min-h-screen">
      <div className="bg-white border border-solid border-black w-full max-w-[1440px] h-full relative">
        {/* Header with logo */}

        <header className="flex items-center absolute top-0 left-0 p-5">
          <div className="flex items-center">
            <img
              src={logoImage} // Using the imported logo image
              alt="StuCoLogo"
              className="w-14 h-14 object-cover"
            />
            <div className="ml-2 text-[#4A9B74] font-bold italic text-2xl">
              StuCo
            </div>
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
              <SignUpForm />

              <div className="mt-4 text-center">
                <Link
                  to="/login"
                  className="text-[#4a9b74] underline text-sm leading-5 font-bold"
                >
                  Log in instead
                </Link>
              </div>
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
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
