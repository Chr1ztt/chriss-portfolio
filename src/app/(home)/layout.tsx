import HomeHeader from "@/features/header/components/HomeHeader";
import { ComponentProps } from "react";


export default function HomeLayout({children}: ComponentProps<"div">){
return (
    <div>
        <HomeHeader/>
        {children}
    </div>
)
}