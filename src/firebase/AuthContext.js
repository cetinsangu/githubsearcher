import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import { toast } from 'react-toastify';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState({});
  const createUser = (email, password) => {
    const successfullSignUp = createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return successfullSignUp;
  };
  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    const logout = await signOut(auth);
    setUser(null);
    toast.success('Logout successful', {
      autoClose: 1000,
    });
    return logout;
  };
  const signInWithGithub = async () => {
    const provider = new GithubAuthProvider();
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
    toast.success('Signed in with Github', {
      autoClose: 1000,
    });
    return result;
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
    toast.success('Signed in with Google', {
      autoClose: 1000,
    });
    return result;
  };

  const signInWithTwitter = async () => {
    const provider = new TwitterAuthProvider();
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
    toast.success('Signed in with Twitter', {
      autoClose: 1000,
    });
    return result;
  };

  useEffect(() => {
    const userCredentials = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      userCredentials();
    };
  }, []);
  return (
    <AuthContext.Provider
      value={{
        createUser,
        signIn,
        user,
        logout,
        signInWithGithub,
        signInWithGoogle,
        signInWithTwitter,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
