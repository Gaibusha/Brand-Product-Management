import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC_VW1YxymVHjJffuMuxTMiRoJA999Cv74",
  authDomain: "brand-product-management.firebaseapp.com",
  projectId: "brand-product-management",
  storageBucket: "brand-product-management.firebasestorage.app",
  messagingSenderId: "864005821324",
  appId: "1:864005821324:web:2daeab9f104e362c393ca9"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result.user);
      // Handle user information here
    })
    .catch((error) => {
      console.error(error);
    });
};

export { auth, db,signInWithGoogle };
