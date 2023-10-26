import firebase from "firebase/compat/app";
// require("firebase/auth");
import "firebase/compat/firestore";
import "firebase/compat/auth";
// import "firebase/auth";

const config = {
  apiKey: "AIzaSyDEcE6rP2Zvtoq7plHSakAqE8OYtSpYIfc",
  authDomain: "clothing-db-3edcc.firebaseapp.com",
  projectId: "clothing-db-3edcc",
  storageBucket: "clothing-db-3edcc.appspot.com",
  messagingSenderId: "885066664362",
  appId: "1:885066664362:web:74c81280ddb2922acec3d3",
  measurementId: "G-Q1NPNJV2P1",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`user/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createDate = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createDate,
        ...additionalData,
      });
    } catch (error) {
      console.log(`error creating user`);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// seting up sign in with google account
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
