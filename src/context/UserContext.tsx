import { createContext, useContext, useEffect, useState } from "react";
import { UserProfile } from "../models/UserProfile";
import { getUserProfileAPI } from "../services/AuthService";
import { handleError } from "../helper/ErrorHandler";

type UserContextType = {
    user: UserProfile | null;
    setUser: React.Dispatch<React.SetStateAction<UserProfile | null>>;
};

type Props = { children: React.ReactNode };

const UserContext = createContext<UserContextType>({} as UserContextType);

export const useUserContext = (): UserContextType => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext must be used within a UserProvider");
  }
  return context;
};

export const UserContextProvider = ({ children }: Props) => {
    const [user, setUser]  = useState<UserProfile | null>(null);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        const fetchUser = async () => {
          try {
            const res = await getUserProfileAPI();
            if (res) {
              setUser(res);
            }
          } catch (error) {
            handleError(error);
          } finally {
            setIsReady(true);
          }
        };
        fetchUser();
      }, []);
    
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {isReady ? children : null}
    </UserContext.Provider>
  );
};
