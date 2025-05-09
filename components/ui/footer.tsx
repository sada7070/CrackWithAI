import { BrainCog } from "lucide-react";
import Link from "next/link";

type NavItem = {
  label: string;
  href: string;
};

type FooterProps = {
  navItems?: NavItem[];
};

export function Footer({ navItems }: FooterProps) {
  return (
    <footer className="border-t bg-white dark:bg-background">
      <div className="container flex flex-col gap-6 py-12 px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          
          <div className="flex items-center gap-2 font-bold text-xl">
            <BrainCog className="h-6 w-6 text-primary" />
            <Link href="/">
              <span>CrackWithAI</span>
            </Link>
          </div>
          
          {navItems?.length ? (
            <nav className="flex gap-4 md:gap-6 flex-wrap">
              {navItems.map((item, idx) => (
                <Link
                  key={idx}
                  href={item.href}
                  className="text-sm hover:underline underline-offset-4"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">© 2025 CrackWithAI. All rights reserved.</p>

          <div className="flex gap-4">
            {/* X (Twitter) */}
            <Link href="https://x.com/sada_7070?t=cv-feOIf_1NdjFMh-BNTPA&s=09" target="_blank" className="text-gray-500 hover:text-primary">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2h3.434L14.85 10.297 23.5 22h-7.024l-5.504-7.43L4.62 22H1.182l7.354-8.102L.5 2h7.243l4.987 6.752L18.244 2zm-1.2 18h1.896L7.65 4h-1.98L17.044 20z" />
              </svg>
              <span className="sr-only">X</span>
            </Link>

            {/* GitHub */}
            <Link href="https://github.com/sada7070/" target="_blank" className="text-gray-500 hover:text-primary">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd"
                  d="M12 0C5.373 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.385.6.111.82-.261.82-.58 0-.287-.011-1.046-.017-2.053-3.338.726-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.753-1.333-1.753-1.089-.745.083-.729.083-.729 1.205.085 1.838 1.236 1.838 1.236 1.07 1.833 2.807 1.304 3.492.997.108-.775.419-1.305.762-1.605-2.665-.305-5.466-1.332-5.466-5.932 0-1.31.469-2.381 1.236-3.22-.124-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404c1.019.005 2.045.137 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.243 2.873.12 3.176.77.839 1.235 1.91 1.235 3.22 0 4.61-2.804 5.624-5.476 5.921.43.37.823 1.103.823 2.222 0 1.604-.015 2.896-.015 3.286 0 .322.216.697.825.579C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              <span className="sr-only">GitHub</span>
            </Link>

            {/* LinkedIn */}
            <Link href="https://www.linkedin.com/in/sada70/" target="_blank" className="text-gray-500 hover:text-primary">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4V8zM9.5 8h3.64v2.05h.05c.51-.96 1.76-1.97 3.63-1.97 3.89 0 4.6 2.56 4.6 5.89V24h-4v-7.97c0-1.9-.03-4.35-2.65-4.35-2.65 0-3.05 2.07-3.05 4.2V24h-4V8z" />
              </svg>
              <span className="sr-only">LinkedIn</span>
            </Link>

            {/* Mail */}
            <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=sadashivamurthysp10656@gmail.com" target="_blank" className="text-gray-500 hover:text-primary pt-0.5">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M2 4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.2L12 13 2 5.2V4zm0 3.72V20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V7.72l-9.4 7.2a1 1 0 0 1-1.2 0L2 7.72z"
                />
              </svg>
              <span className="sr-only">Mail</span>
            </Link>

          </div>
        </div>
      </div>
    </footer>
  );
}