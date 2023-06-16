import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAztjt7k6Jd6L1gy7SFAyig5Peco214rrg",
  authDomain: "we-chat-app-59aef.firebaseapp.com",
  projectId: "we-chat-app-59aef",
  storageBucket: "we-chat-app-59aef.appspot.com",
  messagingSenderId: "198159345230",
  appId: "1:198159345230:web:d5a2432fe4184d6906c51f"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);