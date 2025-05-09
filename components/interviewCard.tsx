import dayjs from "dayjs";
import { Calendar, Star } from 'lucide-react';
import { Button } from "./ui/button";
import Link from "next/link";
import { getFeedback } from "@/app/lib/generalAction";

interface InterviewCardProps {
    id: string;
    userId: string;
    role: string;
    type: string;
    createdAt: string;
}

export interface Feedback {
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
    createdAt: Date;
}

const InterviewCard = async({ id, userId, role, type, createdAt}: InterviewCardProps) => {
    const feedback = userId && id ? await getFeedback({ interviewId: id, userId }) : null;
    const normalizedType = /mix/gi.test(type) ? 'Mixed' : type;
    const formattedDate = dayjs(feedback?.createdAt || createdAt || Date.now()).format('D MMM, YYYY');

    return <div className="bg-gradient-to-b from-slate-400  via-slate-800 to-slate-400 dark:bg-gradient-to-b dark:from-zinc-400 dark:via-slate-800 dark:to-slate-400 p-0.5 pt-0.75 rounded-2xl w-[320px] max-sm:w-full min-h-88">
        <div className="bg-secondary dark:bg-gradient-to-b dark:from-zinc-950 dark:to-secondary/100 rounded-2xl mix-h-1/6 flex flex-col md:p-6 relative overflow-hidden gap-10 justify-between">
            <div className="mx-2 md:mx-0">
                <div className="absolute top-0 right-0 w-fit px-2 md:px-4 py-2 text-white rounded-bl-lg bg-primary dark:bg-slate-200 dark:text-black">
                    <p className="text-sm font-semibold capitalize">
                        {normalizedType}
                    </p>
                </div>  
                <p className="text-2xl mt-12 md:mt-6 capitalize font-semibold text-center">
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

                <p className="line-clamp-2 mt-5 flex justify-center dark:text-slate-300 text mx-2 max-h-18">
                    {feedback?.finalAssessment || "You’re the hero of this story — interviews don’t stand a chance! Go get it.."}
                </p>

                <div className="mt-10 pb-4 md:pb-0">
                    <Button className="w-full hover:bg-primary/80 text-md">
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