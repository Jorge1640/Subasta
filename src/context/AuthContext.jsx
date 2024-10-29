import { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../firebase/firebaseConfig.js";
import { 
    signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, 
    sendPasswordResetEmail, 
    updateProfile as firebaseUpdateProfile, 
    signOut as firebaseSignOut,
    signInWithPopup 
} from "firebase/auth";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null); 

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });
        return unsubscribe;
    }, []);

    const signUpWithEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password);

    const loginWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);

    const signUpWithGoogle = () => signInWithPopup(auth, googleProvider); // <-- Usa signInWithPopup para iniciar sesión con Google

    const resetPassword = (email) => sendPasswordResetEmail(auth, email);

    const updateProfile = (name) => {
        if (user) {
            return firebaseUpdateProfile(user, { displayName: name });
        }
    };

    const signOut = () => firebaseSignOut(auth);

    return (
        <AuthContext.Provider
            value={{
                user,
                signUpWithEmail,
                loginWithEmail,
                signUpWithGoogle,
                resetPassword,
                updateProfile,
                signOut, 
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
