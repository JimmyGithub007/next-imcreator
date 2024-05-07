import Image from "next/image";
import { motion } from "framer-motion"
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowDown } from "react-icons/fa";

const Work = () => {
    return (<div id="floor3" className="bg-slate-100 flex flex-col gap-4 h-screen py-[64px] items-center justify-center text-blue-950">
        <div className="flex flex-col lg:flex-row gap-8 items-center px-8">
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
                    return <div className="flex flex-col gap-1 sm:gap-2 md:gap-2 lg:gap-4 -rotate-1" key={k1}>
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
                                >
                                    <Image className="md:w-[130px] lg:w-[150px]" alt="" width={200} height={200} src={`/assets/works/work${(v1 * 3) + v2}.jpg`} />
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
                className="border-4 border-blue-950 flex items-center py-2 px-4 rounded-md text-lg md:text-xl lg:text-2xl">
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
                className="border-4 border-blue-950 flex items-center py-2 px-4 rounded-md text-lg md:text-xl lg:text-2xl">
                <FaArrowRight />
                更多成品展示
            </motion.button>
        </div>
    </div>)
}

export default Work;