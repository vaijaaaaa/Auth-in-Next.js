"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";



export default function LoginPage(){
    const router = useRouter();
    const [user,setuser] = React.useState({
        email:"",
        password:"",
    })
    const [buutonDisabled,setButtonDisabled] = React.useState(false);
    const [loading,setloading] = React.useState(false);

    const onForgotPassword = async() =>{
        try {
            router.push("/forgotpassword")
        } catch (error:any) {
            console.log("Something went wrong",error.message);
            
        }
    }

    const onLogin = async() =>{
        try {
            setloading(true);
            const response = await axios.post("/api/users/login",user);
            console.log("Login success");
            router.push("/profile")
            


            
        } catch (error:any) {
            console.log("Login falied",error.message);
            
            
        }finally{
            setloading(false);
        }
    }

    useEffect(()=>{
        if(user.email.length > 0 && user.password.length > 0){
            setButtonDisabled(false);
        }else{
            setButtonDisabled(true);
        }
    },[user]);



    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>{loading ? "Processing":"Login"}</h1>
            <hr />


            <label htmlFor="email">email</label>
            <input className="p-2 border border-yellow-300 rounded-lg
            mb-4 focus:outline-green-400 focus:border-yellow-600 text-black"  id="email"
             value={user.email} 
             type="text" 
             onChange={(e)=> setuser({...user, email:e.target.value})}
             placeholder="email"/>

            <label htmlFor="passsword">passsword</label>
            <input className="p-2 border border-yellow-300 rounded-lg
            mb-4 focus:outline-green-400 focus:border-yellow-600 text-black"  id="password"
             value={user.password} 
             type="password" 
             onChange={(e)=> setuser({...user, password:e.target.value})}
             placeholder="password"/>


             <button
             onClick={onLogin}
             className="p-2 border border-red-500 rounded-lg mb-4 focus:outline-blue-500 focus:border-blue-500">Login in</button>

             <button
             onClick={onForgotPassword}
             className="p-2 border bg-yellow-400 border-red-500 rounded-lg mb-4 focus:outline-blue-500 focus:border-blue-500 hover:bg-purple-500">Forgot Password</button>
             <Link href= "/signup">Visit Sign up</Link>
        </div>
    )
}