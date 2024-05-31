import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/compat/auth";
import "firebase/compat/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCr8Fw75wFa_89_VJ_BBRbnr_3LTCywWeU",
  authDomain: "file-management-system-6ac0c.firebaseapp.com",
  projectId: "file-management-system-6ac0c",
  storageBucket: "file-management-system-6ac0c.appspot.com",
  messagingSenderId: "669302989168",
  appId: "1:669302989168:web:d373eaafa4db7ec081efb5"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;
