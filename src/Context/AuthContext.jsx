import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export const AuthProvider = createContext(null);

const AuthContext = ({ children }) => {
  const [user, setUser] = useState(null);

  const createUser = async (email, password) => {
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  const signInUser = async (email, password) => {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return console.log(result.user);
    } catch (error) {
      return console.log(error);
    }
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("observing ", currentUser);
      setUser(currentUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const logOut = () => {
    return signOut(auth)
  }

  const value = { createUser, signInUser, user, logOut };
  return (
    <AuthProvider.Provider value={value}>{children}</AuthProvider.Provider>
  );
};

AuthContext.propTypes = {
  children: PropTypes.any,
};

export default AuthContext;
