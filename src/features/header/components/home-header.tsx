import Image from "next/image"
import logo from "../../../../public/android-chrome-512x512.png"
import githubLogo from "../../../../public/github.svg"
import Link from "next/link"

export default function HomeHeader() {
  return (
    <div className="fixed top-0 z-20 flex w-full flex-row items-center justify-between p-4">
      <Image src={logo} alt="Logo" className="size-10" />
      <div className="flex w-fit flex-row items-center justify-center gap-4">
        <div className="font-light cursor-pointer">RESUME</div>
        <div className="font-light cursor-pointer">PROJECT</div>
        <Link href="https://github.com/Chr1ztt" target="_blank">
          <Image src={githubLogo} alt="Github Logo" className="size-10 cursor-pointer" />
        </Link>
      </div>
    </div>
  )
}
