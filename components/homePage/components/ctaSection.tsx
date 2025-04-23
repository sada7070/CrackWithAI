import { Button } from "../../ui/button";

export function CTASection() {
    return <section id="get-started" className="w-full py-12 md:py-24 lg:py-32 bg-primary text-white">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-black">
            Ready to Ace Your Next Interview?
          </h2>
          <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-black">
            Join thousands of successful job seekers who have improved their interview skills with our AI voice
            agent.
          </p>
        </div>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Button size="lg" className="bg-white text-primary hover:bg-gray-100 dark:text-black">
            Start Your Free Trial
          </Button>
          <Button size="lg" variant="outline" className="text-black border-white hover:bg-slate-500 dark:hover:bg-slate-950 dark:border-slate-950">
            Schedule a Demo
          </Button>
        </div>
      </div>
    </div>
  </section>
}