import Agent from "@/components/agent";
import { Header } from "@/components/ui/header";

export default function Interview() {
    return <div>
        <Header />

        <div className="my-6 mx-17 md:mx-50">
            <p className="text-4xl mb-6 font-bold flex justify-center items-center md:justify-start">Interview Generation</p>
            <div>
                <Agent userName='You' userId='user1' type='generate' />
            </div>
        </div>
    </div>
}