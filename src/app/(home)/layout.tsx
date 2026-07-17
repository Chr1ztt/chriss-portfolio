import HomeHeader from "@/features/header/components/home-header";
import { ComponentProps } from "react";


export default function HomeLayout({children}: ComponentProps<"div">){
return (
    <div>
        <HomeHeader/>
        {children}
    </div>
)
}