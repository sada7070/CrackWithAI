import Link from "next/link";
import { Button } from "./ui/button";

export function CTASection() {
    return <section id="get-started" className="w-full py-12 md:py-24 lg:py-30 bg-primary text-white">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-8 text-center">

        <div className="space-y-2">
          <h2 className="text-4xl font-bold tracking-tighter sm:text-4xl md:text-5xl dark:text-black">
            Ready to Ace Your Next Interview?
          </h2>
          <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-black">
            Join thousands of successful job seekers who have improved their interview skills with our AI voice
            agent.
          </p>
        </div>

        <div className="flex flex-col gap-6 min-[400px]:flex-row">
          <Link href='/signin'>
            <Button size="lg" className="bg-secondary text-primary hover:bg-secondary/90 dark:text-primary">
              Start Now!!
            </Button>
          </Link>
            
          <Link href='signup'>
            <Button size="lg" variant="outline" className="text-black border-white bg-slate-400 hover:bg-slate-500 dark:hover:text-black dark:hover:bg-slate-300 dark:border-slate-950">
              SignUp
            </Button>
          </Link>
        </div>

      </div>
    </div>
  </section>
}