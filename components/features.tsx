import { Award, Calendar, CheckCircle, Mic } from "lucide-react";

export function Features() {
    return <section id="features">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">Features</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl md:pt-2">
            Everything You Need to Succeed
          </h2>
          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our AI-powered platform offers comprehensive interview preparation tools to help you land your dream
            job.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
        <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
          <Mic className="h-12 w-12 text-primary" />
          <h3 className="text-xl font-bold">AI Voice Interaction</h3>
          <p className="text-center text-gray-500">
            Practice with our realistic AI voice agent that responds to your answers in real-time.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
          <CheckCircle className="h-12 w-12 text-primary" />
          <h3 className="text-xl font-bold">Instant Feedback</h3>
          <p className="text-center text-gray-500">
            Get detailed feedback on your responses, including content, delivery, and confidence.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
          <Calendar className="h-12 w-12 text-primary" />
          <h3 className="text-xl font-bold">Scheduled Sessions</h3>
          <p className="text-center text-gray-500">
            Set up regular practice sessions to improve consistently over time.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
          <Award className="h-12 w-12 text-primary" />
          <h3 className="text-xl font-bold">Industry-Specific Questions</h3>
          <p className="text-center text-gray-500">
            Practice with questions tailored to your industry, role, and experience level.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-12 w-12 text-primary"
          >
            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
          </svg>
          <h3 className="text-xl font-bold">Mock Interviews</h3>
          <p className="text-center text-gray-500">
            Simulate full interview experiences with varying difficulty levels.
          </p>
        </div>
        <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-12 w-12 text-primary"
          >
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          <h3 className="text-xl font-bold">Learning Resources</h3>
          <p className="text-center text-gray-500">
            Access a library of interview tips, common questions, and best practices.
          </p>
        </div>
      </div>
    </div>
  </section>
}