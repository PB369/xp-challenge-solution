import { User } from "@/utils/userType";
import { createContext, ReactNode, useContext, useState } from "react";
import { useUser } from "./UserContex";

type AuthContextType = {
  isAuthenticated: boolean,
  register: (userData: User) => void,
  login: (username: string, password: string) => boolean;
  logout: () => void,
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { user, setUser } = useUser();
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const register = (userAuthData: User) => {
    const newUser = {
        ...userAuthData,
        isAuthenticated: false,
        isFirstAccess: true,
    }
    setUser(newUser);
    setIsAuthenticated(false);
  };

  const login = (username: string, password: string) => {
    if(user && user.username === username && user.password === password){
      const updatedUser = { ...user, isAuthenticated: true }
      setUser(updatedUser);
      setIsAuthenticated(true);
      return true;
    } 
    return false;
  }

  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}