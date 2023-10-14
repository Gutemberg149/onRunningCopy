// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASAAGvtBoSs7Rhf-4YU_8w-J9SoJqe9JY",
  authDomain: "onrunning-a6ed9.firebaseapp.com",
  projectId: "onrunning-a6ed9",
  storageBucket: "onrunning-a6ed9.appspot.com",
  messagingSenderId: "516981182410",
  appId: "1:516981182410:web:eea04fbc8e9291a6bc0933",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;
