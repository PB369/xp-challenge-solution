import { db } from "@/config/firebase";
import { UserType } from "@/utils/types/userType"; // ajuste conforme seu modelo
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";

const usersCollection = collection(db, "users");

// Criar usuário
export async function createUser(uid: string, userData: UserType) {
  await setDoc(doc(usersCollection, uid), {
    ...userData,
    createdAt: new Date(),
  });
}

// Obter usuário
export async function getUser(uid: string) {
  const snapshot = await getDoc(doc(usersCollection, uid));
  if (snapshot.exists()) return snapshot.data() as UserType;
  return null;
}

// Atualizar usuário (por exemplo, adicionar portfólio)
export async function updateUser(uid: string, data: Partial<UserType>) {
  await updateDoc(doc(usersCollection, uid), data);
}

// Deletar usuário
export async function deleteUser(uid: string) {
  await deleteDoc(doc(usersCollection, uid));
}
