"use client"

import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme()
  return (
    <Button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={"size-8 cursor-pointer rounded-sm bg-background dark:bg-background"}
      variant={"outline"}
    >
      {resolvedTheme === "dark" ? <Moon /> : <Sun />}
    </Button>
  )
}
