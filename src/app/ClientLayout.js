"use client";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Stairs from "./Components/Stairs";

export default function ClientLayout({ children }) {
    const pathname = usePathname();
    const [currentPath, setCurrentPath] = useState(pathname);
    // const pathname = usePathname();
    const stairsRef = useRef();

    useEffect(() => {
        console.log("Route changed: from client file", pathname);
        setCurrentPath(pathname);
        stairsRef.current?.play(); // 🔥 trigger animation instead of re-rendering
    }, [pathname]);

    return (
        <>
            {currentPath}
            {children}
        </>
    );
}
