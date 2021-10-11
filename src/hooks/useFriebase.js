import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializAuthentication from "../Firebase/firebase.init";
initializAuthentication();


const useFriebase = () =>{
    const [user, setUser] = useState({});
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
    const singInUsingGoogle = () => {
       return signInWithPopup(auth, googleProvider)
        .then(result =>{
            console.log(result.user);
        })

    }

        const logOut = () => {
            signOut(auth)
        .then(()=>{
            setUser({})

        })
    }



    useEffect(()=>{
        
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    setUser(user)
                }
              });
    },[])
    return{
        user,
        singInUsingGoogle,
        logOut
    }

}
export default useFriebase;