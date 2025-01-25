"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import classNames from "classnames";

export function ModeToggle({ isFixed }) {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        asChild
        className={classNames("border border-solid ring-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0", {
          "border-gray-300 bg-transparent hover:bg-light-EAEEFE/30 dark:border-gray-700 dark:hover:bg-transparent": !isFixed,
          "border-gray-700 bg-transparent hover:bg-light-EAEEFE/30 dark:border-white/30 dark:hover:bg-transparent": isFixed,
        })}
      >
        <Button variant="outline" size="icon">
          <Sun
            className={classNames("h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0", {
              "text-black dark:text-white": !isFixed,
              "text-white dark:text-black": isFixed,
            })}
          />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-light-EAEEFE text-black">
        <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
