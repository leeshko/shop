import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import {
  getFirestore,
  doc,
  onSnapshot,
  getDoc,
  setDoc,
  collection,
} from "firebase/firestore";

const config = {
  apiKey: "AIzaSyB7OImvTqlP1eBLAjfmIgouXxILsYTZ6mE",
  authDomain: "crwn-db-3f468.firebaseapp.com",
  projectId: "crwn-db-3f468",
  storageBucket: "crwn-db-3f468.appspot.com",
  messagingSenderId: "543986463476",
  appId: "1:543986463476:web:af27e85e91167d074d64a1",
  measurementId: "G-YM1G0JWVXN",
};

const app = initializeApp(config);
export const db = getFirestore(app);
export const createAccount = createUserWithEmailAndPassword;
export const auth = getAuth(app);
export const signInAccount = signInWithEmailAndPassword;

const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      // const credential = GoogleAuthProvider.credentialFromResult(result);
      // const token = credential.accessToken;
      // The signed-in user info.
      // const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.email;
      // The AuthCredential type that was used.
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log(error);
    });
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = doc(db, "users", `${userAuth.uid}`);

  const snapShot = await getDoc(userRef);

  if (!snapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userRef, {
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err.message);
    }
  }
  return {
    userRef,
    onSnapshot,
  };
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  console.log(collectionRef);
  // const batch = db.batch();
  // objectsToAdd.forEach((obj) => {
  //   const newDocRef = collectionRef.doc();
  //   batch.set(newDocRef, obj);
  // }
  // );
  // return await batch.commit();
};

export default app;
