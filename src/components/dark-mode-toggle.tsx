"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { TbMoon, TbPercentage50, TbSun } from "react-icons/tb";

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // avoids hydration mismatch

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 py-2 flex items-center justify-center px-3 outline-none focus:ring-0 focus:outline-none active:ring-0 active:outline-none">
          {theme === "light" ? (
            <TbSun />
          ) : theme === "dark" ? (
            <TbMoon />
          ) : (
            <TbPercentage50 />
          )}
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light Mode
          <DropdownMenuShortcut>
            <TbSun />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark Mode
          <DropdownMenuShortcut>
            <TbMoon />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          Auto
          <DropdownMenuShortcut>
            <TbPercentage50 />
          </DropdownMenuShortcut>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
