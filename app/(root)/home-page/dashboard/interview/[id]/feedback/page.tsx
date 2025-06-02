import { getFeedback, getInterviewById, getUserFromToken } from "@/app/lib/generalAction";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import dayjs from "dayjs";
import { Calendar, Star } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

interface RouteParams {
    params: Promise<Record<string, string>>;
    searchParams: Promise<Record<string, string>>;
}

export default async function Feddback({params}: RouteParams) {
    const { id } = await params;
    const user = await getUserFromToken();
    const interview = await getInterviewById(id);

    if(!interview){
        redirect('/dashboard');
    }

    const feedback = await getFeedback({
        interviewId: id,
        userId: user?.userId!,
    });

    return <div>
        <Header  />

            <section className="flex flex-col gap-8 max-w-5xl mx-auto max-sm:px-4 text-lg leading-7 my-10">
                <div className="flex flex-row justify-center">
                    <h1 className="text-4xl font-semibold">
                        Feedback on the Interview -{" "}
                        <span className="capitalize">{interview.role}</span> Interview
                    </h1>
                </div>

                <div className="flex flex-row justify-center ">
                    <div className="flex flex-row gap-5">
                        {/* Overall Impression */}
                        <div className="flex flex-row gap-2 items-center">
                            <Star width={20} height={25}/>
                            <p>
                                Overall Impression:{" "}
                                <span className="text-primary-200 font-bold">
                                    {feedback?.totalScore}
                                </span>
                                /100
                            </p>
                        </div>

                        {/* Date */}
                        <div className="flex flex-row gap-2">
                            <Calendar width={20} height={25} />
                            <p>
                                {feedback?.createdAt
                                ? dayjs(feedback.createdAt).format("MMM D, YYYY h:mm A")
                                : "N/A"}
                            </p>
                        </div>
                    </div>
                </div>

            <hr />

            <p className="text-xl font-semibold">{feedback?.finalAssessment}</p>

            {/* Interview Breakdown */}
            <div className="flex flex-col gap-4">
                <p className="text-3xl font-bold py-2">Breakdown of the Interview:</p>
                {feedback?.categoryScores?.map((category, index) => (
                <div key={index} className="pb-2">
                    <p className="font-bold">
                        {index + 1}. {category.name} ({category.score}/100)
                    </p>
                    <p>{category.comment}</p>
                </div>
                ))}
            </div>

            <div className="flex flex-col gap-3">
                <p className="text-3xl font-bold">Strengths</p>
                {feedback?.strengths?.length ? (
                    <ul className="list-disc pl-5">
                    {feedback.strengths.map((strength, index) => (
                        <li key={index} className="pb-1">
                        {strength}
                        </li>
                    ))}
                    </ul>
                ) : (
                    <p className="text-gray-500">The candidate did not present any points that clearly demonstrated their strengths</p>
                )}
            </div>


            <div className="flex flex-col gap-3">
                <p className="text-3xl font-bold">Areas for Improvement</p>
                <ul className="pb-4 list-disc pl-5">
                    {feedback?.areasForImprovement?.map((area, index) => (
                        <li key={index} className="pb-1">
                            {area}
                        </li>
                    ))}
                </ul>

            </div>

            <div className="flex w-full justify-evenly gap-4 max-sm:flex-col max-sm:items-center">
                <Button variant='secondary' size='lg' className="flex-1 border-1 border-slate-900 hover:bg-slate-200 dark:hover:bg-slate-600">
                    <Link href="/home-page/dashboard" className="flex w-full justify-center">
                        <p className="text-lg font-semibold text-primary-200 text-center">
                            Back to dashboard
                        </p>
                    </Link>
                </Button>

                <Button className="flex-1 hover:bg-slate-700 dark:hover:bg-slate-300" size='lg'>
                    <Link href={`/home-page/dashboard/interview/${id}`} className="flex w-full justify-center">
                        <p className="text-lg font-semibold text-white dark:text-black text-center">
                            Retake Interview
                        </p>
                    </Link>
                </Button>
            </div>
        </section>

        <Footer />
    </div>
}