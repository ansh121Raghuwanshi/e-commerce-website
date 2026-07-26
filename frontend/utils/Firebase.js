import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY ,
  authDomain: "loginonecart-5c282.firebaseapp.com",
  projectId: "loginonecart-5c282",
  storageBucket: "loginonecart-5c282.firebasestorage.app",
  messagingSenderId: "175639730615",
  appId: "1:175639730615:web:95d999f0e5b84fcea8f032"
};

const app = initializeApp(firebaseConfig);
const auth= getAuth(app)
const provider = new GoogleAuthProvider()

export{auth,provider}