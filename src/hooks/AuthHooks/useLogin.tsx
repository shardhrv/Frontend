import { useNavigate } from "react-router-dom";
import { loginAPI } from "../../services/AuthService";
import toast from "react-hot-toast";
import { useUserContext } from "../../context/UserContext";

export const useLogin = () => {
  const navigate = useNavigate();
  const { setUser } = useUserContext();

  const loginUser = async (username: string, password: string) => {
    try {
      const res = await loginAPI(username, password);
      if (res) {
        setUser(res); // Update user context
        toast.success("Login Success!");
        navigate("/search");
      }
    } catch (error) {
      toast.error("Invalid email or password");
    }
  };

  return { loginUser };
};
