import { createContext, ReactNode, useContext, useState } from "react";

type User = {
  username: string,
  password: string,
}

type AuthContextType = {
  isAuthenticated: boolean,
  user: User | null,
  register: (userData: User) => void,
  login: (username: string, password: string) => boolean;
  logout: () => void,
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const register = (userData: User) => {
    setUser(userData);
    setIsAuthenticated(false);
  };

  const login = (username: string, password: string) => {
    if(user && user.username === username && user.password === password){
      setIsAuthenticated(true);
      return true;
    } 
    return false;
  }

  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}