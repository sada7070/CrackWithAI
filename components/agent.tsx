import { BrainCog } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

interface AgentProps {
    userName: string;
    userId?: string;
    interviewId?: string;
    feedbackId?: string;
    type: "generate" | "interview";
    questions?: string[];
  }

enum CallStatus {
    INACTIVE = 'INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
}

const Agent = ({userName}: AgentProps) => {
    const callStatus = CallStatus.INACTIVE;
    const isSpeaking = true;
    const messages = [
        'What is your name?',
        'My name is John Smith, nice to  meet you!'
    ]
    const lastMessage = messages[messages.length - 1];

    return <div>
        <div className="flex sm:flex-row flex-col gap-20 items-center justify-center w-full">
            <div className="flex justify-center items-center flex-center flex-col gap-2 p-7 md:h-[350px] blue-gradient-dark rounded-lg border-2 border-primary flex-1 sm:basis-1/2 w-full">
                <div className="z-10 flex items-center justify-center bg-gradient-to-b from-[#ffffff] to-[#70a4f1] dark:bg-gradient-to-b dark:from-slate-400 dark:to-slate-800 rounded-full md:size-[180px] size-[150px] relative">
                    <BrainCog width={100} height={100} />
                    {isSpeaking && (
                        <span className="absolute inline-flex h-25 w-25 md:h-34 md:w-34 animate-ping rounded-full bg-blue-400 dark:bg-slate-500 opacity-75"></span>
                    )}
                </div>
                <p className="text-2xl pt-10 font-medium">AI Interviewer</p>
            </div>

            <div className="border-gradient p-0.5 rounded-2xl flex-1 sm:basis-1/2 w-full h-[350px] max-md:hidden border-2 border-primary">
                <div className="flex flex-col gap-2 justify-center items-center p-7 dark-gradient rounded-2xl min-h-full">
                    <div className="flext felx-col justify-center h-full mt-3 font-semibold">
                        <div className="z-10 text-7xl flex items-center justify-center bg-gradient-to-b from-[#ffffff] to-[#70a4f1] dark:bg-gradient-to-b dark:from-slate-400 dark:to-slate-800 rounded-full size-[180px] relative">
                            {userName[0]}
                        </div>
                    </div>
                    <p className="text-2xl pt-10 font-medium">{userName}</p>
                </div>
            </div>
        </div>

        {messages.length > 0 && (
            <div className=" bg-gradient-to-b from-[#4B4D4F] to-[#4B4D4F33] p-0.5 rounded-2xl w-full mt-8">
                <div className="bg-gradient-to-b from-[#1A1C20] to-[#08090D] rounded-2xl  min-h-12 px-5 py-3 flex items-center justify-center">
                    <p key={lastMessage} className={cn('transition-opacity duration-500 opacity-0', 'animation: fadeIn 0.5s ease-in-out opacity-100')}>
                        {lastMessage}
                    </p>
                </div>
            </div>
        )}

        <div className="flex justify-center w-full mt-5">
                    {callStatus != 'ACTIVE' ? (
                        <Button size='lg' className="bg-green-500 hover:bg-green-400 w-25 rounded-4xl">
                            <span className={cn('absolute animate-ping rounded-full opacity-75', callStatus != 'CONNECTING' & 'hidden')}/>
                            <span>
                                {callStatus === 'INACTIVE' || callStatus === 'FINISHED' ? 'Call' : '...'}
                            </span>
                        </Button>
                    ): (
                        <Button variant='destructive' size='lg' className="w-25 rounded-4xl">
                            End
                        </Button>
                    )}
        </div>
    </div>
}

export default Agent;