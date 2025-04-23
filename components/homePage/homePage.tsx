import { CTASection } from "@/components/homePage/components/ctaSection";
import { Features } from "@/components/homePage/components/features";
import { Footer } from "@/components/ui/footer";
import { HeroSection } from "@/components/homePage/components/heroSection";
import { HowItWorks } from "@/components/homePage/components/howItWorks";
import { Testimonials } from "@/components/homePage/components/testimonials";
import { Header } from "@/components/ui/header";

export function HomePage() {
    return <div>
        <Header
            navLinks={[
                { href: "#features", label: "Features" },
                { href: "#how-it-works", label: "How It Works" },
            ]}
            buttonLabel="Get Started"
            buttonHref="/signin"
        />
        <HeroSection />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTASection />
        <Footer />
    </div>
}