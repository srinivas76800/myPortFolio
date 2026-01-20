'use client';
import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import Lottie from "lottie-react";
import Weddingfloral from "../../assets/Weddingfloral.json";
import Drag from "../Components/Pointer"
import { SplitText } from 'gsap/all';

export default function HeroSection() {
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);
  const navRef = useRef(null)

  const fullText = "HELLO";
  //text animation
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setText(fullText.slice(0, i + 1));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 350);
    return () => clearInterval(interval);
  }, []);
  // const textRef = useRef(null);

  //   useEffect(() => {
  //     gsap.fromTo(
  //       textRef.current,
  //       {
  //         backgroundSize: "0% 100%",
  //         duration: 0.5,
  //       },
  //       {
  //         backgroundSize: "100% 100%",
  //         duration: 5.5,
  //         ease: "power2.out",
  //       }
  //     );
  //   }, []);

  // const btnRef = useRef(null)
  // const flowarRef = useRef(null)

  // console.log(btnRef.current.style)

  // if (typeof window !== "undefined") {
  //   let split = SplitText.create(".split", { type: "words, chars" });

  //   SplitText.create(".split", {
  //     type: "words,lines",
  //     linesClass: "line",
  //     autoSplit: true,
  //     mask: "lines",
  //     onSplit: (self) => {
  //       split = gsap.from(self.lines, {
  //         duration: 2,
  //         yPercent: 100,
  //         opacity: 0,
  //         stagger: 0.1,
  //         ease: "expo.out",
  //       });
  //       return split;
  //     }
  //   });
  // }



  // const mouseenter = () => {
  //   flowarRef.current.style.display = '',
  //     btnRef.current.style.backgroundColor = 'red'
  // }
  // const mouseleave = () => {
  //   flowarRef.current.style.display = 'none',
  //     btnRef.current.style.backgroundColor = ''
  // }
  return (
    <section className="relative h-screen w-full bg-black text-white overflow-hidden rounded-b-4xl" style={{ cursor: '' }}>
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
      {/* <Drag /> */}
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
          // ref={textRef}
          >
            I'm a <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 px-3 py-1 mx-2 rounded-3xl font-bold text-black'>Full stack web developer</span> who writes clean, efficient code and builds high-performance applications. <br /> I love blending creativity with logic crafting intuitive, pixel-perfect UIs and developing robust backend systems that just work.<br /> — Turning ideas into seamless digital experiences is what I do best.
          </motion.p>
          {/* <Link
            href="/ContactSection" className="rainbow mt-8 font-bold relative z-0 bg-white/15 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100">
            <button className="px-8 text-sm py-3 text-white bg-black rounded-full font-medium ck backdrop-blur">
              Let's Build Something Cool
            </button>
          </Link> */}
        </div>
        <div className='w-screen h-50 my-5 flex justify-end items-end gap-10'>
          <Link
            href={'/Projects'}
            className='group overflow-hidden transition-all ease-in bg-white/15 border-gray-500 rounded-full px-0.5 py-0.5 text-3xl w-full text-center mx-5'
          >
            <p className="h-FULL px-8 py-3 text-white group-hover:bg-black rounded-full font-medium backdrop-blur ">
              <span className="block transition-transform duration-300 group-hover:-translate-x-[150%]">PROJECTS</span>
              <span className="absolute w-full top-full left-1/2 -translate-x-1/2 block transition-transform duration-300 group-hover:translate-y-[-130%]">CLICK ME</span>
            </p>
          </Link>
          <Link
            href="/ContactSection"
            className="group rainbow bg-white/15 overflow-hidden font-bold ease-in relative z-0 border-gray-500 rounded-full px-0.5 py-0.5 text-3xl w-full text-center mx-5">
            <p className="h-FULL px-8 py-3 text-white bg-black rounded-full font-medium ck backdrop-blur ">
              {/* <button className="px-8 text-sm py-3 text-white bg-black rounded-full font-medium ck backdrop-blur"></button> */}
              <span className="block transition-transform duration-300 group-hover:-translate-x-[150%]">Contack me !</span>
              <span className="absolute w-full top-full left-1/2 -translate-x-1/2 block transition-transform duration-300 group-hover:translate-y-[-130%]">Let's Build Something Cool</span>
            </p>
          </Link>
          {/* <Link className='group overflow-hidden transition-all ease-in border-2 border-white rounded-full px-5 py-2 text-3xl w-full text-center mx-5' href={'/Skills'} >
            <p className="relative h-FULL overflow-hidden">
            </p>
          </Link> */}
        </div>
      </div>
    </section >
  );
}
