// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {
//   getAuth,
//   getReactNativePersistence,
//   initializeAuth,
// } from "firebase/auth";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// import { getFirestore } from "firebase/firestore";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyChuIqow8h8LfMDEecCBa5iyD9tw5EKKPc",
//   authDomain: "ai-travel-app-1ed8b.firebaseapp.com",
//   projectId: "ai-travel-app-1ed8b",
//   storageBucket: "ai-travel-app-1ed8b.appspot.com",
//   messagingSenderId: "150489861460",
//   appId: "1:150489861460:web:5c3f48400868e1802d8cc1",
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);
// // export const auth = getAuth(app, {
// //   persistence: getReactNativePersistence(AsyncStorage),
// // });
// export const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });
// export const db = getFirestore(app);

import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyChuIqow8h8LfMDEecCBa5iyD9tw5EKKPc",
  authDomain: "ai-travel-app-1ed8b.firebaseapp.com",
  projectId: "ai-travel-app-1ed8b",
  storageBucket: "ai-travel-app-1ed8b.appspot.com",
  messagingSenderId: "150489861460",
  appId: "1:150489861460:web:5c3f48400868e1802d8cc1",
};

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Initialize Auth with React Native Persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

// Initialize Firestore
const db = getFirestore(app);

export { app, auth, db };
