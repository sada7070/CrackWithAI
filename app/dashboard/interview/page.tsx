"use client";

import Agent from "@/components/agent";
import { Header } from "@/components/ui/header";
import axios from 'axios';
import { useEffect, useState } from "react";

export default function Interview() {
    type User = {
        firstName: string;
        lastName: string;
        userId: string;
    }
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async() => {
            try{
                const token = localStorage.getItem('token');
                if(!token) {
                    return;
                }
                const res = await axios.get('/api/user', {
                    headers: {
                        Authorization: token,
                    },
                });
                setUser(res.data)
                console.log(res.data);
            } catch(e){
                console.log(e);
            }
        };
        fetchUser()
    },[]);  

    return <div>
        <Header />
        
        <div className="my-6 mx-17 md:mx-50">
            <p className="text-4xl mb-6 font-bold flex justify-center items-center md:justify-start">Interview Generation</p>
            <div>
                {user && (
                    <Agent userName={user?.firstName} userId={user?.userId} type='generate' />
                )}
            </div>
        </div>
    </div>
}