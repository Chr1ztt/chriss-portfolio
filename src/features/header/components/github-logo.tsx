"use client"

import Image from "next/image"
import Link from "next/link"
import GithubLight from "../../../../public/github_light.svg"
import GithubDark from "../../../../public/github_dark.svg"
import { cn } from "@/lib/utils"
import { ComponentProps } from "react"

type Props = ComponentProps<"a">

export default function GithubLogo({ className }: Props) {
  return (
    <Link href="https://github.com/Chr1ztt" target="_blank">
      <Image
        src={GithubLight}
        alt="Github Logo"
        className={cn("cursor-pointer hidden dark:block", className)}
      />
      <Image
        src={GithubDark}
        alt="Github Logo"
        className={cn("cursor-pointer block dark:hidden", className)}
      />
    </Link>
  )
}

