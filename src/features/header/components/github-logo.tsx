"use client"

import Image from "next/image"
import Link from "next/link"
import githubDarkLogo from "../../../../public/github_dark.svg"
import { cn } from "@/lib/utils"
import { ComponentProps } from "react"
import { useTheme } from "next-themes"
import githubLightLogo from "../../../../public/github_light.svg"
type Props = ComponentProps<"a">

export default function GithubLogo( {className}: Props) {
  const {resolvedTheme} = useTheme()
  const githubLogo = resolvedTheme === "dark" ? githubDarkLogo : githubLightLogo

  return (
    <Link href="https://github.com/Chr1ztt" target="_blank">
      <Image src={githubLogo} alt="Github Logo" className={cn("cursor-pointer", className)} />
    </Link>
  )
}
