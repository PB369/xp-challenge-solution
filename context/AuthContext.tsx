import { User } from "@/utils/types/userType";
import { createContext, ReactNode, useContext, useEffect } from "react";
import { useUser } from "./UserContex";
import { getUser, saveUser, removeUser } from "@/utils/userHelper";

type AuthContextType = {
  user: User | null;
  // isAuthenticated: boolean,
  // register: (userData: User) => void,
  signUp: (username: string, email: string, password: string) => Promise<void>;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => Promise<void>,
}

const AuthContext = createContext<AuthContextType | undefined>({
  user: null,
  signUp: async () => {},
  login: async () => false,
  logout: async () => {},
});

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { user, setUser } = useUser();
  // const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // const [user, setUser] = useState<User | null>(null);

  // const register = (userAuthData: User) => {
  //   const newUser = {
  //       ...userAuthData,
  //       isAuthenticated: false,
  //       isFirstAccess: true,
  //   }
  //   setUser(newUser);
  //   setIsAuthenticated(false);
  // };

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

  const login = async (email: string, password: string) => {
    const storedUser = await getUser();
    
    if(storedUser && storedUser.email === email && storedUser.password === password) {
      const loginUser: User = {
        ...storedUser,
        isAuthenticated: true,
        isFirstAccess: user === null,
      }
  
      await saveUser(loginUser);
      setUser(loginUser);

      return true
    } else {
      console.warn("Usuário não encontrado, faça o cadastro primeiro");
      return false
    }

    // if(user && user.username === username && user.password === password){
    //   const updatedUser = { ...user, isAuthenticated: true }
    //   setUser(updatedUser);
    //   setIsAuthenticated(true);
    //   return true;
    // } 
    // return false;
  }

  const logout = async () => {
    await removeUser();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, signUp, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
}