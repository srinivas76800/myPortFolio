'use client';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Lottie from "lottie-react";
import waveyBirdie from "../assets/WaveyBirdie.json";
 
export default function HeroSection() {
  const [text, setText] = useState("");
  const fullText = "YOOO";
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
    <section className="relative h-screen w-full bg-black text-white overflow-hidden rounded-b-4xl">
      {/* Background Image */}
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
            className="text-4xl flex items-center gap-2 md:text-6xl font-bold tracking-tight"
          >
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
            {" "}I'm Vivek
            {/* <Lottie
              animationData={waveyBirdie}
              loop={true}
              className="w-22 h-22"
            /> */}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 text-lg md:text-xl max-w-2xl"
          >
            A <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 px-3 py-1 mx-2 rounded-3xl font-bold text-black'>Full stack web developer</span> who codes clean, builds fast, and vibes with pixels & logic.
            From crafting smooth UIs to wiring solid backend systems <br /> — I turn coffee into code.
          </motion.p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            transition={{ delay: 0.10 }}
            className="btnbox mt-8 flex items-center bg-white text-black px-6 rounded-full shadow-md hover:bg-black font-bold hover:text-white"
          >
            Let's Build Something Cool <span>  <Lottie
              animationData={waveyBirdie}
              loop={true}
              className="w-12 h-12"
            /></span>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
