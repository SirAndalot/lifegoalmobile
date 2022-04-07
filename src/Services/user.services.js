import { db } from "../fireabase-config";
import {
  collection,
  getDocs,
  getDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const userCollectionRef = collection(db, "Users");
class UserDataService {
  addUser = (newUser) => {
    return addDoc(userCollectionRef, newUser);
  };

  updateUser = (id, updateUser) => {
    const UserDoc = doc(db, "Users", id);
    return updateDoc(UserDoc, updateUser);
  };

  deleteUser = (id) => {
    const UserDoc = doc(db, "Users", id);
    return deleteDoc(UserDoc);
  };

  getALLUsers = () => {
    return getDocs(userCollectionRef);
  };

  getUser = (id) => {
    console.log("l", id);
    const UserDoc = doc(db, "Users", id);
    console.log(UserDoc);
    return getDoc(UserDoc);
  };
}

export default new UserDataService();
