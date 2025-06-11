import React, { createContext, useContext, useState } from 'react';
import { useAuth } from './AuthContext';
import { User } from '@/utils/userType';

type UserContextType = {
  user: User | null,
  setUser: React.Dispatch<React.SetStateAction<User | null>>,
  setUserProperty: (property: keyof User, value: string | number) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  const setUserProperty = (property: keyof User, value: string | number) => {
    if(!user) return;
    setUser({...user, [property]: value});
  }

  return (
    <UserContext.Provider value={{ user, setUser, setUserProperty }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser deve estar dentro de UserProvider');
  return context;
};
