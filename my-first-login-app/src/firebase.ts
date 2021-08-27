// Import the functions you need from the SDKs you need
// import { useContext,createContext } from "react";
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN ,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGINGSENDERID,
  appId: process.env.REACT_APP_APPID,
  measurementId: process.env.REACT_APP_MEASUREMENTID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// const AuthContext = createContext()

// export const useAuth = () => {
//     return useContext(AuthContext)
// }

// export const AuthProvider = ({children}) => 
// {
//     const [user, setUser] = useStat
// }

// const analytics = getAnalytics(app);