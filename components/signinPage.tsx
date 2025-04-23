import Link from "next/link";
import { Button } from "./ui/button";
import { Header } from "./ui/header";
import { Input } from "./ui/input";

export function SigninPage() {
    return <div className="h-screen">
         <Header />
         <div className="w-screen flex justify-center items-center">
        <div className="border-3 shadow-xl rounded-2xl mt-35 md:m-35 p-6 px-10">
            <div>
                <h1 className="text-3xl pb-4">Signin</h1>
                <h3>Email</h3>
                <Input placeholder="john10@email.com" />
                <h3 className="pt-2">Password</h3>
                <Input placeholder="********" />

                <p className="text-sm pt-2"> Don't have an account?
                    <Link href='/signup'>
                        <Button className="underline pl-2 cursor-pointer" variant='link' size='sm'>Signup</Button>
                    </Link>
                </p>
            </div>
            <div className="pt-2">
                <Button className="cursor-pointer">Singin</Button>
            </div>
        </div>  
    </div>
    </div>
}