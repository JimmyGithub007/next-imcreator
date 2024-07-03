import { CSSProperties, useEffect, useRef, useState } from "react";
import styles from "./style.module.css";

const CircleText = ({ text, style }: { text:string, style:CSSProperties }) => {
    const [deg, setDeg] = useState(0);
    const textRef = useRef(null);

    const circleText = text;

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDeg(prevDeg => prevDeg + 3);
        }, 100);
        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <div className="absolute z-40"
            style={style}
        >
            <div
                ref={textRef}
                className="duration-300 relative rounded-full flex items-center justify-center"
                style={{ width: "208px", height: "208px", rotate: deg + "deg" }}
            >
                {circleText.split("").map((char, index) => (
                    <span
                        key={index}
                        style={{ transform: `rotate(${index * 10.3}deg)` }}
                        className={styles.rotateText}
                    >
                        {char}
                    </span>
                ))}
            </div>
        </div>
    );
}

export default CircleText;