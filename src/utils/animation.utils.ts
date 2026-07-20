import { gsap, SplitText } from "@/lib/gsap"

export function blinkEffect(selectorClassName: string, delay?: number) {
  const splitText = SplitText.create(selectorClassName, { type: "words, chars" })
  splitText.chars.forEach((char) => {
    const totalDelay = delay ?? Math.random() * 0.5
    gsap.from(char, {
      visibility: "hidden",
      keyframes: [
        { visibility: "hidden" },
        { visibility: "visible" },
        { visibility: "hidden" },
        { visibility: "visible" },
        { visibility: "hidden" },
        { visibility: "visible" },
        { visibility: "hidden" },
        { visibility: "visible" },
        { visibility: "hidden" },
        { visibility: "visible" },
      ],
      duration: 0.5,
      ease: "power1.in",
      delay: totalDelay,
    })
  })
}
