'use client';

import Link from "next/link";
import { Button } from "./ui/button";
import { Header } from "./ui/header";
import { Input } from "./ui/input";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';

export function SignupPage() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    return <div className="h-screen">
        <div className="">
            <Header />
        </div>
         <div className="w-screen flex justify-center items-center">
        <div className="border-3 border-slate-400 shadow-xl rounded-2xl mt-20 md:m-20 p-6 px-10 md:px-15 dark:shadow-slate-800 shadow-slate-600">
            <div>
                <h1 className="text-3xl font-semibold pb-4">Signup</h1>
                <h3 className="font-medium">Email</h3>
                <Input onChange={(e) => {
                    setEmail(e.target.value);
                }} placeholder="Enter your Email" />
                
                <h3 className="pt-2 font-medium">First Name</h3>
                <Input onChange={(e) => {
                    setFirstName(e.target.value);
                }} placeholder="Enter your FirstName" />

                <h3 className="pt-2 font-medium">Last Name</h3>
                <Input onChange={(e) => {
                    setLastName(e.target.value);
                }} placeholder="Enter your LastName" />

                <h3 className="pt-2 font-medium">Password</h3>
                <Input onChange={(e) => {
                    setPassword(e.target.value);
                }} type="password" placeholder="********" />

                <p className="text-sm font-medium pt-2"> Already have an account?
                    <Link href='/signin'>
                        <Button className="underline pl-2 cursor-pointer" variant='link' size='sm'>Signin</Button>
                    </Link>
                </p>
            </div>
            <div className="pt-2">
                <Button
                  disabled={!firstName || !lastName || !email || !password}
                    onClick={async() => {
                        try{
                            const res = await axios.post('/api/auth/signup', {
                                firstName,
                                lastName,
                                email,
                                password,
                            });
                            localStorage.setItem('token', res.data.token);
                            toast.success("Signup successful!");
                            router.push('/signin');
                        } catch(err) {
                            console.error("Signup failed:", err);
                            toast.error("Signup failed. Please check your details.");
                        }
                }} className="cursor-pointer w-full">Signup</Button>
            </div>
        </div>  
    </div>  
    </div>
}