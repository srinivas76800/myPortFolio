'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Lottie from "lottie-react";
import Weddingfloral from "../../assets/Weddingfloral.json";
import Drag from "../Components/Pointer"
import { SplitText } from 'gsap/all';
import { ContainerTextFlip } from '@/src/components/ui/container-text-flip';
import { EncryptedText } from "@/src/components/ui/encrypted-text";

export default function HeroSection() {
  const [open, setOpen] = useState(false);
  const navRef = useRef(null)

  return (
    <section className="relative h-full w-full bg-black text-white overflow-hidden rounded-b-4xl" style={{ cursor: '' }}>
      {/* navbar navigation */}
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

      {/* background img */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/Staticlandingpages.jpg')" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 h-full">
        <div className="relative z-20 flex flex-col items-end mt-30  text-end px-2">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl flex flex-col items-center gap-2 md:text-6xl sm:texl-lg font-bold tracking-tight"
          >
            <div>
              Hello{" "}
              <span className="inline-block w-32 h-10 sm:w-36 sm:h-12 md:w-42 md:h-16 overflow-hidden align-middle rounded-full">
                <video
                  src="/83c745cf.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </span>
              {" "} I'm Vivek
            </div>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-3 text-gray-100 text-sm sm:text-md md:text-xl lg:text-2xl max-w-2xl"
          >
            <ContainerTextFlip size="phone" interval={2000} words={["Full stack", "ReactJs", "ReactNative", "Express", "NodeJs"]} /> {" "}
            Developer who writes clean, efficient code and builds high-performance applications. I love blending creativity with logic crafting intuitive, pixel-perfect UIs and developing robust backend systems that just work.<br/>
            <EncryptedText
              text=" — Turning ideas into seamless digital experiences is what I do best."
              encryptedClassName="text-neutral-500"
              revealedClassName="dark:text-white text-white"
              revealDelayMs={50}
              className='text-white'
            />

          </motion.div>
        </div>

        <div className='w-screen h-50 my-5 flex justify-end items-end sm:gap-5 md:gap-8'>
          <Link
            href={'/Projects'}
            className='group overflow-hidden transition-all ease-in bg-white/15 border-gray-500 rounded-full px-0.5 py-0.5 text-3xl w-full text-center mx-5'
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl h-FULL px-8 py-3 text-white group-hover:bg-black rounded-full font-medium backdrop-blur ">
              <span className="block transition-transform duration-300 group-hover:-translate-x-[150%]">PROJECTS</span>
              <span className="absolute w-full top-full left-1/2 -translate-x-1/2 block transition-transform duration-300 group-hover:translate-y-[-140%]">CLICK ME</span>
            </p>
          </Link>

          <Link
            href="/ContactSection"
            className="group rainbow bg-white/15 overflow-hidden font-bold ease-in relative z-0 border-gray-500 rounded-full px-0.5 py-0.5 text-3xl w-full text-center mx-5"
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl h-FULL px-8 py-3 text-white bg-black rounded-full font-medium ck backdrop-blur ">
              <span className="block transition-transform duration-300 group-hover:-translate-x-[150%]">Contack me!</span>
              <span className="absolute w-full top-full left-1/2 -translate-x-1/2 block transition-transform duration-300 group-hover:translate-y-[-140%]">Let's Build Something Cool</span>
            </p>
          </Link>
        </div>

      </div>
    </section >
  );
}
