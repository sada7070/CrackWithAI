import Agent from "@/components/agent";
import { Header } from "@/components/ui/header";

export default function Interview() {
    return <div>
        <Header />

        <div className="my-10 mx-20 md:mx-50">
            <p className="text-3xl mb-8 font-bold">Interview Generation</p>
            <div>
                <Agent userName='You' userId='user1' type='generate' />
            </div>
        </div>
    </div>
}