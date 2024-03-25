"use client"

import * as React from "react"
import { IconMoon,IconSun } from "@tabler/icons-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"


export default function ThemeToggle() {
  const { setTheme } = useTheme()

  return (
  
        <Button size="icon">
          <IconMoon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" onClick={() => setTheme("dark")}/>
          <IconSun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" onClick={() => setTheme("light")}/>
          <span className="sr-only">Toggle theme</span>
        </Button>

  )
}
