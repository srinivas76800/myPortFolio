'use client';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Lottie from "lottie-react";
import waveyBirdie from "../../assets/WaveyBirdie.json";
import Drag from "../Components/Pointer"
import Link from 'next/link';

export default function HeroSection() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const navRef = useRef(null)
  const fullText = "HELLO";
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 350);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full bg-black text-white overflow-hidden rounded-b-4xl" style={{ cursor: '' }}>
      <Link
        href='/FullScreenNav'
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="absolute w-40 h-10 right-0 top-0 z-10 p-3 bg-black cursor-pointer group"
      >
        <div className="h-full w-full">
          <div id="navBar" className="border" />
          <div className="mt-3.5 border w-[50%] float-end" />
        </div>

        <div
          ref={navRef}
          className={`bg-green-500 text-3xl font-bold text-center opacity-0 group-hover:opacity-100 pointer-events-none transition-all ease-in delay-4 absolute right-0 top-0 w-full ${open ? "h-full" : "h-0 "}`}
        >
          Menu
        </div>
      </Link>
      <Drag />
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/Staticlandingpages.jpg')" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 z-10" />
      </div>
      {/* Content */}
      <div className="relative z-20 h-full px-5">
        <div className="relative z-20 flex flex-col items-end mt-30 h-full text-end px-2">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl flex flex-col items-center gap-2 md:text-6xl font-bold tracking-tight"
          >
            <div>
              {text},{" "}
              <span className="inline-block w-40 h-14 overflow-hidden align-middle rounded-full">
                <video
                  src="/83c745cf.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </span>
            </div>
            I'm Vivek
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-3 text-lg md:text-xl max-w-2xl"
          >
            I'm a <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 px-3 py-1 mx-2 rounded-3xl font-bold text-black'>Full stack web developer</span> who writes clean, efficient code and builds high-performance applications. <br /> I love blending creativity with logic crafting intuitive, pixel-perfect UIs and developing robust backend systems that just work.<br /> — Turning ideas into seamless digital experiences is what I do best.
          </motion.p>
          <Link
            href="/ContactSection"
            className="btnbox mt-8 flex items-center bg-white text-black px-6 rounded-full shadow-md hover:bg-black font-bold hover:text-white"
          >
            Let's Build Something Cool <span>  <Lottie
              animationData={waveyBirdie}
              loop={true}
              className="w-12 h-12"
            /></span>
          </Link>
        </div>
      </div>
    </section>
  );
}
