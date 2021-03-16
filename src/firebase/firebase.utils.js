import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAXhgSWEmCLHQUjsO-ji6Cs1OqvS9w-xBg",
  authDomain: "e-commerce-jmb.firebaseapp.com",
  projectId: "e-commerce-jmb",
  storageBucket: "e-commerce-jmb.appspot.com",
  messagingSenderId: "718224877757",
  appId: "1:718224877757:web:e779a736781fa53b6e2fd4"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
