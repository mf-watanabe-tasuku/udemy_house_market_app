import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDbQxKqFhnbELFZ3_SdfiHgEtuMNylzGNM',
  authDomain: 'udemy-house-market-app.firebaseapp.com',
  projectId: 'udemy-house-market-app',
  storageBucket: 'udemy-house-market-app.appspot.com',
  messagingSenderId: '461366216734',
  appId: '1:461366216734:web:7d5b19aeff95ed9cd7060f',
};

initializeApp(firebaseConfig);
export const db = getFirestore();
