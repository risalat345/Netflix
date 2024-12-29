import { initializeApp } from "firebase/app";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth/cordova";
import { addDoc, collection, getFirestore } from "firebase/firestore/lite";
const firebaseConfig = {
  apiKey: "AIzaSyAvDB1-JV0OHXuJERTj0rUSk6qcIZmtTUQ",
  authDomain: "netflix-b0662.firebaseapp.com",
  projectId: "netflix-b0662",
  storageBucket: "netflix-b0662.firebasestorage.app",
  messagingSenderId: "444154623934",
  appId: "1:444154623934:web:a3a63b36a5357ea49aabef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db=getFirestore(app)
const signup=async(name,email,password)=>{
try {
    const res=await createUserWithEmailAndPassword(auth,email,password)
    const user=res.user;
    await addDoc(collection(db,"user"),{
        uid:user.uid,
        name,
        authProvider:"local",
        email
    })
} catch (error) {
    toast.error(error.code.split("/")[1].split("-").join(" "))
    
}
}
const login =async(email,password)=>{
try {
    await signInWithEmailAndPassword(auth,email,password)
} catch (error) {
    toast.error(error.code.split("/")[1].split("-").join(" "))
}
}
const logout=()=>{
    signOut(auth)
}
export {auth,db,login,logout,signup}