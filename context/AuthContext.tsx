import { User } from "@/utils/types/userType";
import { getUser, removeUser, saveUser } from "@/utils/userHelper";
import { createContext, ReactNode, useContext, useEffect } from "react";
import { useUser } from "./UserContex";

type AuthContextType = {
  user: User | null;
  signUp: (username: string, email: string, password: string) => Promise<void>;
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>,
  deleteAccount: () => Promise<void>,
}

const AuthContext = createContext<AuthContextType | undefined>({
  user: null,
  signUp: async () => {},
  signIn: async () => false,
  signOut: async () => {},
  deleteAccount: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { user, setUser } = useUser();

  useEffect(()=>{
    const loadUser = async () => {
      const storedUser = await getUser();
      if(storedUser){
        setUser(storedUser);
      }
    }
    loadUser();
  }, []);

  const signUp = async (username: string, email: string, password: string) => {
    const newUser: User = {
      id: Date.now().toString(),
      username,
      email,
      password,
      isAuthenticated: true,
      isFirstAccess: true,
    };
    await saveUser(newUser);
    setUser(newUser);
  };

  const signIn = async (email: string, password: string) => {
    const storedUser = await getUser();
    
    if(storedUser && storedUser.email === email && storedUser.password === password) {
      const loginUser: User = {
        ...storedUser,
        isAuthenticated: true,
      }
  
      await saveUser(loginUser);
      setUser(loginUser);

      return true;
    } else {
      console.warn("Usuário não encontrado, faça o cadastro primeiro");
      return false;
    }
  }

  const signOut = async () => {
    const storedUser = await getUser();
    if (storedUser) {
      const updatedUser: User = {
        ...storedUser,
        isAuthenticated: false,
      };
      await saveUser(updatedUser);
    }
    setUser(null);
  };

  const deleteAccount = async () => {
    await removeUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, signOut, deleteAccount }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}