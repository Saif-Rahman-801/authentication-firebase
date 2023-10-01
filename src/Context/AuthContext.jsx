import PropTypes from "prop-types";
import { createContext } from "react";
import auth from "../Firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const AuthProvider = createContext(null);

const AuthContext = ({ children }) => {
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
      console.log(result.user);
    } catch (error) {
      console.log(error);
    }
  };

  const value = { createUser, signInUser };
  return (
    <AuthProvider.Provider value={value}>{children}</AuthProvider.Provider>
  );
};

AuthContext.propTypes = {
  children: PropTypes.any,
};

export default AuthContext;
