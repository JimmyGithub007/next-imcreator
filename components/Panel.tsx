"use client";

import { FaPhoneFlip } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { Monoton } from "next/font/google";
import { motion } from "framer-motion";

const monoton = Monoton({ subsets: ["latin"], weight: '400' });
import CustomSwiper from "@/utils/CustomSwiper";
import FramerMagnetic from "@/utils/FramerMagnetic";
import CircleText from "@/utils/CircleText";
import Image from "next/image";
import Link from "next/link";

const Panel = () => {
    return (<div className="bg-slate-50 flex flex-col-reverse lg:flex-row gap-4 md:gap-8 min-h-screen w-screen items-center justify-center relative z-10">
        <div className="absolute bottom-2 flex flex-col gap-1 items-center">
            <div className="bg-blue-950 w-8 h-10 rounded-full flex justify-center items-center">
                <div className="border-white border-2 flex h-8 items-center justify-center rounded-3xl w-6 text-4xl z-10">
                    <div className="animate-scroll bg-white h-1 rounded-full w-1"></div>
                </div>
            </div>
            <div className="text-slate-400 text-sm">scroll down</div>
        </div>
        <div className="flex flex-col gap-4 relative sm:gap-6 md:gap-8 lg:gap-10 items-center justify-center max-w-[600px] px-4 sm:px-0">
            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.1,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                        duration: 1.5,
                    }
                }}
                className="absolute bg-white w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-full -z-10 sm:-right-[100px]"
            ></motion.div>
            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.1,
                    y: 50
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    y: 0,
                    transition: {
                        duration: 1,
                        delay: 0.8,
                    }
                }}
                className="absolute -z-10 right-[20px] sm:-right-[75px] top-[180px] sm:top-[300px]">
                <FramerMagnetic>
                    <div className="bg-blue-950 rounded-full w-[80px] h-[80px] sm:w-[150px] sm:h-[150px] shadow-md shadow-black/40"></div>
                </FramerMagnetic>
            </motion.div>
            <motion.div
                initial={{
                    opacity: 0,
                    scale: 0.1,
                    x: -50,
                    y: 50,
                }}
                animate={{
                    opacity: 1,
                    scale: 1,
                    x: 0,
                    y: 0,
                    transition: {
                        duration: 1,
                        delay: 1,
                    }
                }}
                className="absolute -z-10 right-[110px] sm:right-[100px] top-[250px] sm:top-[400px]">
                <FramerMagnetic>
                    <div className="bg-blue-950 rounded-full w-[30px] h-[30px] sm:w-[50px] sm:h-[50px] shadow-md shadow-black/40"></div>
                </FramerMagnetic>
            </motion.div>
            <div
                className={`flex flex-col text-4xl sm:text-5xl md:text-6xl z-50`}>
                <div className="flex gap-2">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.8,
                                delay: 1
                            }
                        }}
                        className={`text-blue-950 ${monoton.className}`}>One Stop
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 20,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 0.8,
                            }
                        }}>T-shirt
                    </motion.div>
                </div>
                <div className="flex gap-2">
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -20,
                        }}
                        animate={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 0.8,
                            }
                        }}>Printing
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 20,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                duration: 0.8,
                                delay: 1
                            }
                        }}
                        className={`text-blue-950 ${monoton.className}`}>Service
                    </motion.div>
                </div>
                <motion.div
                    initial={{
                        opacity: 0,
                        x: 40,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 0.8,
                        }
                    }}
                >in Johor Bahru
                </motion.div>
            </div>
            <div className="flex gap-2 justify-center">
                <Link href={`/quotation`} className="bg-blue-950 flex items-center gap-4 px-5 py-3 rounded-full shadow-sm text-white text-sm sm:text-md">REQUEST FOR QUOTE<FaArrowRight /></Link>
                <button 
                    onClick={() => {
                        const element = document.getElementById(`contact`);
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                    className="flex font-bold items-center gap-4 px-5 py-3 rounded-full text-blue-950 text-sm sm:text-md">CONTACT US <FaPhoneFlip /></button>
            </div>
        </div>
        <motion.div
            initial={{
                opacity: 0,
                x: 100,
            }}
            animate={{
                opacity: 1,
                x: 0,
                transition: {
                    duration: 1.5,
                    delay: 1,
                }
            }}
            className="bg-white cursor-pointer h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] rounded-3xl shadow-md overflow-hidden">
            <CustomSwiper />
        </motion.div>
    </div>)
}

export default Panel;