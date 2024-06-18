"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const AnimatedMouse = () => {
    const [ mousePosition, setMousePosition ] = useState<{ x: number | 0, y: number | 0 }>({ x: 0, y: 0 });
    const [ cursorVariant, setCursorVariant ] = useState<any>("default");

    const updateMousePosition = (e: MouseEvent) => {
        setMousePosition({ x: e.clientX, y: e.clientY });
    };

    useEffect(() => {
        window.addEventListener("mousemove", updateMousePosition);
        return () => window.removeEventListener("mousemove", updateMousePosition);
    }, []);

    const variants: any = {
        default: {
            x: mousePosition.x - 16,
            y: mousePosition.y - 16,
        },
        text: {
            height: 150,
            width: 150,
            x: mousePosition.x - 75,
            y: mousePosition.y - 75,
            backgroundColor: "yellow",
            mixBlendMode: "difference"
        }
    }

    return (
        <motion.div 
            style={{
                height: "32px", width: "32px", backgroundColor: "black", borderRadius: "50%", position: "fixed", top: 0, left: 0, pointerEvents: "none"
            }}
            variants={variants}
            animate={cursorVariant}
            transition={{ duration: 0.5}}
        />
    );
}

export default AnimatedMouse;
