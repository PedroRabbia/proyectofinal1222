import { getFirestore } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyB8wFRSecp81mg8s23sTO_GrmDXEnHHTxA",
    authDomain: "proyecto-batuk.firebaseapp.com",
    projectId: "proyecto-batuk",
    storageBucket: "proyecto-batuk.appspot.com",
    messagingSenderId: "747641454291",
    appId: "1:747641454291:web:d600bc0c45d6a443569e26"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);