'use client';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-gray-100 dark:bg-zinc-950">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >

          <div className="overflow-hidden rounded-3xl shadow-lg group">
            <img
              src="/edit.jpg"
              alt="Photographer"
              className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white mb-4">
            Meet Your Devloper ✌
          </h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed italic ">
            Hey there! I'm <span className="font-semibold text-black dark:text-white font-poetsen">Vivek</span>, — a full-stack web developer on a mission to build sleek, scalable, and high-performing web site's and apps. Currently working at <span className="font-semibold">Camel Q Software Solutions</span> and pursuing my MBA on the side (grind never stops, right? 😅).
            <br /><br />
            I vibe with modern tech stacks like<span className="font-semibold text-black dark:text-white"> Next.js, React.js | Tailwind CSS, Bootstrap, NetiveWind | ReactNative Expo | JavaScript, TypeScript | Node.js, Express, NestJS, and PostgreSQL.</span> From building pixel-perfect UIs to crafting scalable backend APIs, I write clean, maintainable code — and I’m all about using AI tools like GitHub Copilot and ChatGPT to work smarter, ship faster, and stay in the flow.
            <br /><br />
            Outside of the 9-to-6 dev grind, I love leveling up my skills, shipping passion projects, and helping out with my dad’s electronics & mobile business. Whether it’s web dev or real-world hustle — I stay plugged in.
            <br /><br />
            Let's build something epic. 🚀
          </p>
          <p className="mt-4  dark:text-gray-500">
            Full-stack web development, Java full stack | NestJS, Node.js, Express.js, core Java | Next.js, React.js, JavaScript, TypeScript | React Native, Expo | PostgreSQL, SQL | TailwindCSS, bootstrap, NativeWind.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
