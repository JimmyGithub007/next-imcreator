import { useContext, useEffect, useState } from "react";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { IoIosClose } from "react-icons/io";
import { AnimatePresence, motion } from "framer-motion";
import { ShareContext } from "@/app/page";

const Work = () => {
    const { floor } = useContext(ShareContext);
    const [ selectedId, setSelectedId ] = useState<string>("")

    useEffect(() => {
        setSelectedId("");
    }, [floor])

    return (<div id="floor3" className="bg-slate-100 flex flex-col gap-4 h-screen py-[64px] items-center justify-center relative text-blue-950">
        <div className="flex flex-col lg:flex-row gap-8 items-center sm:px-8">
            <motion.h1
                initial={{
                    opacity: 0,
                    x: -50,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        type: "spring",
                        bounce: 0.4,
                        duration: 1,
                    }
                }}
                className="border-4 border-blue-950 p-2 sm:p-4 rounded-md text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                成<br className="hidden lg:block" />品<br className="hidden lg:block" />展<br className="hidden lg:block" />示
            </motion.h1>
            <div className="flex gap-1 sm:gap-2 md:gap-2 lg:gap-4">
                {[0, 1, 2, 3, 4].map((v1, k1) => {
                    return <div className="flex flex-col gap-1 sm:gap-2 md:gap-2 lg:gap-4 -rotate-2 sm:-rotate-1" key={k1}>
                        {
                            [1, 2, 3].map((v2, k2) => {
                                return <motion.div
                                    key={k2}
                                    initial={{
                                        opacity: 0,
                                        y: -50,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            type: "spring",
                                            bounce: 0.4,
                                            duration: 1,
                                            delay: ((v1 * 3) + v2) * 0.05
                                        }
                                    }}
                                    layoutId={((v1 * 3) + v2).toString()} onClick={() => setSelectedId(((v1 * 3) + v2).toString())}
                                >
                                    <motion.img className="cursor-pointer w-[300px] md:w-[130px] lg:w-[150px]" alt="" src={`/assets/works/work${(v1 * 3) + v2}.jpg`} />
                                </motion.div>
                            })
                        }
                    </div>
                })
                }
            </div>
        </div>
        <div className="flex gap-4">
            <motion.button
                initial={{
                    opacity: 0,
                    y: -50,
                }}
                whileInView={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        type: "spring",
                        bounce: 0.4,
                        duration: 1,
                        delay: 0.7
                    }
                }}
                className="border-4 border-blue-950 duration-100 flex items-center py-2 px-4 rounded-md text-lg md:text-xl lg:text-2xl hover:bg-blue-950 hover:text-white">
                <FaArrowDown />
                联系我们
            </motion.button>
            <motion.button
                initial={{
                    opacity: 0,
                    x: -50,
                }}
                whileInView={{
                    opacity: 1,
                    x: 0,
                    transition: {
                        type: "spring",
                        bounce: 0.4,
                        duration: 1,
                        delay: 0.9
                    }
                }}
                className="border-4 border-blue-950 duration-100 flex items-center py-2 px-4 rounded-md text-lg md:text-xl lg:text-2xl hover:bg-blue-950 hover:text-white">
                <FaArrowRight />
                更多成品展示
            </motion.button>
        </div>
        <AnimatePresence>
            {selectedId && (
                <motion.div className="absolute left-[calc(50%-150px)] sm:left-[calc(50%-200px)] z-20" layoutId={selectedId}>
                    <motion.button className="absolute bg-white rounded-full -right-3 shadow-md text-4xl -top-3" onClick={() => setSelectedId("")}><IoIosClose /></motion.button>
                    <motion.img className="w-[300px] sm:w-[400px] shadow-md" src={`/assets/works/work${selectedId}.jpg`} />
                </motion.div>
            )}
        </AnimatePresence>
        { selectedId && <motion.div 
            initial={{
                opacity: 0,
            }}
            animate={{
                opacity: 0.5,
                transition: {
                    duration: 0.5
                }
            }}
            className="absolute bg-black w-screen h-screen z-10"></motion.div> 
        }
    </div>)
}

export default Work;