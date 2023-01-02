import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const firebaseConfig = {
  apiKey: 'AIzaSyBsB81UmeqtWmIRuqLLMagfrFtUiP86YAw',
  authDomain: 'mymoney-bfdbc.firebaseapp.com',
  projectId: 'mymoney-bfdbc',
  storageBucket: 'mymoney-bfdbc.appspot.com',
  messagingSenderId: '332735592316',
  appId: '1:332735592316:web:eb7d8d86555639c6bd16f9',
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

export { projectFirestore, projectAuth };
