"use client";

import gsap from "gsap"
import { LenisRef, ReactLenis } from "lenis/react"
import { ComponentProps, ReactNode, useEffect, useRef } from "react"

interface Props extends ComponentProps<"div"> {
  children: ReactNode
}

export function Wrapper({ children }: Props) {
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    function update(time: number) {
      lenisRef.current?.lenis?.raf(time * 1000)
    }

    gsap.ticker.add(update)

    return () => gsap.ticker.remove(update)
  }, [])

  return (
    <ReactLenis root options={{ autoRaf: false }} ref={lenisRef}>
      {children}
    </ReactLenis>
  )
}
