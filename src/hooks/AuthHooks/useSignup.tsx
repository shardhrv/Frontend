import { useNavigate } from "react-router-dom";
import { signupAPI } from "../../services/AuthService";
import toast from "react-hot-toast";
import { useUserContext } from "../../context/UserContext";

export const useSignup = () => {
  const navigate = useNavigate();
  const { setUser } = useUserContext();

  const signupUser = async (
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string
  ) => {
    try {
      const res = await signupAPI(username, firstName, lastName, password, email);
      if (res) {
        setUser(res); // Update user context
        toast.success("Signup Success!");
        navigate("/");
      }
    } catch (error) {
      toast.error("Server error occurred during signup");
    }
  };

  return { signupUser };
};