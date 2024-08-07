// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
    getAuth,
    signInWithPopup,
    signInWithEmailAndPassword as firebaseSignInWithEmailAndPassword,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDV4qprheII-yEsQdIHsncvajFXVLu4b6o",
  authDomain: "warda-40162.firebaseapp.com",
  projectId: "warda-40162",
  storageBucket: "warda-40162.appspot.com",
  messagingSenderId: "1092175512458",
  appId: "1:1092175512458:web:63b89d4590bcd4fb17fe73"
};

// Initialize Firebase
const App = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore(App);

export const createUserDocumentFromAuth = async (userAuth, additionalInformation = {}) => {
  const userDocRef = doc(db, 'users', userAuth.uid);
  console.log(userDocRef);

  const userSnapshot = await getDoc(userDocRef);

  //console.log(userSnapshot);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;
};
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
export const signInWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await firebaseSignInWithEmailAndPassword(auth, email, password);
};
export const SignOut=async()=> await signOut(auth);
export const onAuthStateChangedListener=(callback)=>onAuthStateChanged(auth,callback);