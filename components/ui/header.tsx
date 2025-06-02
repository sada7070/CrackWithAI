import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode_toggle";
import { BrainCog } from "lucide-react";
import Link from "next/link";

interface NavLink {
  href: string;
  label: string;
}

interface HeaderProps {
  navLinks?: NavLink[];
  buttonLabel?: string;
  buttonHref?: string;
}

export function Header({ navLinks, buttonLabel, buttonHref }: HeaderProps) {
  return (
    <header className="border-b mx-auto">
      <div className="flex h-20 items-center justify-between px-4 md:px-6 bg-gradient-to-b from-white to-slate-500 dark:bg-gradient-to-b dark:from-slate-950 dark:to-slate-400">
        <div className="flex items-center gap-2 font-bold text-xl">
          <BrainCog className="h-6 w-6 text-primary" />
          <Link href="/">
            <span>CrackWithAI</span>
          </Link>
        </div>

        {navLinks && navLinks.length > 0 && (
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium hover:underline underline-offset-4"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-4">
          <ModeToggle />
          {buttonLabel && buttonHref && (
            <Link href={buttonHref}>
              <Button>{buttonLabel}</Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}