'use client';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative h-screen w-full bg-black text-white overflow-hidden rounded-b-4xl">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-fixed bg-cover bg-center"
          style={{ backgroundImage: "url('/IMG-20240629-WA0001.jpg')" }}
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
            className="text-4xl md:text-6xl font-bold tracking-tight"
          >
            Yo, I'm Vivek 👋
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-4 text-lg md:text-xl max-w-2xl"
          >
            A <span className='bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 px-3 py-1 mx-2 rounded-3xl font-bold text-black'>Full stack web developer</span> who codes clean, builds fast, and vibes with pixels & logic.
            From crafting smooth UIs to wiring solid backend systems <br /> — I turn coffee into code ☕.
          </motion.p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 1 }}
            transition={{ delay: 0.10 }}
            className="btnbox mt-8 inline-block bg-white text-black py-3 px-6 rounded-full shadow-md hover:bg-black font-bold hover:text-white"
          >
            Let's Build Something Cool 📸
          </motion.a>
        </div>
      </div>
    </section>
  );
}
