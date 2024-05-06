import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const variants = {
    enter: (direction: number) => {
        return {
            x: 200,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            x: -200,
            opacity: 0
        };
    }
};

const Slider = () => {
    const [page, setPage] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setPage((prevPage) => (prevPage % 3) + 1); // Wrap around to 1 after reaching page 3
        }, 5000);

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return <motion.div 
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
                transition: {
                    duration: 2,
                }
            }}
            className="absolute flex flex-col items-center"
        >
        {
            [1, 2, 3].map((value, key) => {
                return value === page && <motion.img
                    key={key}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    src={`/assets/panel/panel${value}.png`}
                    className="h-[500px]"
                />
            })
        }
        <div className="flex gap-2 items-center">
            {
                [1, 2, 3].map((value, key) => {
                    return <div key={key} className={`${value == page ? "bg-blue-950" : "bg-slate-200"} duration-300 w-2 h-2 rounded-full shadow-2xl`}></div>
                })
            }
        </div>
    </motion.div>
}

export default Slider;