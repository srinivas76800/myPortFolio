"use client"
import React, { useState } from 'react'

export const SkillCart = ({img,title,para}) => {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    // Adjust the threshold value to control the tilt effect
    const threshold = 12;

    const handleMove = (e:any) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;
        setTilt({ x: y * -threshold, y: x * threshold });
    };
    return (
        <div className="rounded-xl shadow-xl overflow-hidden transition-transform duration-200 ease-out cursor-pointer max-w-60 bg-white m-10"
            onMouseMove={handleMove}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            style={{ transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)` }}
        >
            <img 
                src={`${img}`}
                className="w-full h-56 object-cover"
                alt={`${title}`} 
            />
            <h3 className="mt-3 px-4 pt-3 mb-1 text-lg font-semibold text-gray-800"> {title} </h3>
            <p className="text-sm px-4 pb-6 text-gray-600 w-5/6"> {para} </p>
        </div>
    )
}
