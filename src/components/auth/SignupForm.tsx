import { useSignup } from "../../hooks/AuthHooks/useSignup";
import { useState } from "react";
import { MdAccountCircle, MdPassword, MdOutlineMail, MdDriveFileRenameOutline } from "react-icons/md";
import BaseButton from "../ui/BaseButton";
import BaseInput from "../ui/BaseInput";

const SignUpForm: React.FC = () => {
  interface FormData {
    username: string;
    firstName: string;
    lastName: string;
    password: string;
    email: string;
  }

  const [formData, setFormData] = useState<FormData>({
    username: "",
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });

  const { signupUser, isPending } = useSignup();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { username, firstName, lastName, email, password } = formData;
    signupUser(firstName, lastName, username, email, password);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div className="w-full text-left text-[#4A9B74] whitespace-nowrap overflow-hidden text-ellipsis mb-6">
        Sign up for an account
      </div>
      <form onSubmit={handleSubmit} className="space-y-4 w-full max-w-md">
        {/* Username Field */}
        <div className="flex flex-col items-start space-y-2 py-2">
          <label className="input input-bordered rounded flex items-center gap-2 w-full">
            <BaseInput
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleInputChange}
              required
            />
            <MdAccountCircle className="text-3xl" />
          </label>
        </div>

        {/* First Name Field */}
        <div className="flex flex-col items-start space-y-2 py-2">
          <label className="input input-bordered rounded flex items-center gap-2 w-full">
            <BaseInput
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleInputChange}
              required
            />
            <MdDriveFileRenameOutline className="text-3xl" />
          </label>
        </div>

        {/* Last Name Field */}
        <div className="flex flex-col items-start space-y-2 py-2">
          <label className="input input-bordered rounded flex items-center gap-2 w-full">
            <BaseInput
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleInputChange}
              required
            />
            <MdDriveFileRenameOutline className="text-3xl" />
          </label>
        </div>

        {/* Email Field */}
        <div className="flex flex-col items-start space-y-2 py-2">
          <label className="input input-bordered rounded flex items-center gap-2 w-full">
            <BaseInput
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <MdOutlineMail className="text-3xl" />
          </label>
        </div>

        {/* Password Field */}
        <div className="flex flex-col items-start space-y-2 py-2">
          <label className="input input-bordered rounded flex items-center gap-2 w-full">
            <BaseInput
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              required
            />
            <MdPassword className="text-3xl" />
          </label>
        </div>

        {/* Submit Button */}
        <div className="flex flex-col items-start space-y-2 py-2">
          <BaseButton type="submit">
            {isPending ? "Loading..." : "Sign Up"}
          </BaseButton>
        </div>
      </form>
    </div>
  );
};

export default SignUpForm;
