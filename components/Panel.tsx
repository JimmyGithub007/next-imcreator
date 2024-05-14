import { useContext, useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";

import Typewriter from "typewriter-effect";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { setFloor } from "@/store/slice/floorSlice";

const variants = {
    enter: {
        x: 200,
        opacity: 0
    },
    center: {
        zIndex: 1,
        x: 0,
        opacity: 1
    },
    exit: {
        zIndex: 0,
        x: -200,
        opacity: 0
    }
};

const Panel = () => {
    /*const dispatch = useDispatch();
    const [page, setPage] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setPage((prevPage) => (prevPage % 3) + 1); // Wrap around to 1 after reaching page 3
        }, 5000);

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);*/

    return (<div id="floor0" className="bg-slate-200 flex flex-col lg:flex-row h-screen w-screen items-center justify-center relative">
        <div className="text-white text-8xl lg:text-9xl pb-[180px] lg:pb-0 lg:pr-[100px] z-10">
            <motion.h1
                initial={{
                    opacity: 0,
                    x: 200
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 2,
                        type: "spring",
                        bounce: 0.4,
                    }
                }}>one stop
            </motion.h1>
            <motion.h1
                initial={{
                    opacity: 0,
                    x: 200
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 2,
                        delay: 0.1,
                        type: "spring",
                        bounce: 0.4,
                    }
                }}>printing
            </motion.h1>
        </div>
        <Image className="absolute w-[350px] lg:w-[450px] z-20" alt="" height={450} width={450} src={`/assets/panel/white-t-shirt.png`} />
        <div className="text-blue-950 text-8xl lg:text-9xl pl-[80px] text-end z-30">
            <motion.h1
                initial={{
                    opacity: 0,
                    x: -200
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 2,
                        type: "spring",
                        bounce: 0.4,
                    }
                }}>t-shirt
            </motion.h1>
            <motion.h1
                initial={{
                    opacity: 0,
                    x: -200
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        duration: 2,
                        delay: 0.1,
                        type: "spring",
                        bounce: 0.4,
                    }
                }}>service
            </motion.h1>
        </div>
        <div className="absolute w-screen lg:w-1/2 bg-blue-950 h-1/2 lg:h-screen left-0 top-0"></div>
    </div>)
}

export default Panel;