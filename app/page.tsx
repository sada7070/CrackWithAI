import { Features } from "@/components/features";
import { HeroSection } from "@/components/heroSection";
import { HowItWorks } from "@/components/howItWorks";
import { Testimonials } from "@/components/testimonials";
import { Header } from "@/components/ui/header";

export default function Home() {
  return <div className="flex flex-col min-h-screen">
    <Header />
    <HeroSection />
    <Features />
    <HowItWorks />
    <Testimonials />
  </div>
}
