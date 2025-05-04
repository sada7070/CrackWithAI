import dayjs from "dayjs";
import { Calendar, Star } from 'lucide-react';
import { Button } from "./ui/button";
import Link from "next/link";

interface InterviewCardProps {
    id: string;
    userId: string;
    role: string;
    type: string;
    createdAt: string;
}

interface Feedback {
    id: string;
    interviewId: string;
    totalScore: number;
    categoryScores: Array<{
      name: string;
      score: number;
      comment: string;
    }>;
    strengths: string[];
    areasForImprovement: string[];
    finalAssessment: string;
    createdAt: string;
}

const InterviewCard = async({ id, userId, role, type, createdAt}: InterviewCardProps) => {
    const feedback = null as Feedback | null;
    const normalizedType = /mix/gi.test(type) ? 'Mixed' : type;
    const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('D MMM, YYYY');

    return <div className="bg-gradient-to-b from-blue-600 to-cyan-700 dar:bg-gradient-to-b dark:from-slate-300 dark:to-zinc-800 p-0.5 rounded-2xl w-[320px] max-sm:w-full min-h-86">
        <div className="bg-gradient-to-b from-white to-blue-300 dark:bg-gradient-to-b dark:from-zinc-800 dark:to-zinc-950 rounded-2xl min-h-1/6 flex flex-col p-6 relative overflow-hidden gap-10 justify-between">
            <div>
                <div className="absolute top-0 right-0 w-fit px-4 py-2 rounded-bl-lg bg-sky-400 dark:bg-indigo-800">
                    <p className="text-sm font-semibold capitalize">
                        {normalizedType}
                    </p>
                </div>
                <p className="text-3xl mt-6 capitalize font- text-center">
                        {role} Interview
                </p>

                <div className="flex ml-2 mt-8 gap-6">
                    <div className=" flex gap-2">
                        <Calendar width={20} height={25} />
                        {formattedDate}
                    </div>

                    <div className="flex gap-2">
                        <Star width={20} height={25} />
                        {feedback?.totalScore || '---'}/100
                    </div>
                </div>

                <p className="line-clamp-2 mt-5 flex justify-center dark:text-slate-300 text mx-2">
                    {feedback?.finalAssessment || "You’re the hero of this story — interviews don’t stand a chance! Go get it.."}
                </p>

                <div className="mt-10">
                    <Button className="w-full">
                        <Link href={feedback ? `/dashboard/interview/${id}/feedback` : `/dashboard/interview/${id}`}>
                            {feedback ? 'Check Feedback' : 'Take Interview'}
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    </div>
}

export default InterviewCard;