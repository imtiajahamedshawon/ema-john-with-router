import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
const initializAuthentication = () => {
    initializeApp(firebaseConfig);
}
export default initializAuthentication;

/*  step for authentication
-------------------
Step-1 : Inital Setup

1. firwbase : create project
2. create web app
3. get configuration
4.initializ firebase
5. Enable auth method
-----------------------

Step-2 : set up component
1. Create login component
2.Create Register component
3. Create Route for Login and Register
-------------------------


Step -3 :set up Auth System
1. set up sing in method
2. set up sing out method
3. user state
4.special observer
5.return necessary methods and states from useFriebase
-------------------------


step-4 : create Auth Context Hooks(useAuth)
1.create a auth context
2.create context Provider
3.use auth Provider
4.set context Provider context value
5.create useAuth Hook
-----------------------


Step 5:create private Route
1. create private Route
2.set Private Route


















*/