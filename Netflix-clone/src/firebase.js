// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD3Vhj95Y1bI7KAGgL7axfi1Ni75pXDiXw",
  authDomain: "netflix-clone-70aa4.firebaseapp.com",
  projectId: "netflix-clone-70aa4",
  storageBucket: "netflix-clone-70aa4.appspot.com",
  messagingSenderId: "522535603256",
  appId: "1:522535603256:web:207ba9ea9ca9ecce8eaacd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const db=getFirestore(app);

const signup=async(name,email,password)=>{
  try{
    const response=await createUserWithEmailAndPassword(auth,email,password);
  const userDetails=response.user;
  await addDoc(collection(db,"users"),{
    uid:userDetails.uid,
    name,
    authProvider:"local",
    email
  })
  }catch(err){
    console.log(err);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  } 
}

const login=async(email,password)=>{
  try{
    await signInWithEmailAndPassword(auth,email,password);
  }catch(err){
    console.log(err);
    toast.error(error.code.split('/')[1].split('-').join(" "));
  }
  
}

const logout=()=>{
  signOut(auth);
}

export{auth,db,login,logout,signup};