import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC50lYQZ5m2VsFGiYcIdnoa8qqHS9RV3Mg",
    authDomain: "ema-john-c0dac.firebaseapp.com",
    projectId: "ema-john-c0dac",
    storageBucket: "ema-john-c0dac.appspot.com",
    messagingSenderId: "777735307629",
    appId: "1:777735307629:web:cdd1d671e7ea66fc6e9a64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;