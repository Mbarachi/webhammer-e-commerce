import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCfq9CqJzRwfs5HGJu9TSCkQvq7GxuZTyU",
  authDomain: "web-hammer.firebaseapp.com",
  projectId: "web-hammer",
  storageBucket: "web-hammer.appspot.com",
  messagingSenderId: "76133080316",
  appId: "1:76133080316:web:5df8badd997eb07f024b79",
  measurementId: "G-BNM9K6Q79X",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  // If the user auth doesn't exist
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
