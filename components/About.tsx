import { motion } from "framer-motion"
//import { GrBottomCorner, GrTopCorner } from "react-icons/gr";

import Image from "next/image";
import Typewriter from 'typewriter-effect';

const About = () => {
    return (<div id="floor1" className="bg-slate-100 flex flex-col gap-8 h-screen w-screen items-center justify-center text-blue-950">
        <div className="flex flex-col lg:flex-row gap-8 relative">
            {/*<GrTopCorner className="absolute text-blue-950 text-7xl sm:text-9xl xl:-left-12 -top-12" />
            <GrBottomCorner className="absolute text-blue-950 text-7xl sm:text-9xl right-0 xl:-right-12 -bottom-12" />*/}
            <div className="flex flex-col gap-4 w-screen lg:w-[500px]">
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
                    className="font-bold text-xl sm:text-3xl px-8 md:px-24 lg:px-12"
                >
                    <Typewriter
                        options={{
                            strings: ['Who we are?', 'We are IMCREATOR'],
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
                    className="text-md sm:text-lg px-8 md:px-24 lg:px-12">
                    The company which provide one stop t-shirt printing service in JB area</motion.div>
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
                    className="text-md sm:text-lg px-8 md:px-24 lg:px-12">
                    Our factory produces fabrics in-house and designs & manufactures clothes according to customer requirements. We are the only JB that assists customers in &quot;tailoring&quot; their own exclusive corporate uniforms, ensuring you never clash outfits when stepping out.
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