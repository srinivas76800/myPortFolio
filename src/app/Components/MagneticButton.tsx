"use client"

import { motion } from "motion/react"
import { useRef } from "react"

export default function MagneticButton({ children }: any) {
  const ref = useRef<HTMLDivElement>(null)

  const handleMouseMove = (e: any) => {
    const rect = ref.current!.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2

    ref.current!.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`
  }

  const reset = () => {
    ref.current!.style.transform = `translate(0px,0px)`
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      data-cursor="Click"
      style={{
        display: "inline-block",
        cursor: "none",
      }}
    >
      {children}
    </motion.div>
  )
}