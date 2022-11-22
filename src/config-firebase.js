// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCgmWwhzwntRu0hEy576frYXQY20Lto1wM",
  authDomain: "superman-react.firebaseapp.com",
  projectId: "superman-react",
  storageBucket: "superman-react.appspot.com",
  messagingSenderId: "567693661415",
  appId: "1:567693661415:web:251665bb08aa725d5f7e42",
  measurementId: "G-5RHSCT4BF6",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// export const auth = app.auth();
export const auth = getAuth(app);
export default app;
