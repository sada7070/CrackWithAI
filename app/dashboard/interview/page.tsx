import { getUserFromToken } from "@/app/lib/generalAuth";
import Agent from "@/components/agent";
import { Header } from "@/components/ui/header";

export default async function Interview() {
    const user = await getUserFromToken(); 
    console.log(user);

    return <div>
        <Header />
        
        <div className="my-6 mx-17 md:mx-50">
            <p className="text-4xl mb-6 font-bold flex justify-center items-center md:justify-start">Interview Generation</p>
            <div>
                {user && (
                    <Agent firstName={user.firstName} userId={user?.userId} type='generate' />
                )}
            </div>
        </div>
    </div>
}