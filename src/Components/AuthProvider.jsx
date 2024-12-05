import { createUserWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../../Firebase.init";



export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const creatUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logOut = (auth) => {
        signOut(auth)
    }
    const updateUserProfile = (updateData) => {
        console.log(updateData);
        return updateProfile(auth.currentUser)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        })
        return unSubscribe;
    }, [])
    const authInformation = {
        user,
        setUser,
        creatUser,
        logOut,
        updateUserProfile
    };
    return (
        <AuthContext.Provider value={authInformation}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;