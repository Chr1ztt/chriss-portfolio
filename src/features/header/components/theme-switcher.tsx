"use client"

import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export default function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme()
  return <Button onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}>tes</Button>
}
