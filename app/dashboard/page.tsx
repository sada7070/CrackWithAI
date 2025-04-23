import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import Image from "next/image";

export default function Dashboard() {
    return <div>
        <Header />

        <section>
            <div className="bg-gradient-to-t from-slate-100  via-white to-slate-500 dark:bg-gradient-to-t dark:from-background  dark:via-zinc-950 dark:to-slate-500">
                <div className="flex justify-center items-center md:gap-15 mx-10">
                    <div>
                        <div className="text-4xl">🎮 Game Mode: ON</div>
                        <div className="text-2xl text-wrap max-w-200 pl-2 py-6">Welcome to the CrackWithAI. No pressure… just your skills, mindset, and story on full display.
                        Power up—your moment starts now. ⚡
                        </div>
                    </div>
                    <Image
                        src="/dashboard_robot.png"
                        alt="AI Interview Practice"
                        width={0}
                        height={0}
                        sizes="100vw, 400px"  
                        className="w-full max-sm:hidden md:w-[300px] rounded-full object-cover pb-6"
                        priority
                    />
                </div>
            </div>
        </section>
        
        <Footer />
    </div>
}