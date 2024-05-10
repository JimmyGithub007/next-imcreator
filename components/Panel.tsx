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
    const dispatch = useDispatch();
    const [ page, setPage ] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setPage((prevPage) => (prevPage % 3) + 1); // Wrap around to 1 after reaching page 3
        }, 5000);

        return () => clearInterval(interval); // Clear interval on component unmount
    }, []);

    return (<div id="floor0" className="flex flex-col gap-4 h-screen w-screen items-center justify-center relative">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8">
            <motion.h1
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        duration: 1,
                    }
                }}
                className="text-xl sm:text-2xl font-bold w-screen lg:w-[300px] text-center lg:text-left">
                <Typewriter
                    options={{
                        strings: ['Welcome to IMCREATOR', 'We have one-stop service for t-shirt printing'],
                        autoStart: true,
                        loop: true,
                    }}
                />
            </motion.h1>
            <div className="flex items-center justify-center h-60 w-60 sm:h-96 sm:w-96 border-2 overflow-hidden">
                {
                    [1, 2, 3].map((value, key) => {
                        return value === page && <motion.div
                            key={key}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                        >
                            <Image alt="" height={400} width={400} src={`/assets/panel/panel${value}.png`} />
                        </motion.div>
                    })
                }
            </div>
            {/*         <Image className="absolute" alt="" width={550} height={550} src={"/assets/panel/panel1.png"} />*/}
            <motion.div
                initial={{
                    opacity: 0,
                }}
                whileInView={{
                    opacity: 1,
                    transition: {
                        duration: 1,
                    }
                }}
                className="flex justify-center w-[300px]">
                <button 
                    onClick={() => dispatch(setFloor(4)) }
                    className="border-4 border-blue-950 duration-100 font-bold px-4 py-2 rounded-md text-md sm:text-xl hover:bg-blue-950 hover:text-white">
                    CONTACT US
                </button>
            </motion.div>
        </div>
        <motion.button
            initial={{
                opacity: 0,
            }}
            whileInView={{
                opacity: 1,
                transition: {
                    duration: 1,
                }
            }}
            onClick={() => dispatch(setFloor(1)) }
            className="border-4 border-blue-950 duration-100 flex font-bold items-center px-4 py-2 rounded-md text-md sm:text-xl hover:bg-blue-950 hover:text-white">
            <FaArrowDown />
            ABOUT US
        </motion.button>
    </div>)
}

export default Panel;