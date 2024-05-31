import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyCr8Fw75wFa_89_VJ_BBRbnr_3LTCywWeU",
  authDomain: "file-management-system-6ac0c.firebaseapp.com",
  projectId: "file-management-system-6ac0c",
  storageBucket: "file-management-system-6ac0c.appspot.com",
  messagingSenderId: "669302989168",
  appId: "1:669302989168:web:d373eaafa4db7ec081efb5"
};

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
export const database = {
  users: firestore.collection('users'),
  docs: firestore.collection('docs'),
  files: firestore.collection('files'),
  date: firebase.firestore.FieldValue.serverTimestamp(),
};

export const storage = firebase.storage();

export const auth = firebase.auth();
