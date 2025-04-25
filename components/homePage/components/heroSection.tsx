import Link from "next/link";
import { Button } from "../../ui/button";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
    return <section className="w-full py-12 md:py-24 pb-32 lg:pl-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-950 dark:to-background">
            <div className="container px-4 md:px-6">
              <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                <div className="flex flex-col justify-center space-y-4">
                  <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm text-primary">
                    Train Smarter. Interview Better.
                  </div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Ace Your Interviews with AI-Powered Voice Practice
                  </h1>
                  <p className="max-w-[650px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    No more awkward mirror rehearsals or begging friends to play pretend recruiter. Just talk to our smart AI like you’re on a 
                    real call, and get helpful feedback immediately. It’s interview prep made easy, chill, and actually kind of fun.                </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="/signin">
                      <Button size="lg" className="gap-1">
                        Start Practicing Now <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Link href="#demo">
                      <Button size="lg" variant="outline" className="gap-1">
                        <Play className="h-4 w-4" /> Watch Demo
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="mx-auto lg:mx-0 relative">
                  <Image
                    src="/hero_section.jpg"
                    alt="AI Interview Practice"
                    width={0}
                    height={0}
                    sizes="100vw, 400px"  
                    className="w-full sm:w-[400px] md:w-[500px] rounded-lg object-cover"
                    priority
                  />
                  <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                    <div className="flex items-center gap-2">
                    <span className="relative flex size-3">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex size-3 rounded-full bg-green-500"></span>
                    </span>
                    <span className="text-sm font-medium text-black">AI Voice Assistant Active</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
}