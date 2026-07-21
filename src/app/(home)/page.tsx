"use client"

import { LANDING_ANIMATION_DELAY } from "@/constants/animation.constants"
import ProfilePhoto from "@/features/landing/components/profile-photo"
import { gsap } from "@/lib/gsap"
import { blinkEffect } from "@/utils/animation.utils"
import { useGSAP } from "@gsap/react"
import React, { ComponentProps } from "react"

type Props = ComponentProps<"div">

export default function Home({ ref }: Props) {
  const loadingClass = "loading-class"
  const firstClass = "split-first"
  const secondClass = "split-second"
  const infinityScrambleClass = "infinity-scramble"
  useGSAP(() => {
    gsap.fromTo(
      `.${loadingClass}`,
      { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" }, // full box
      {
        clipPath: "polygon(50% 50%, 50% 50%, 50% 50%, 50% 50%)", // shrink ke tengah
        duration: 1,
        delay: 2,
        ease: "power4.inOut",
      }
    )

    blinkEffect(`.${firstClass}`, Math.random() * 0.5 + LANDING_ANIMATION_DELAY)

    gsap.to(`.${secondClass}`, {
      delay: "4",
      duration: 1,
      scrambleText: {
        text: "I'm a",
        tweenLength: true,
      },
      stagger: {
        from: "random",
      },
    })

    gsap.to(`.${infinityScrambleClass}`, {
      delay: 4.5,
      keyframes: [
        { scrambleText: { text: "Fullstack Developer" }, delay: 0, duration: 2 },
        { scrambleText: { text: "Fullstack Developer" }, delay: 3, duration: 1, reversed: true },
        { scrambleText: { text: " " }, duration: 1 },
        { scrambleText: { text: "Software Architecture Enthusiast" }, delay: -0.3, duration: 3 },
        { scrambleText: { text: "Software Architecture Enthusiast" }, delay: 3, duration: 1.5, reversed: true },
        { scrambleText: { text: " " }, duration: 1.5 },
        { scrambleText: { text: "Gamer :D" }, delay: -0.3, duration: 1 },
        { scrambleText: { text: "Gamer :D" }, delay: 3, duration: 1, reversed: true },
        { scrambleText: { text: " " }, duration: 1 },
      ],
      repeat: -1,
      repeatDelay: -0.3,
    })
  })

  // const lenis = new Lenis();
  // gsap.ticker.lagSmoothing(0);

  // Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
  // lenis.on("scroll", ScrollTrigger.update);

  // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
  // This ensures Lenis's smooth scroll animation updates on each GSAP tick
  // gsap.ticker.add((time) => {
  //   lenis.raf(time * 1000); // Convert time from seconds to milliseconds
  // });

  // // Disable lag smoothing in GSAP to prevent any delay in scroll animations
  // document.addEventListener("DOMContentLoaded", function () {
  //   if (typeof gsap === "undefined" || typeof ScrollTrigger === "undefined") {
  //     throw new Error("GSAP or ScrollTrigger is not defined");
  //   }
  //   console.log("lolos uji");
  //   gsap.registerPlugin(ScrollTrigger);
  //   const runAnimation = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".testimony-content",
  //       start: "top bottom",
  //       end: "bottom top",
  //       scrub: true,
  //     },
  //   });

  //   runAnimation.add([
  //     gsap.from(".testimony-image-1", { y: 10 }),
  //     gsap.from(".testimony-image-2", { y: 20 }),
  //     gsap.from(".testimony-image-3", { y: 40 }),
  //     gsap.from(".testimony-image-4", { y: 50 }),
  //     gsap.from(".testimony-image-5", { y: 20 }),
  //     gsap.from(".testimony-image-6", { y: 700 }),
  //     gsap.from(".testimony-image-7", { y: 10 }),
  //   ]);

  //   const parallaxImages = [
  //     { selector: ".testimony-image-1", y: -10 },
  //     { selector: ".testimony-image-2", y: -20 },
  //     { selector: ".testimony-image-3", y: -40 },
  //     { selector: ".testimony-image-4", y: -50 },
  //     { selector: ".testimony-image-5", y: -20 },
  //     { selector: ".testimony-image-6", y: -70 },
  //     { selector: ".testimony-image-7", y: -10 },
  //   ];
  //   ScrollSmoother.create({
  //     smooth: 0.5, // how long (in seconds) it takes to "catch up" to the native scroll position
  //     effects: true, // looks for data-speed and data-lag attributes on elements
  //     smoothTouch: 0.1, // much shorter smoothing time on touch devices (default is NO smoothing on touch devices)
  //     ease: "none",
  //   });
  //   gsap.to("service-texts", {
  //     x: 150,
  //     duration: 0,
  //     ease: "power4.out",
  //     scrollTrigger: {
  //       trigger: ".testimony-content",
  //       start: "top bottom",
  //       end: "bottom top",
  //       scrub: true,
  //     },
  //   });

  //   parallaxImages.forEach((item) => {
  //     gsap.to(item.selector, {
  //       y: item.y,
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: ".testimony-content",
  //         start: "top bottom",
  //         end: "bottom top",
  //         scrub: true,
  //       },
  //     });
  //   });

  //   console.log("END");
  // });

  return (
    <div className="relative overflow-hidden">
      <div className="absolute flex h-dvh w-screen items-center justify-center">
        <ProfilePhoto />
      </div>
      <div className={`fixed inset-0 z-30 h-screen w-screen bg-foreground ${loadingClass}`}></div>
      <div ref={ref} className="z-10 flex min-h-screen flex-col justify-end bg-background p-4 lg:p-8">
        <div className="flex flex-row items-end justify-between">
          <div className="flex flex-col justify-end">
            <div className={`text-base md:text-lg lg:text-4xl font-normal ${firstClass} `}>Christian Adi Ananta</div>
            <div className="flex flex-row h-4">
              <span className={`text-[0.5rem] md:text-base lg:text-2xl ${secondClass} font-normal`}> </span>&nbsp;&nbsp;
              <span className={`text-[0.5rem] md:text-base lg:text-2xl font-normal ${infinityScrambleClass}`}></span>
            </div>
          </div>
          <div className="flex flex-col items-end">
            <div className={`text-sm md:text-base lg:text-3xl font-normal`}>My Portfolio</div>
            <div className={`text-xs md:text-sm lg:text-xl font-normal underline`}>Contact Me</div>
          </div> 
        </div>
      </div>
    </div>
  )
}
