import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAbXnT0nocSltYaTNKwWfLWLuAQszwYbsU",
    authDomain: "my-capstone-project-13047.firebaseapp.com",
    projectId: "my-capstone-project-13047",
    storageBucket: "my-capstone-project-13047.appspot.com",
    messagingSenderId: "882697985015",
    appId: "1:882697985015:web:43df9237d9c9ae3f312cf2",
    measurementId: "G-5LG0WSNMZN"
  };

export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
// const db = getFirestore(app);