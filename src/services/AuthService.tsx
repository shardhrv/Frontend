import { UserProfile } from "../models/UserProfile";
import { handleError } from "../helper/ErrorHandler";
import axios from "axios";

// Ensure cookies are included with every request
axios.defaults.withCredentials = true;

// Login API
export const loginAPI = async (username: string, password: string): Promise<UserProfile | null> => {
  try {
    const res = await axios.post<UserProfile>("/api/auth/login", {
      username,
      password,
    });

    return res.data;
  } catch (error) {
    handleError(error);
    return null;
  }
};

// Signup API
export const signupAPI = async (
  username: string,
  firstName: string,
  lastName: string,
  password: string,
  email: string
): Promise<UserProfile | null> => {
  try {
    const res = await axios.post<UserProfile>("/api/auth/signup", {
      username,
      firstName,
      lastName,
      password,
      email,
    });

    return res.data;
  } catch (error) {
    handleError(error);
    return null;
  }
};

// Verify Authentication API
export const verifyAuthAPI = async (): Promise<UserProfile | null> => {
  try {
    const res = await axios.get<UserProfile>("/api/auth/verify");
    return res.data;
  } catch (error) {
    handleError(error);
    return null;
  }
};

// Logout API
export const logoutAPI = async (): Promise<void> => {
  try {
    await axios.post("/api/auth/logout");
  } catch (error) {
    handleError(error);
  }
};