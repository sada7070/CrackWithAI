import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { getInterviewsByUserId } from "@/app/lib/generalAction";
import InterviewCard from "@/components/interviewCard";
import { getUserFromToken } from "@/app/lib/generalAction";

export default async function Dashboard() {
    const user = await getUserFromToken();
    if(!user) {
        return <p>Not authorized.</p>
    }
    
    const userInterviews = await getInterviewsByUserId(user.userId);
    const hasPastInterview = userInterviews?.length! > 0;

    return <div>
        <Header />

        <section>
            <div className="bg-gradient-to-t from-white  via-slate-200 to-slate-500 dark:bg-gradient-to-t dark:from-background dark:via-zinc-950 dark:to-slate-500 md:pt-10">
                <div className="flex justify-start md:gap-15 mx-6 md:ml-30">
                    <div>
                        <blockquote className="mt-6 md:mt-0 text-center md:text-start text-3xl font-semibold text-gray-900 italic dark:text-white">
                            🎮 Game Mode:
                        <span className="relative inline-block before:absolute before:-inset-1 before:block before:-skew-y-3 before:bg-pink-500 ml-2">
                            <span className="relative text-white dark:text-gray-950">ON</span>
                        </span>
                        </blockquote>
                        <div className="text-2xl text-wrap max-w-240 pl-1 py-6 tracking-tight">Welcome to the CrackWithAI. No pressure… just your skills, mindset, and ability on full display.
                        Power up—your moment starts now. ⚡
                        </div>
                        <div className="mt-4 md:mt-8 ml-2 flex justify-center md:justify-start">
                            <a href="/home-page/dashboard/interview">
                                <button className="cursor-pointer relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-md font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                                    <span className="text-lg relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                                        Create an Interview Now!!
                                    </span>
                                </button>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>

        <section className="mx-12 md:mx-30">
            <div className="flex flex-col gap-6 mt-16 md:mt-30">
                <h2 className="text-4xl font-semibold pb-2 md:pb-6 tracking-tight">Your Interviews</h2>

                <div className="flex flex-wrap gap-10 max-lg:flex-col w-full items-stretch pb-20">
                    {hasPastInterview ? (
                        userInterviews?.map((interview) => (
                            <InterviewCard {...interview} key={interview.id} />
                        ))
                    ) : (
                        <p className="text-lg font-medium mt-4">You haven't taken any interview yet</p>
                    )
                    }
                </div>
            </div>
        </section>

        <Footer />
    </div>
}