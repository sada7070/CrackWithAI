import { CTASection } from "@/components/ctaSection";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
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
    <CTASection />
    <Footer />
  </div>
}
