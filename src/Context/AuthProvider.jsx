

import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config.js";


export const UserContext = createContext();
const auth = getAuth(app);

const Authcontext = ({ children }) => {
  const name = "bashar ahmed";
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //signup with email & password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  //End signup email & password

  //Sign in with email & password

  const signinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //end sign in
  //reset Password
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };

  //end reset password
  //start sign out
  const logOut = () => {
    return signOut(auth);
  };

  //end sign out

  //update user name

  const updateUser = (profile) => {
    return updateProfile(auth.currentUser, profile);
  };

  //update user name

  //get current sign in user

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  }, []);

  //end sign in user

  const userInfo = {
    name,
    user,
    loading,
    createUser,
    updateUser,
    signinUser,
    logOut,
    resetPassword
  };
  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default Authcontext;