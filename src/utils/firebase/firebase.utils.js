import { initializeApp } from 'firebase/app';
import { getAuth, signInWithRedirect, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBpYm5ZqclWJVU5aDte_aiP-HEHpNcwqMA",
  authDomain: "crwn-clothing-db-df76f.firebaseapp.com",
  projectId: "crwn-clothing-db-df76f",
  storageBucket: "crwn-clothing-db-df76f.appspot.com",
  messagingSenderId: "181113663927",
  appId: "1:181113663927:web:d50cf05d25c0ec77a7f832",
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: 'select_account'
})

export const auth = getAuth()

export const signInWithGooglePopup = () => signInWithPopup(auth, provider)