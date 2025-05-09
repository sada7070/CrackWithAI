import { SimpleCard } from "@/components/ui/simpleCard";

export function HowItWorks(){
    return <section id="how-it-works" className="py-24">
        <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">How It Works</div>
                    <h2 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl md:pt-2">
                        Simple Steps to Interview Success
                    </h2>
                    <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Our platform makes it easy to prepare for your interviews with just a few simple steps.
                    </p>
                </div>
            </div>

            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3 mt-12">
                <SimpleCard num={1}
                    label="Create Your Profile"
                    content="Tell us about your industry, target role, and experience level so we can customize your practice sessions."
                />

                <SimpleCard num={2}
                    label="Practice with AI"
                    content="Engage in realistic interview conversations with our AI voice agent that responds to your answers."
                />

                <SimpleCard num={3}
                    label="Review & Improve"
                    content="Get detailed feedback on your performance and specific suggestions for improvement."
                />
            </div>
        </div>
  </section>
}