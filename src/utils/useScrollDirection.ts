import { useState, useEffect } from "react";

export function useScrollDirection(){
    const [scrollDirection, setScrollDirection] = useState<"down" | "up">();

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const updateScrollDirection = () => {
            const nowScrollY = window.scrollY;
            const direction = nowScrollY > lastScrollY ? "down" : "up";
            if(direction !== scrollDirection) {
                setScrollDirection(direction)
            }
            lastScrollY = nowScrollY > 0 ? nowScrollY : 0;
        };

        window.addEventListener("scroll", updateScrollDirection);
        return () => {
            window.removeEventListener("scroll", updateScrollDirection)
        }
    }, [scrollDirection])

    return scrollDirection;
}