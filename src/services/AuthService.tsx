// api/auth.ts
import { UserProfileToken } from "../models/UserProfile";
import { handleError } from "../helper/ErrorHandler";
import axios from "axios";

export const loginAPI = async (username: string, password: string) => {
    try {
      const data = await axios.post<UserProfileToken>("/api/auth/login", {
        username: username,
        password: password,
      });

      return data;
    } catch (error) {
      handleError(error);
    }
  };

export const signupAPI = async (
    username: string,
    firstName: string,
    lastName: string,
    password: string,
    email: string 
) => {
    try {
        const data = await axios.post<UserProfileToken>("/api/auth/signup", {
            username: username,
            firstName: firstName,
            lastName: lastName,
            password: password,
            email: email 
        });
        return data;
    } catch (error) {
        handleError(error);
    }
};