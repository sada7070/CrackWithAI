'use client';

import Link from "next/link";
import { Button } from "./ui/button";
import { Header } from "./ui/header";
import { Input } from "./ui/input";
import { useState } from "react";
import { useRouter } from "next/navigation"
import axios from "axios";

export function SigninPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const router = useRouter();

    return <div className="h-screen">
         <Header />
         <div className="w-screen flex justify-center items-center">
        <div className="border-3 shadow-xl rounded-2xl mt-35 md:m-35 p-6 px-10">
            <div>
                <h1 className="text-3xl pb-4">Signin</h1>
                <h3>Email</h3>
                <Input onChange={(e) => {
                    setEmail(e.target.value);
                }} placeholder="john10@email.com" />

                <h3 className="pt-2">Password</h3>
                <Input onChange={(e) => {
                    setPassword(e.target.value);
                }} placeholder="********" />

                <p className="text-sm pt-2"> Don't have an account?
                    <Link href='/signup'>
                        <Button className="underline pl-2 cursor-pointer" variant='link' size='sm'>Signup</Button>
                    </Link>
                </p>
            </div>
            <div className="pt-2">
                <Button onClick={async() => {
                    const res = await axios.post('/api/auth/signin', {
                        email,
                        password,
                    });
                    localStorage.setItem('token', res.data.token);
                    router.push("/dashboard");``
                }} className="cursor-pointer">Singin</Button>
            </div>
        </div>  
    </div>
    </div>
}