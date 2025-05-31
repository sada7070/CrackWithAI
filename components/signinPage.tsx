'use client';

import Link from "next/link";
import { Button } from "./ui/button";
import { Header } from "./ui/header";
import { Input } from "./ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation"
import axios from "axios";
import toast from 'react-hot-toast';

export function SigninPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    return <div className="h-screen">
         <Header />

         <div className="w-screen flex justify-center items-center">
        <div className="border-3 border-slate-400 rounded-2xl mt-35 md:m-35 p-6 px-10 shadow-2xl dark:shadow-slate-800 shadow-slate-600">
            <div>
                <h1 className="text-3xl font-semibold pb-4">Signin</h1>
                <h3 className="pb-1 font-medium">Email</h3>
                <Input onChange={(e) => {
                    setEmail(e.target.value);
                }} placeholder="Enter your Email" />

                <h3 className="pt-4 pb-1 font-medium">Password</h3>
                <Input onChange={(e) => {
                    setPassword(e.target.value);
                }} type="password" placeholder="********" />

                <p className="text-sm font-medium pt-5"> Don't have an account?
                    <Link href='/signup'>
                        <Button className="underline pl-2 cursor-pointer" variant='link' size='sm'>Signup</Button>
                    </Link>
                </p>
            </div>
            <div className="pt-2">
                <Button 
                disabled={!email || !password}
                onClick={async() => {
                    try{
                        const res = await axios.post('/api/auth/signin', {
                            email,
                            password,
                        });
                        localStorage.setItem('token', res.data.token);
                        toast.success("Signin successful!");
                        router.push("/home-page/dashboard");
                    } catch(err) {
                        console.error("Signup failed:", err);
                        toast.error("Signin failed. Please check your details.");
                    }
                }} className="cursor-pointer w-full">Signin</Button>
            </div>
        </div>  
    </div>
    </div>
}