// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChuIqow8h8LfMDEecCBa5iyD9tw5EKKPc",
  authDomain: "ai-travel-app-1ed8b.firebaseapp.com",
  projectId: "ai-travel-app-1ed8b",
  storageBucket: "ai-travel-app-1ed8b.appspot.com",
  messagingSenderId: "150489861460",
  appId: "1:150489861460:web:5c3f48400868e1802d8cc1",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
export const db = getFirestore(app);
