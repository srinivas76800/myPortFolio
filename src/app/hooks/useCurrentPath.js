"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function useCurrentPath() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return currentPath;
}
