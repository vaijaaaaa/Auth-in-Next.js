"use client";
import Link from "next/link";
import React from "react";


const onSumbit = async () =>{
    
}





export default function ForgotPassword(){

    


    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
            <h1 className="text-2xl font-bold">Forgot Password</h1>
            <hr />
            <label className="" htmlFor="newpassword ">E-Mail</label>
            <input className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-black"  type="text" placeholder="E-mail" />
            <button className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 bg-yellow-400 hover:bg-purple-500">Submit</button>
        </div>
    )

}