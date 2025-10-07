import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserType } from "./types/userType";

const USER_KEY = "@user_data";

export const saveUser = async (user: UserType): Promise<void> => {
  try {
    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
    console.log("User salvo:", user);
  } catch (error) {
    console.error("Erro ao salvar usuário:", error);
  }
}

export const getUser = async (): Promise<UserType | null> => {
  try {
    const data = await AsyncStorage.getItem(USER_KEY);
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.error("Erro ao carregar usuário:", error);
    return null;
  }
}

export const removeUser = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(USER_KEY);
  } catch (error) {
    console.error("Erro ao remover usuário:", error);
  }
}
