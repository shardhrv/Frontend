import { AxiosError } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signupAPI } from "../../services/AuthService";
import toast from "react-hot-toast";
import { useUserContext } from "../../context/UserContext";

export const useSignup = () => {
  const navigate = useNavigate();
  const { setUser } = useUserContext();
  const [isPending, setIsPending] = useState(false);

  const signupUser = async (
    firstName: string,
    lastName: string,
    username: string,
    email: string,
    password: string
  ) => {
    setIsPending(true); 
    try {
      const res = await signupAPI(username, firstName, lastName, password, email);
      if (res) {
        localStorage.setItem("user", JSON.stringify(res));
        setUser(res);
        toast.success("Signup Success!");
        navigate("/home");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.error ||
          "An unexpected error occurred"; 
        toast.error(errorMessage);
      } else {
        toast.error("An unexpected error occurred");
      }
    } finally {
      setIsPending(false);
    }
  };

  return { signupUser, isPending };
};