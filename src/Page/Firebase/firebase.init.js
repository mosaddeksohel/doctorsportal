import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";


const initializeAuthenticatiion = () => {
    initializeApp(firebaseConfig);
}


export default initializeAuthenticatiion;