"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import useCurrentPath from "../hooks/useCurrentPath";

const Stairs = ({ children }) => {
    const currentPath = useCurrentPath();
    const stairs = useRef(null);
    const pageRef = useRef(null);

    useGSAP(
        () => {
            const tl = gsap.timeline();

            tl.to(stairs.current, { display: "block" })
                .from(".stair", { height: 0, stagger: { amount: -0.25 } })
                .to(".stair", { y: "100%", stagger: { amount: -0.25 } })
                .to(stairs.current, { display: "none" })
                .set(".stair", { y: "0%" });

            gsap.from(pageRef.current, {
                opacity: 0,
                delay: 1.3,
                scale: 1.2,
            });
        },
        [currentPath]
    );

    return (
        <div
        >
            <div ref={stairs} className="h-screen w-full flex fixed top-0 z-30">
                <div className="h-full w-full flex">
                    <div className="stair h-full w-1/5 bg-black"></div>
                    <div className="stair h-full w-1/5 bg-black"></div>
                    <div className="stair h-full w-1/5 bg-black"></div>
                    <div className="stair h-full w-1/5 bg-black"></div>
                    <div className="stair h-full w-1/5 bg-black"></div>
                </div>
            </div>
            <div ref={pageRef}>
                {children}
            </div>
        </div>
    );
};

export default Stairs;
