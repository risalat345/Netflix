import Login from "./pages/Login/Login"
import Home from "./pages/Home"
import Player from "./pages/Player"
import { Routes,Route, useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { auth } from "./firebase"
import { onAuthStateChanged } from "firebase/auth/cordova"
import { ToastContainer, toast } from 'react-toastify';

function App() {
  const navigate=useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth,async(user)=>{
      if(user){
        console.log("Log in");
        navigate("/home")
      }else{
      console.log("Log Out")
      navigate("/")
      }
    })
  }, [])
  return (
    <>
       <ToastContainer theme="dark" />
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/player/:id" element={<Player/>}/>
    </Routes>
    </>
  )
}

export default App
