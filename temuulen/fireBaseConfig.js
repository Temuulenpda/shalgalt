
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
} from "firebase/firestore";
//
const firebaseConfig = {
  apiKey: "AIzaSyB_YhTbwzV8fXvFgnyINlihm85ncpDGFRU",
  authDomain: "test2-e4a32.firebaseapp.com",
  projectId: "test2-e4a32",
  storageBucket: "test2-e4a32.firebasestorage.app",
  messagingSenderId: "740470270042",
  appId: "1:740470270042:web:07fc46b1c0336aa86cd063",
  measurementId: "G-1R3CLT1NEC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const signUpFunction = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.log(error.code, error.message);
    throw error;
    // ..
  }
};
export const signInFunction = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.log(error.code, error.message);
    throw error;
    // ..
  }
};
const db = getFirestore(app);
export const getHobbies = async () => {
  try {
    const snapshot = await getDocs(collection(db, "hobbies"));
    const hobbies = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("hobbies:", hobbies);
    return hobbies;
  } catch (error) {
    console.log("Error getting hobbies:", error);
  }};
  export const getCapabilities = async () => {
  try {
    const snapshot = await getDocs(collection(db, "capabilities"));
    const capabilities = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log("capabilities:", capabilities);
    return capabilities;
  } catch (error) {
    console.log("Error getting capabilities:", error);
  }
};


