import { useEffect, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";


const googleProvider = new GoogleAuthProvider();
const auth = getAuth(app);


const useFirebase = () => {
    const [user, setUser] = useState({});


    const signInWithGoogle = () =>{
        signInWithPopup(auth, googleProvider )
        .then(result =>{
            const user = result.user;
            setUser(user);
            console.log(user);
        })
        .catch()

    }
    
    const handleSignOut = () =>{
        signOut(auth)
        .then(()=>{})
    }

    // for get the current user information then user the information in different routes 
    useEffect(()=>{
        onAuthStateChanged(auth, user=>{
            setUser(user)
        })
    },[])
    // return [user, setUser];
    return {user, signInWithGoogle, handleSignOut}

}

export default useFirebase