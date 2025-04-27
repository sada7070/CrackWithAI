import { BrainCog } from "lucide-react";

interface AgentProps {
    userName: string;
    userId?: string;
    interviewId?: string;
    feedbackId?: string;
    type: "generate" | "interview";
    questions?: string[];
  }

const Agent = ({userName}: AgentProps) => {
    const isSpeaking = true;

    return <div className="flex sm:flex-row flex-col gap-20 items-center justify-center w-full">
        <div className="flex justify-center items-center flex-center flex-col gap-2 p-7 md:h-[400px] blue-gradient-dark rounded-lg border-2 border-primary flex-1 sm:basis-1/2 w-full">
            <div className="z-10 flex items-center justify-center bg-gradient-to-l from-[#ffffff] to-[#70a4f1] dark:bg-gradient-to-b dark:from-slate-400 dark:to-slate-800 rounded-full md:size-[180px] size-[150px] relative">
                <BrainCog width={100} height={100} />
                {isSpeaking && (
                      <span className="absolute inline-flex h-25 w-25 md:h-34 md:w-34 animate-ping rounded-full bg-blue-400 dark:bg-slate-500 opacity-75"></span>
                )}
            </div>
            <p className="text-2xl pt-10 font-medium">AI Interviewer</p>
        </div>

        <div className="border-gradient p-0.5 rounded-2xl flex-1 sm:basis-1/2 w-full h-[400px] max-md:hidden border-2 border-primary">
            <div className="flex flex-col gap-2 justify-center items-center p-7 dark-gradient rounded-2xl min-h-full">
                <div className="flext felx-col justify-center h-full mt-3 font-semibold">
                    <div className="z-10 text-7xl flex items-center justify-center bg-gradient-to-l from-[#ffffff] to-[#70a4f1] dark:bg-gradient-to-b dark:from-slate-400 dark:to-slate-800 rounded-full size-[180px] relative">
                        {userName[0]}
                    </div>
                </div>
                <p className="text-2xl pt-10 font-medium">{userName}</p>
            </div>
        </div>
    </div>
}

export default Agent;