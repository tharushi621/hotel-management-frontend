import "./login.css";
import { useState } from "react";
import axios from "axios";

export default function LoginPage(){

const [email, setEmail]=useState("")
const [password, setPassword]=useState("")

function handleLogin(){
   axios.post(import.meta.env.VITE_BE_URL+"/api/users/login", 
    {
    email:email,
    password:password
    }
).then((res)=>{
  
    localStorage.setItem("token", res.data.token)
    const token= localStorage.getItem("token")
   
    if(res.data.user.type=="customer"){
        window.location.href="/"

    }else if(res.data.user.type=="admin"){
        window.location.href="/admin"
    }
}).catch((err)=>{
    console.log(err)
})
}

    return(
        <div className="w-full h-[100vh] pic-bg flex justify-center items-center">
            <div className="w-[400px] h-[400px] backdrop-blur-md rounded-lg flex flex-col items-center justify-center relative">
                <h1 className="text-3xl text-white p-[15px] text-center absolute top-[40px]">
                    Login
                </h1>
                <input type="text" placeholder="Enter your email address" className="w-[80%] bg-white border-[2px] text-black placeholder:text-white h-[50px] px-[5px] mb-[20px]" 
                defaultValue={email} onChange={
                    (e)=>{
                        setEmail(e.target.value)
                }}/>
                <input type="password" placeholder="Enter your password" className="w-[80%] bg-white border-[2px] text-black placeholder:text-white h-[50px] px-[5px] " 
                defaultValue={password} onChange={
                    (e)=>{
                         setPassword(e.target.value)
                    }}/>
                <button className="w-[80%] bg-blue-500 text-white h-[50px] absolute bottom-[40px]" onClick={handleLogin}>Login</button>
            </div>

        </div>
    )
}