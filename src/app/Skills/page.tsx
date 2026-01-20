// import * as motion from "motion/react-client"
// import type { Variants } from "motion/react"
// import Image from "next/image"
"use client"
import { title } from "process";
import { useState } from "react";
import { SkillCart } from "../Components/SkillCart";

// export default function ScrollTriggered() {
//     return (
//         <>
//             <h2 className="text-4xl font-bold text-gray-800 dark:text-white mb-12 text-center mt-5">
//                 Skills and feedback  💬
//             </h2>
//             <div style={container}>
//                 {food.map(([key, emoji, hueA, hueB, text], i) => (
//                     <Card i={i} key={key} emoji={emoji} hueA={hueA} hueB={hueB} text={text} />
//                 ))}
//             </div>
//         </>
//     )
// }

// interface CardProps {
//     emoji: string;
//     hueA: number;
//     hueB: number;
//     i: number;
//     text: string;
// }

// function Card({ emoji, hueA, hueB, i, text }: CardProps) {
//     const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`

//     return (
//         <motion.div
//             className={`card-container-${i}`}
//             style={cardContainer}
//             initial="offscreen"
//             whileInView="onscreen"
//             viewport={{ amount: 0.8 }}
//         >
//             <div style={{ ...splash, background }} />
//             <motion.div style={card} variants={cardVariants} className="card">
//                 <img src={emoji} alt={emoji} />
//                 <p className="text-sm text-black">
//                     {text}
//                 </p>
//             </motion.div>
//         </motion.div>
//     )
// }

// const cardVariants: Variants = {
//     offscreen: {
//         y: 300,
//     },
//     onscreen: {
//         y: 50,
//         rotate: -10,
//         transition: {
//             type: "spring",
//             bounce: 0.4,
//             duration: 0.8,
//         },
//     },
// }

// const hue = (h: number) => `hsl(${h}, 100%, 50%)`

// /**
//  * ==============   Styles   ================
//  */

// const container: React.CSSProperties = {
//     margin: "100px auto",
//     maxWidth: 500,
//     paddingBottom: 100,
//     width: "100%",
// }

// const cardContainer: React.CSSProperties = {
//     overflow: "hidden",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     position: "relative",
//     paddingTop: 20,
//     marginBottom: -120,
// }

// const splash: React.CSSProperties = {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     clipPath: `path("M 0 303.5 C 0 292.454 8.995 285.101 20 283.5 L 460 219.5 C 470.085 218.033 480 228.454 480 239.5 L 500 430 C 500 441.046 491.046 450 480 450 L 20 450 C 8.954 450 0 441.046 0 430 Z")`,
// }

// const card: React.CSSProperties = {
//     fontSize: 164,
//     width: 300,
//     height: 430,
//     padding: '1rem',
//     display: "flex",
//     flexDirection: 'column',
//     justifyContent: "center",
//     alignItems: "center",
//     borderRadius: 20,
//     background: "white",
//     boxShadow: "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
//     transformOrigin: "10% 60%",
// }

// /**
//  * ==============   Data   ================
//  */



export default function ScrollTriggered() {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });
    const food = [
        {
            title: 'Html',
            img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_640.png",
            para: 'HTML — built structured, accessible, and SEO-friendly layouts for modern web apps.',
        }, {
            title: 'css',
            img: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_1280.png",
            para: 'CSS — designed responsive, modern UIs with smooth animations and consistent styling across devices.'
        }, {
            title: 'JavaScript',
            img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
            para: 'JavaScript — developed dynamic, interactive features and handled API integrations for seamless user experiences.'
        }, {
            title: 'TypeScript',
            img: "https://www.svgrepo.com/show/354478/typescript-icon.svg",
            para: 'TypeScript — built scalable and maintainable codebases with strong type safety and cleaner architecture.'
        }, {
            title: 'React.js',
            img: "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25085005/reactjs-inner.svg",
            para: 'React.js — developed fast, modular, and interactive UIs using reusable components and state management.'
        }, {
            title: 'Next.js',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSV9uzErWz9EXqZDxZ5lP9aYpMz8eK6rr5X3w&s",
            para: 'Next.js — built full-stack, SEO-optimized web apps with server-side rendering and dynamic API routes.'
        }, {
            title: 'Nest.js',
            img: "https://ih1.redbubble.net/image.1084299841.8155/tst,small,507x507-pad,600x600,f8f8f8.jpg",
            para: 'NestJS — developed robust, modular backends with JWT authentication, role-based access, and RESTful APIs.'
        }, {
            title: 'React Native',
            img: "https://images-cdn.openxcell.com/wp-content/uploads/2024/07/25082439/reactnative-inner.svg",
            para: 'React Native — built cross-platform mobile apps with smooth performance and native-like user experiences.'
        }, {
            title: 'Framer Motion',
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwrNikmpK8Ebm4saB_9ajuoH-UUY_JXK1RWg&s",
            para: 'Motion / Animations — created engaging, smooth, and interactive UI animations to enhance user experience.'
        }
    ]

    return (
        <div className="p-5 bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/refs/heads/main/assets/hero/bg-gradient-2.png')] h-screen overflow-y-scroll [&::-webkit-scrollbar]:hidden">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3">
                {food.map(({ title, img, para }: any, i: number) => {
                    return (
                        <div key={i}>
                            <SkillCart title={title} img={img} para={para} />
                        </div>
                    )
                })}
            </div>
        </div>
    );
};