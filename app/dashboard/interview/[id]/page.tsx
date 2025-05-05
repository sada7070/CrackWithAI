import { getInterviewById }from "@/app/lib/generalAction";
import { getUserFromToken } from "@/app/lib/generalAction";
import Agent from "@/components/agent";
import { Header } from "@/components/ui/header";
import { redirect } from "next/navigation";

// A Promise that resolves to an object of key-value string pairs from the query string.
// Example: URL /interview?id=123&type=tech results in searchParams = { id: "123", type: "tech" }
interface RouteParams {
    params: Promise<Record<string, string>>;
    searchParams: Promise<Record<string, string>>;
}

// TakeInterview component expects params and searchParams to be promises that eventually resolve to string-keyed objects
const TakeInterview = async({ params }: RouteParams) => {
    const { id } = await params;

    const user = await getUserFromToken();
    if(!user) redirect('/');

    const interview = await getInterviewById(id);
    if(!interview) redirect('/dashboard');

    return  <div>
        <Header />
        
        <div className="flex flex-row gap-4 justify-center items-center max-sm:flex-col mx-20 my-5">
            <div className="flex flex-row gap-4 items-center">
                <p className="text-2xl font-semibold text-transform: capitalize">
                    {interview.role} Interview
                </p>
                <p className="text-2xl">|</p>
            </div>

            <p className="bg-slate-600 px-2 rounded-md mt-1">{interview.type}</p>
        </div>
        
        <div className="mt-10 mx-17 md:mx-40">
            <Agent
                firstName={user?.firstName}
                userId={user?.userId}
                type='interview'
                interviewId={interview.id}
                questions={interview.questions}
            />
        </div>
    </div>
}

export default TakeInterview;   