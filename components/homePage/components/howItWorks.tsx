import { Play } from "lucide-react";
import Image from "next/image";

export function HowItWorks(){
    return <section id="how-it-works" className="py-24">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">How It Works</div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl md:pt-2">
                        Simple Steps to Interview Success
                    </h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Our platform makes it easy to prepare for your interviews with just a few simple steps.
                    </p>
                </div>
            </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
            <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white dark:text-black text-2xl font-bold">
                    1
                </div>
                <h3 className="text-xl font-bold">Create Your Profile</h3>
                <p className="text-center text-gray-500">
                    Tell us about your industry, target role, and experience level so we can customize your practice
                    sessions.
                </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white dark:text-black text-2xl font-bold">
                    2
                </div>
                <h3 className="text-xl font-bold">Practice with AI</h3>
                <p className="text-center text-gray-500">
                    Engage in realistic interview conversations with our AI voice agent that responds to your answers.
                </p>
            </div>
            <div className="flex flex-col items-center space-y-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-white dark:text-black text-2xl font-bold">
                    3
                </div>
                <h3 className="text-xl font-bold">Review & Improve</h3>
                <p className="text-center text-gray-500">
                    Get detailed feedback on your performance and specific suggestions for improvement.
                </p>
            </div>
        </div>
        <div className="mt-16 flex justify-center">
            <div className="relative rounded-lg overflow-hidden shadow-xl">
            <Image
                src="/placeholder.svg?height=400&width=700"
                alt="Interview Practice Demo"
                width={700}
                height={400}
                className="object-cover"
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-full bg-white/90 p-4 shadow-lg">
                <Play className="h-12 w-12 text-primary" />
                </div>
            </div>
            </div>
        </div>
        </div>
  </section>
}