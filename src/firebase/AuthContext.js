import { createContext, useContext, useState, useEffect } from 'react';
import { auth } from './firebase';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GithubAuthProvider,
  GoogleAuthProvider,
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
    return logout;
  };

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);

      return result;
    } catch (error) {
      toast.error(error.message);
    }
  };
  const signInWithGithub = async () => {
    const provider = new GithubAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);

      return result;
    } catch (error) {
      toast.error(error.message);
    }
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
        signInWithGoogle,
        signInWithGithub,
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
