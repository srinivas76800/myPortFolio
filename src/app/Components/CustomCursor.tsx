"use client"

import { motion, useSpring } from "motion/react"
import { useEffect, useState } from "react"

export default function CustomCursor() {
  const x = useSpring(0, { stiffness: 120, damping: 20 })
  const y = useSpring(0, { stiffness: 120, damping: 20 })
  // const [isTouch, setIsTouch] = useState(false)
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    // const touchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0

    // setIsTouch(touchDevice)

    // if (touchDevice) return
    const moveCursor = (e: MouseEvent) => {
      x.set(e.clientX - 25)
      y.set(e.clientY - 25)
    }

    const hoverElements = document.querySelectorAll("a, button, input")

    const handleEnter = () => setIsHovering(true)
    const handleLeave = () => setIsHovering(false)

    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", handleEnter)
      el.addEventListener("mouseleave", handleLeave)
    })

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)

      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter)
        el.removeEventListener("mouseleave", handleLeave)
      })
    }
  }, [x, y])
  // if (isTouch) return null   // ⭐ hide cursor on phones

  return (
    <motion.div
      animate={{
        scale: isHovering ? 1.8 : 1,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 30,
        height: 30,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        x,
        y,
        backgroundImage:
          "url('https://www.svgrepo.com/show/382370/emoticon-emotion-expression-smile.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  )
}