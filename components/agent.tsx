'use client';

import { BrainCog } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { vapi } from "@/lib/vapi.sdk";
import { interviewer } from "@/constants";
import { createFeedback } from "@/app/lib/generalAction";

interface AgentProps {
    firstName: string;
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

interface SavedMessage {
    role: 'user' | 'system' | 'assistant';
    content: string;
}


const Agent = ({firstName, userId, type, interviewId, questions}: AgentProps) => {
    const router = useRouter();

    const [isSpeaking, setIsSpeaking] = useState(false);
    const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
    const [messages, setMessages] = useState<SavedMessage[]>([]);

    useEffect(() => {
        const onCallStart = () => setCallStatus(CallStatus.ACTIVE);
        const onCallEnd = () => setCallStatus(CallStatus.INACTIVE);

        const onMessage = (message: Message) => {
            if(message.type === 'transcript' && message.transcriptType === 'final') {
                const newMessage = {
                    role: message.role,
                    content: message.transcript
                }
                setMessages((prev) => [...prev, newMessage]);
            }
        }

        const onSpeechStart = () => setIsSpeaking(true);
        const onSpeechEnd = () => setIsSpeaking(false);

        const onError = (error: Error) => console.log('Error', error);

        //vapi event listeners
        vapi.on('call-start', onCallStart);
        vapi.on('call-end', onCallEnd);
        vapi.on('message', onMessage);
        vapi.on('speech-start', onSpeechStart);
        vapi.on("speech-end", onSpeechEnd);
        vapi.on('error', onError);

        //clearing listeners
        return () => {
            vapi.off('call-start', onCallStart);
            vapi.off('call-end', onCallEnd);
            vapi.off('message', onMessage);
            vapi.off('speech-start', onSpeechStart);
            vapi.off("speech-end", onSpeechEnd);
            vapi.off('error', onError);
        }

    },[]);

    const handleGenerateFeedback = async(messages: SavedMessage[]) => {
        const { success, feedbackId: id } = await createFeedback({
            interviewId: interviewId!,
            userId: userId!,
            transcript: messages
        })

        if(success && id) {
            router.push(`/home-page/dashboard/interview/${interviewId}/feedback`);
        } else {
            console.log("error saving feedback");
            router.push('/home-page/dashboard');
        }
    }

    const isCallInactiveOrFinished = callStatus === CallStatus.INACTIVE || callStatus === CallStatus.FINISHED
    const isFirstRun = useRef(true);

    useEffect(() => {
        if(isFirstRun.current) {
            isFirstRun.current = false;
            return;
        }

        if(isCallInactiveOrFinished) {
            if(type === 'generate') {
                router.push('/home-page/dashboard');
            }
        }
    },[isCallInactiveOrFinished]);

    useEffect(()=> {
        if(callStatus === CallStatus.FINISHED) {
            if(type === 'interview') {
                handleGenerateFeedback(messages);
            }
        }
    },[callStatus]);
    
    // to handle calls
    const handleCall = async() => {
        setCallStatus(CallStatus.CONNECTING);

        if(type === 'generate') {
            //telling vapi to connect
            await vapi.start(process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID!, {
                variableValues: {
                    userName: firstName,
                    userId: userId,
                }
            });
        } else {
            let formattedQuestions = '';

            if(questions) {
                formattedQuestions = questions.map((question) => `- ${question}`).join('\n');
            }

            await vapi.start(interviewer, {
                variableValues: {
                    questions: formattedQuestions
                }
            })
        }
    }

    const handleDisconnect = async() => {
        setCallStatus(CallStatus.FINISHED || CallStatus.INACTIVE);
        vapi.stop();
        router.push('/home-page/dashboard');
    }

    const latestMessage = messages[messages.length - 1]?.content;
    const userName = firstName.charAt(0).toUpperCase() + firstName.slice(1);

    return <div>
        <div className="flex sm:flex-row flex-col gap-20 items-center justify-center w-full pt-10">
            <div className="flex justify-center items-center flex-center flex-col gap-2 p-7 lg:h-[450px] blue-gradient-dark rounded-lg border-2 border-primary flex-1 sm:basis-1/2 w-full">
                <div className="z-10 flex items-center justify-center bg-gradient-to-b from-[#ffffff] to-slate-400 dark:bg-gradient-to-b dark:from-slate-400 dark:to-slate-800 rounded-full md:size-[180px] size-[150px] relative">
                    <BrainCog width={100} height={100} />
                    {isSpeaking && (
                        <span className="absolute inline-flex h-25 w-25 md:h-34 md:w-34 animate-ping rounded-full bg-slate-400 dark:bg-slate-500 opacity-75"></span>
                    )}
                </div>
                <p className="text-2xl pt-10 font-medium">AI Interviewer</p>
            </div>

            <div className="border-gradient p-0.5 rounded-2xl flex-1 sm:basis-1/2 w-full lg:h-[450px] max-md:hidden border-2 border-primary">
                <div className="flex flex-col gap-2 justify-center items-center p-7 dark-gradient rounded-2xl min-h-full">
                    <div className="flext felx-col justify-center h-full mt-3 font-semibold">
                        <div className="z-10 text-7xl flex items-center justify-center bg-gradient-to-b from-[#ffffff] to-slate-400 dark:bg-gradient-to-b dark:from-slate-400 dark:to-slate-800 rounded-full size-[180px] relative">
                            {userName[0]}
                        </div>
                    </div>
                    <p className="text-2xl pt-10 font-medium">{userName}</p>
                </div>
            </div>
        </div>

        {messages.length > 0 && (
            <div className=" bg-gradient-to-b from-[#aebbea] to-slate-400 dark:bg-gradient-to-b dark:from-slate-50 dark:to-slate-400 p-0.5 rounded-2xl w-full mt-8">
                <div className="bg-gradient-to-b from-[#f2f3f6] to-slate-400 dark:bg-gradient-to-b dark:from-slate-400 dark:to-slate-800 rounded-2xl text-lg min-h-12 px-5 py-3 flex items-center justify-center">
                    <p key={latestMessage} className={cn('transition-opacity duration-500 opacity-0', 'animation: fadeIn 0.5s ease-in-out opacity-100')}>
                        {latestMessage}
                    </p>
                </div>
            </div>
        )}

        <div className="flex justify-center w-full pt-15">
                    {callStatus != 'ACTIVE' ? (
                        <Button size='lg' className="bg-green-500 hover:bg-green-400 w-28 h-12 rounded-4xl" onClick={handleCall}>
                            <span className={cn('absolute animate-ping rounded-full opacity-75',
                                  callStatus !== 'CONNECTING' && 'hidden')}
                            />
                            <span className="text-lg">
                                {isCallInactiveOrFinished ? 'Call' : '. . .'}
                            </span>
                        </Button>
                    ): (
                        <Button variant='destructive' size='lg' className="w-25 rounded-4xl" onClick={handleDisconnect}>
                            End
                        </Button>
                    )}
        </div>
    </div>
}

export default Agent;   