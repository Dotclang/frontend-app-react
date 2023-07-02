import { initializeApp } from "firebase/app";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirebaseConfig } from "./firebaseConfig";

const app = initializeApp(getFirebaseConfig());

// Add or Remove authentification methods here.
export const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
googleProvider.addScope("profile");
googleProvider.addScope("email");
googleProvider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  return signInWithPopup(auth, googleProvider);
};

export const userStateListener = (callback) => {
  return onAuthStateChanged(auth, callback);
};

export const signOutUser = () => {
  signOut(auth);
};
