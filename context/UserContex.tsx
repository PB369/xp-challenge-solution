import { User } from '@/utils/types/userType';
import { saveUser } from '@/utils/userHelper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';

type UserContextType = {
  user: User | null,
  setUser: React.Dispatch<React.SetStateAction<User | null>>,
  changeUserProperty: (property: keyof User, value: string | number | boolean) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

const USER_STORAGE_KEY = '@user_data';

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(()=>{
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem(USER_STORAGE_KEY);
        if(storedUser){
          setUser(JSON.parse(storedUser));
        }
      } catch (error) {
        Alert.alert('Error', `An Error occurred while trying to load the user from AsyncStorage. ${error}`);
      }
    }
    loadUser();
  }, []);

  useEffect(() => {
    if (user) {
      saveUser(user);
    }
  }, [user]);

  const changeUserProperty = (property: keyof User, value: any) => {
    if(!user) return;
    setUser({...user, [property]: value});
  }

  return (
    <UserContext.Provider value={{ user, setUser, changeUserProperty }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw new Error('useUser deve estar dentro de UserProvider');
  return context;
};
