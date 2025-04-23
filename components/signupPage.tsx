import Link from "next/link";
import { Button } from "./ui/button";
import { Header } from "./ui/header";
import { Input } from "./ui/input";

export function SignupPage() {
    return <div className="h-screen">
        <div className="">
            <Header />
        </div>
         <div className="w-screen flex justify-center items-center">
        <div className="border-3 shadow-xl rounded-2xl m-20  p-6 px-10 md:px-15">
            <div>
                <h1 className="text-3xl pb-4">Signup</h1>
                <h3>Email</h3>
                <Input placeholder="john10@email.com" />
                
                <h3 className="pt-2">First Name</h3>
                <Input placeholder="John" />
                <h3 className="pt-2">Last Name</h3>
                <Input placeholder="Smith" />

                <h3 className="pt-2">Password</h3>
                <Input placeholder="********" />

                <p className="text-sm pt-2"> Already have an account?
                    <Link href='/signin'>
                        <Button className="underline pl-2 cursor-pointer" variant='link' size='sm'>Signin</Button>
                    </Link>
                </p>
            </div>
            <div className="pt-2">
                <Button className="cursor-pointer">Singup</Button>
            </div>
        </div>  
    </div>  
    </div>
    
}