import { motion } from "framer-motion"
//import { GrBottomCorner, GrTopCorner } from "react-icons/gr";

import Image from "next/image";
import Typewriter from 'typewriter-effect';

const About = () => {
    return (<div id="floor1" className="bg-slate-100 flex flex-col gap-8 h-screen w-screen items-center justify-center text-blue-950">
        <div className="flex flex-col lg:flex-row gap-8 relative">
            {/*<GrTopCorner className="absolute text-blue-950 text-7xl sm:text-9xl xl:-left-12 -top-12" />
            <GrBottomCorner className="absolute text-blue-950 text-7xl sm:text-9xl right-0 xl:-right-12 -bottom-12" />*/}
            <div className="flex flex-col font-bold gap-4 w-screen lg:w-[500px]">
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
                    className="text-xl sm:text-3xl px-8 md:px-24 lg:px-12"
                >
                    <Typewriter
                        options={{
                            strings: ['我们是谁?', '我们是IMCREATOR'],
                            autoStart: true,
                            loop: true,
                        }}
                    />
                </motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                        transition: {
                            duration: 1,
                            delay: 0.1,
                        }
                    }}
                    className="text-lg sm:text-xl px-8 md:px-24 lg:px-12">
                    是全JB一站式衣服印制公司</motion.div>
                <motion.div
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1,
                        transition: {
                            duration: 1,
                            delay: 0.2,
                        }
                    }}
                    className="text-lg sm:text-xl px-8 md:px-24 lg:px-12">
                    我们的工厂有自己生产布料, 根据顾客的要求来设计&制作衣服。全JB唯一帮顾客“量身而做”, 打造专属您的企业制服, 出门决不会撞衣服
                </motion.div>
            </div>
            <div className="flex gap-2 px-8 md:px-24 lg:px-12 justify-center">
                <div className="flex flex-col gap-2">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -50,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            rotate: 1,
                            transition: {
                                type: "spring",
                                bounce: 0.4,
                                duration: 1,
                            }
                        }}
                        className="overflow-hidden rounded-2xl shadow-2xl">
                        <Image alt="" width={300} height={300} src={"/assets/about/about1.jpg"} />
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: -50,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            rotate: 1,
                            transition: {
                                type: "spring",
                                bounce: 0.4,
                                duration: 1,
                                delay: 0.1
                            }
                        }}
                        className="overflow-hidden rounded-2xl shadow-2xl">
                        <Image alt="" width={300} height={300} src={"/assets/about/about2.jpg"} />
                    </motion.div>
                </div>
                <div className="flex flex-col gap-2">
                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            rotate: 1,
                            transition: {
                                type: "spring",
                                bounce: 0.4,
                                duration: 1,
                                delay: 0.3
                            }
                        }}
                        className="overflow-hidden rounded-2xl shadow-2xl">
                        <Image alt="" width={300} height={300} src={"/assets/about/about3.jpg"} />
                    </motion.div>
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            rotate: 1,
                            transition: {
                                type: "spring",
                                bounce: 0.4,
                                duration: 1,
                                delay: 0.2
                            }
                        }}
                        className="overflow-hidden rounded-2xl shadow-2xl">
                        <Image alt="" width={300} height={300} src={"/assets/about/about4.jpg"} />
                    </motion.div>
                </div>
            </div>
        </div>
    </div>)
}

export default About;