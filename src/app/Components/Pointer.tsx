"use client"
import { frame, motion, useSpring } from "motion/react"
import { RefObject, useEffect, useRef } from "react"

export default function Drag() {
  const ref = useRef<HTMLDivElement>(null)
  const { x, y } = useFollowPointer(ref)

  return (
    <div style={{ cursor: 'none' }}>
      <motion.div ref={ref} style={{ ...ball, x, y }} />
    </div>
  )
}

const spring = { damping: 8, stiffness: 50, restDelta: 0.001 }

export function useFollowPointer(ref: RefObject<HTMLDivElement | null>) {
  const x = useSpring(0, spring)
  const y = useSpring(0, spring)

  useEffect(() => {
    if (!ref.current) return

    const handlePointerMove = ({ clientX, clientY }: MouseEvent) => {
      // ❗️ Check again inside pointer handler (since ref can become null later)
      if (!ref.current) return
      const element = ref.current

      frame.read(() => {
        if (!element) return // 🧠 Final safety inside frame callback
        x.set(clientX - element.offsetLeft - element.offsetWidth / 2)
        y.set(clientY - element.offsetTop - element.offsetHeight / 2)
      })
    }

    window.addEventListener("pointermove", handlePointerMove)
    return () => window.removeEventListener("pointermove", handlePointerMove)
  }, [x, y, ref])

  return { x, y }
}

const ball = {
  width: 50,
  height: 50,
  backgroundImage: "url('https://www.svgrepo.com/show/382370/emoticon-emotion-expression-smile.svg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "50%",
}
