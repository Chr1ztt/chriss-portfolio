import Image from "next/image"
import logo from "../../../../public/android-chrome-512x512.png"
import GithubLogo from "./github-logo"
import ThemeSwitcher from "./theme-switcher"

export default function HomeHeader() {
  return (
    <div className="fixed top-0 z-20 flex w-full flex-row items-center justify-between p-4">
      <Image src={logo} alt="Logo" className="size-10" />
      <div className="flex w-fit flex-row items-center justify-center gap-4 text-xs md:text-sm lg:text-base">
        <div className="font-light cursor-pointer">RESUME</div>
        <div className="font-light cursor-pointer">PROJECT</div>
        <div className="font-light cursor-pointer">GALLERY</div>
        <GithubLogo className="size-8 "/> 
        <ThemeSwitcher/>
      </div>
    </div>
  )
}
