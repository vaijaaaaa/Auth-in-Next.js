"use client";
import axios from "axios"
import Link from "next/link"
// import {toast} from "react-hot-toast"
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function ProfilePage(){

    const router = useRouter()
    const [data,setdata] = useState("nothing")
    const logout =async () =>{
        try {
            await axios.get('/api/users/logout')
            // toast.success("Logour successful")
            router.push('/login')
        } catch (error :any) {
            console.log(error.message);
            
        }




    }
      
    const getuserDetails = async()=>{
        const res = await axios.get('/api/users/me')
        console.log(res.data);
        setdata(res.data.data._id)
        
    }





    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <h2>{data ==="nothing" ? "Nothing":<Link href={`/profile/${data}`}>{data}
            </Link>}</h2>
            <button 
            onClick={logout}
            className="bg-red-500 mt-4 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded">Logout</button>
            <button 
            onClick={getuserDetails}
            className="bg-purple-500 mt-4 hover:bg-green-300 text-white font-bold py-2 px-4 rounded">GetUserDetails</button>
        </div>
    )
}