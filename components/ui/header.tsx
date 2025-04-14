import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode_toggle"
import { BrainCog } from "lucide-react"
import Link from "next/link"

export function Header() {
    return <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2 font-bold text-xl">
            <BrainCog  className="h-6 w-6 text-primary" />
            <Link href="/">
                <span>CrackWithAI</span>
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
              Features
            </Link>
            <Link href="#how-it-works" className="text-sm font-medium hover:underline underline-offset-4">
              How It Works
            </Link>
            <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <ModeToggle />
            <Link href="#get-started">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
    </header>
}