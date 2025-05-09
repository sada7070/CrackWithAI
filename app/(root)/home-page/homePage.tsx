import { CTASection } from "@/components/ctaSection";
import { Features } from "@/components/features";
import { Footer } from "@/components/ui/footer";
import { HeroSection } from "@/components/heroSection";
import { HowItWorks } from "@/components/howItWorks";
import { Testimonials } from "@/components/testimonials";
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
        <Footer
            navItems={[
                { label: "Features", href: "#features" },
                { label: "How It Works", href: "#how-it-works" },
            ]}
        />
    </div>
}