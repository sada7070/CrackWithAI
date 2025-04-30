'use client';

import Link from "next/link";
import { Button } from "./ui/button";
import { Header } from "./ui/header";
import { Input } from "./ui/input";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

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
        <div className="border-3 shadow-xl rounded-2xl m-20  p-6 px-10 md:px-15">
            <div>
                <h1 className="text-3xl pb-4">Signup</h1>
                <h3>Email</h3>
                <Input onChange={(e) => {
                    setEmail(e.target.value);
                }} placeholder="Enter your email" />
                
                <h3 className="pt-2">First Name</h3>
                <Input onChange={(e) => {
                    setFirstName(e.target.value);
                }} placeholder="Enter your FirstName" />

                <h3 className="pt-2">Last Name</h3>
                <Input onChange={(e) => {
                    setLastName(e.target.value);
                }} placeholder="Enter your LastName" />

                <h3 className="pt-2">Password</h3>
                <Input onChange={(e) => {
                    setPassword(e.target.value);
                }} placeholder="********" />

                <p className="text-sm pt-2"> Already have an account?
                    <Link href='/signin'>
                        <Button className="underline pl-2 cursor-pointer" variant='link' size='sm'>Signin</Button>
                    </Link>
                </p>
            </div>
            <div className="pt-2">
                <Button onClick={async() => {
                    const res = await axios.post('/api/auth/signup', {
                        firstName,
                        lastName,
                        email,
                        password,
                    });
                    localStorage.setItem('token', res.data.token);
                    router.push('/dashboard');
                }} className="cursor-pointer w-full">Singup</Button>
            </div>
        </div>  
    </div>  
    </div>
}