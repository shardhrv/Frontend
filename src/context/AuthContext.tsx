import { UserProfile } from "../models/UserProfile";

type UserContextType = {
    // States
    user: UserProfile | null;
    token: string | null;
    // Methods
    registerUser: (email: string, username: string, password: string) => void;
    loginUser: (username: string, password: string) => void;
    logout: () => void;
    isLoggedIn: () => boolean;
};

