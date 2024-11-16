import { createContext, useEffect, useState } from "react";
import { UserProfile } from "../models/UserProfile";
import { useNavigate } from "react-router-dom";
import { loginAPI, signupAPI } from "../services/AuthService";
import toast from "react-hot-toast";

type UserContextType = {
    // States
    user: UserProfile | null;
    token: string | null;
    // Methods
    registerUser: (firstName: string, lastName: string, username: string, email: string, password: string) => void;
    loginUser: (username: string, password: string) => void;
    logout: () => void;
    isLoggedIn: () => boolean;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
    const navigate = useNavigate();
    const [token, setToken] = useState<string | null>(null);
    const [user, setUser]  = useState<UserProfile | null>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const user = localStorage.getItem("user");
        const token = localStorage.getItem("token");
        if (user && token) {
            setUser(JSON.parse(user));
            setToken(token); 
        }
        setIsReady(true);
    }, []);

    const registerUser = async (
        firstName: string,
        lastName: string,
        username: string,
        email: string,
        password: string
    ) => {
        await signupAPI(firstName, lastName, username, email, password)
          .then((res) => {
            if (res) {
              localStorage.setItem("token", res?.data.token);
              const userObj = {
                firstName: res?.data.firstName,
                lastName: res?.data.lastName,
                username: res?.data.username,
                email: res?.data.email,
              };
              localStorage.setItem("user", JSON.stringify(userObj));
              setToken(res?.data.token!);
              setUser(userObj!);
              toast.success("Login Success!");
              navigate("/search");
            }
          })
          .catch((e) => toast.error("Server error occured"));
    };

    const loginUser = async (username: string, password: string) => {
        await loginAPI(username, password)
          .then((res) => {
            if (res) {
              localStorage.setItem("token", res?.data.token);
              const userObj = {
                firstName: res?.data.firstName,
                lastName: res?.data.lastName,
                username: res?.data.username,
                email: res?.data.email,
              };
              localStorage.setItem("user", JSON.stringify(userObj));
              setToken(res?.data.token!);
              setUser(userObj!);
              toast.success("Login Success!");
              navigate("/search");
            }
          })
          .catch((e) => toast.error("Server error occured"));
      };
    
      const isLoggedIn = () => {
        return !!user;
    };

    const logout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        setToken("");
        navigate("/");
    };
    
    return (
        <UserContext.Provider
            value={{ loginUser, user, token, logout, isLoggedIn, registerUser }}
        >
            {isReady ? children : null}
        </UserContext.Provider>
    );
};