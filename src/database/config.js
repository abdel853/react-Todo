// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRxpV5KjCxw2gCzl9mKz98QdCbmPGyGoQ",
  authDomain: "todo-app-2118e.firebaseapp.com",
  projectId: "todo-app-2118e",
  storageBucket: "todo-app-2118e.appspot.com",
  messagingSenderId: "921517546003",
  appId: "1:921517546003:web:fbeeac6d8eda2635d3bde6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
