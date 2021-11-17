import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"

const firebaseConfig = {
    apiKey: "AIzaSyCXSj-dCYCUr2doqxt_Ses1ndLejiLW_H4",
    authDomain: "cinema-cms-a03f4.firebaseapp.com",
    databaseURL: "https://cinema-cms-a03f4-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "cinema-cms-a03f4",
    storageBucket: "cinema-cms-a03f4.appspot.com",
    messagingSenderId: "1007661228454",
    appId: "1:1007661228454:web:4186a6b89d947ef9102f67",
    measurementId: "G-ZZR86S6J5N"
};

const app = initializeApp(firebaseConfig)

export default getDatabase(app)
