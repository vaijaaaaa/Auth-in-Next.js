"use client";
import axios from "axios"
import Link from "next/link"
// import {toast} from "react-hot-toast"
import { useRouter } from "next/navigation";

export default function ProfilePage(){

    const router = useRouter()
    const logout =async () =>{
        try {
            await axios.get('/api/users/logout')
            // toast.success("Logour successful")
            router.push('/login')
        } catch (error :any) {
            console.log(error.message);
            
        }




    }


    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr />
            <button 
            onClick={logout}
            className="bg-red-500 mt-4 hover:bg-yellow-300 text-white font-bold py-2 px-4 rounded">Logout</button>
        </div>
    )
}