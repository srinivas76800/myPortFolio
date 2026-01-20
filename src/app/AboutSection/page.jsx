'use client';
import { motion } from 'framer-motion';

export default function AboutSection() {

  const companyLogos = [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/500px-HTML5_logo_and_wordmark.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Javascript-shield.svg/1452px-Javascript-shield.svg.png",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png",
    "https://cdn.worldvectorlogo.com/logos/react-1.svg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s",
    "https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fcdn-images-1.medium.com%2Fmax%2F2000%2F0%2AyyP6c8KfRLSwCeY8.png",
    'https://i0.wp.com/iotbyhvm.ooo/wp-content/uploads/2019/01/expressjs.png?fit=872%2C472&ssl=1',
    'https://ih1.redbubble.net/image.1084299841.8155/tst,small,507x507-pad,600x600,f8f8f8.u2.jpg',
    'https://static.vecteezy.com/system/resources/previews/067/565/433/non_2x/tailwind-css-logo-rounded-free-png.png',
    'https://files.svgcdn.io/devicon/bootstrap-wordmark.svg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuHFsSq1aUCn8NkmC4p7xhYvYB02AZJBL3zQ&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTFP5nxXehZrk7fB5W_TaQ2TilhZdzNH8rSw&s',
    'https://cdn.worldvectorlogo.com/logos/expo-go-app.svg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1163px-Postgresql_elephant.svg.png',
  ];

  return (
    <section id="about" className="overflow-y-scroll [&::-webkit-scrollbar]:hidden bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/hero/bg-gradient-2.png')] h-screen py-20 px-6 bg-gray-100 dark:bg-zinc-950">
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

      <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none">
        <div className="marquee-inner flex will-change-transform min-w-[200%]" style={{ animationDuration: "15s" }}>
          <div className="flex">
            {[...companyLogos, ...companyLogos].map((company, index) => (
              <img
                key={index}
                src={`${company}`}
                alt={company}
                className="w-10 h-10 object-cover mx-6"
                draggable={false}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
