// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAL7SHyTziZB0WrmQv5kxUGIwzlSu5T9e0",
    authDomain: "mh-news-portal.firebaseapp.com",
    projectId: "mh-news-portal",
    storageBucket: "mh-news-portal.appspot.com",
    messagingSenderId: "255536120748",
    appId: "1:255536120748:web:bfe02cc31cfc7fc5de3009"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;