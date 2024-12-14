import { useNavigate } from "react-router-dom";
import { logoutAPI } from "../../services/AuthService";
import toast from "react-hot-toast";
import { useUserContext } from "../../context/UserContext";

export const useLogout = () => {
  const navigate = useNavigate();
  const { setUser } = useUserContext();

  const logout = async () => {
    try {
      await logoutAPI();
      setUser(null); // Clear user context
      navigate("/");
    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return { logout };
};
