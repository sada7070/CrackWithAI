import { BrainCog } from "lucide-react";
import Link from "next/link";

export function Footer() {
    return <footer className="border-t bg-white dark:bg-background">
    <div className="container flex flex-col gap-6 py-8 md:py-12 px-4 md:px-6">
      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
        <div className="flex items-center gap-2 font-bold text-xl">
          <BrainCog className="h-6 w-6 text-primary" />
          <span>CrackWithAI</span>
        </div>
        <nav className="flex gap-4 md:gap-6 flex-wrap">
          <Link href="#features" className="text-sm hover:underline underline-offset-4">
            Features
          </Link>
          <Link href="#how-it-works" className="text-sm hover:underline underline-offset-4">
            How It Works
          </Link>
          <Link href="#" className="text-sm hover:underline underline-offset-4">
            Privacy Policy
          </Link>
          <Link href="#" className="text-sm hover:underline underline-offset-4">
            Terms of Service
          </Link>
        </nav>
      </div>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-sm text-gray-500">© 2025 CrackWithAI. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="text-gray-500 hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
            </svg>
            <span className="sr-only">Facebook</span>
          </Link>
          <Link href="#" className="text-gray-500 hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
            </svg>
            <span className="sr-only">Twitter</span>
          </Link>
          <Link href="#" className="text-gray-500 hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
            </svg>
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-gray-500 hover:text-primary">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
            <span className="sr-only">LinkedIn</span>
          </Link>
        </div>
      </div>
    </div>
  </footer>
}