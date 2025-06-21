"use client";

import logoDark from "@/assets/images/logos/Black.png";
import logoLight from "@/assets/images/logos/White.png";
import DarkModeToggle from "./dark-mode-toggle";
import { useTheme } from "next-themes";

export default function Header() {
  const navigations = [
    {
      name: "Home",
      href: "/",
      current: true,
    },
  ];

  const socials = [
    {
      name: "Twitter",
      href: "https://twitter.com/keyjeyelpi",
    },
    {
      name: "GitHub",
      href: "https://github.com/keyjeyelpi",
    },
  ];

  const { theme, systemTheme } = useTheme();

  return (
    <header className="sticky top-0 z-[50] w-full border-b border-transparent bg-transparent backdrop-blur-md dark:bg-black/80">
      <div className="hidden lg:block">
        <div className="mx-auto flex h-16 max-w-[88rem] items-center px-8">
          <div className="mr-4 hidden md:flex">
            <a
              className="flex items-center justify-center space-x-2 text-2xl font-bold py-6 text-center text-neutral-600 dark:text-gray-100 selection:bg-emerald-500 mr-10"
              href="/"
            >
              <div className="relative h-10 w-10 md:h-8 md:w-8 bg-black dark:bg-white p-1 border border-slate-800  text-white flex items-center justify-center rounded-md text-sm antialiased">
                <div className="absolute h-10 w-full bg-white/[0.2] -top-10 inset-x-0 rounded-full blur-xl"></div>
                <div className="text-sm  text-emerald-500 relative z-20">
                  <img
                    alt="Logo"
                    loading="lazy"
                    width={50}
                    height={50}
                    decoding="async"
                    data-nimg="1"
                    src={systemTheme === "light" ? logoLight.src : logoDark.src}
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <h1 className="light:text-black dark:text-white font-sans">
                  keyjeyelpi
                </h1>
              </div>
            </a>
          </div>
          <a
            className="focus-visible:ring-ring hover:text-accent-foreground mr-2 inline-flex h-9 items-center justify-center rounded-md px-0 py-2 text-base font-medium transition-colors hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:hidden"
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:rn:"
            data-state="closed"
            href="/"
          >
            <div className="relative flex h-8 w-8 items-center justify-center rounded-md border border-slate-800 light:bg-black dark:bg-white text-sm text-white antialiased md:h-6 md:w-6">
              <div className="absolute inset-x-0 -top-10 h-10 w-full rounded-full bg-white/[0.2] blur-xl"></div>
              <div className="relative z-20 text-sm text-emerald-500">
                <img
                  alt="Logo"
                  loading="lazy"
                  width={50}
                  height={50}
                  decoding="async"
                  data-nimg="1"
                  srcSet="/logo.png 1x, /logo.png 2x"
                  src="/logo.png"
                  style={{ color: "transparent" }}
                />
              </div>
            </div>
          </a>
          <nav className="flex items-center space-x-6 text-sm font-medium xl:flex">
            {navigations.map((navigation) => (
              <a
                key={JSON.stringify(navigation)}
                className="hover:text-foreground/80 text-muted-foreground hidden space-x-1 transition-colors sm:flex"
                href={navigation.href}
              >
                {navigation.name}
              </a>
            ))}
          </nav>
          <div className="flex flex-1 items-center justify-end gap-2 sm:gap-2 md:justify-end">
            {socials.map((social) => (
              <a
                target="__blank"
                className="hover:text-foreground/80 text-foreground/60 text-sm font-medium transition-colors"
                href={social.href}
              >
                {social.name}
              </a>
            ))}
            <DarkModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
