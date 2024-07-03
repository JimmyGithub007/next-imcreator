import { ReactNode, useRef } from "react";
import { FaCirclePlay } from "react-icons/fa6";
import { FaFacebookF, FaInstagram, FaTshirt } from "react-icons/fa";
import { RiWhatsappFill } from "react-icons/ri";
import { LuPhone } from "react-icons/lu";
import { TbTruckDelivery } from "react-icons/tb";
import { Monoton, Sacramento, Shadows_Into_Light, Special_Elite } from "next/font/google";
import { motion, useScroll, useTransform } from "framer-motion"

import CountUp from 'react-countup';
import FramerMagnetic from "@/utils/FramerMagnetic";
import Image from "next/image";
import CircleText from "@/utils/CircleText";
const monoton = Monoton({ subsets: ["latin"], weight: '400' });
const sacramento = Sacramento({ subsets: ["latin"], weight: '400' });
const special_elite = Special_Elite({ subsets: ["latin"], weight: '400' });
const shadows_into_light = Shadows_Into_Light({ subsets: ["latin"], weight: '400' });

const ParallaxCard = ({ color, i, children, progress }: { color: string, i: number, children: ReactNode, progress: any }) => {
    const targetScale = 1 - ((3 - i) * 0.05);
    const range = [i * .25, 1];
    const scale = useTransform(progress, range, [1, targetScale]);
    return <motion.div className="flex h-screen items-center sticky top-0">
        <motion.div style={{ backgroundColor: color, scale, top: `calc(-5vh + ${i * 25}px)` }} className={`flex gap-8 h-[500px] items-center justify-center overflow-hidden relative rounded-3xl sm:rounded-[30px] shadow-lg shadow-slate-500/40 w-[calc(100vw-16px)] sm:w-[800px]`}>
            {children}
        </motion.div>
    </motion.div>
}

const About = () => {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({ target: container, offset: ['start start', 'end end'] });
    /*const refCard1 = useRef(null);
    const refCard2 = useRef(null);
    const refCard3 = useRef(null);
    const refCard4 = useRef(null);
    const refCard5 = useRef(null);
    const { scrollYProgress } = useScroll({ target: refCard1, offset: ['start end', 'start start'] });
    const { scrollYProgress: scrollYProgress1 } = useScroll({ target: refCard2, offset: ['start end', 'start start'] });
    const { scrollYProgress: scrollYProgress2 } = useScroll({ target: refCard3, offset: ['start end', 'start start'] });
    const { scrollYProgress: scrollYProgress3 } = useScroll({ target: refCard4, offset: ['start end', 'start start'] });
    const { scrollYProgress: scrollYProgress4 } = useScroll({ target: refCard5, offset: ['start end', 'start start'] });
    const cardScale = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    const cardScale1 = useTransform(scrollYProgress1, [0, 1], [1, 0.6])
    const cardScale2 = useTransform(scrollYProgress2, [0, 1], [1, 0.7])
    const cardScale3 = useTransform(scrollYProgress3, [0, 1], [1, 0.8])
    const cardScale4 = useTransform(scrollYProgress4, [0, 1], [1, 0.9])

    const videoThnumbnailScale4 = useTransform(scrollYProgress3, [0, 1], [2, 1.1])
    const videoThnumbnailScale5 = useTransform(scrollYProgress4, [0, 1], [2, 1.1])*/

    return (<div ref={container} className="bg-slate-50 flex flex-col items-center w-screen text-white z-10">
        <ParallaxCard color="#3D4D55" i={0} progress={scrollYProgress}>
            <div className="flex flex-col gap-8 items-center max-w-[300px] relative">
                <h1 className={`text-xl`}>WHO WE ARE?</h1>
                <span className="text-justify">Founded in 2021, a clothing supplier named IMCreator who providing professional T-shirt design and printing service, help customers to customize unique design for their clothing.</span>
                {/*<button className="bg-white rounded-full py-3 px-8 shadow-md shadow-black/40 text-blue-950">More About Us</button>*/}
                <div
                    className="flex gap-8 text-2xl sm:text-5xl">
                    <FramerMagnetic><a className="duration-200 hover:opacity-60" href="https://www.facebook.com/tshirtprintingJB/" target="_blank"><FaFacebookF /></a></FramerMagnetic>
                    <FramerMagnetic><a className="duration-200 hover:opacity-60" href="https://www.instagram.com/tshirtprintingjb/" target="_blank"><FaInstagram /></a></FramerMagnetic>
                    <FramerMagnetic><RiWhatsappFill className="cursor-pointer duration-200 hover:opacity-60" onClick={() => window.open("https://wa.me/60167555707", "_blank")} /></FramerMagnetic>
                </div>
            </div>
            {/*<FaTshirt className="absolute -bottom-[50px] -right-[50px] -rotate-[30deg] text-[200px]" />*/}
        </ParallaxCard>
        <ParallaxCard color="#A79E9C" i={1} progress={scrollYProgress}>
            <div className="flex flex-col gap-8 items-center px-8">
                <h1 className={`text-xl`}>WHY CHOOSE US?</h1>
                <span className="text-center">Customising a T-shirt can be a tedious process but we are here to help you get results instantly. <br />We’ll ensure you have a peace of mind and receive your customised T-shirts happily.</span>
                <div className="flex flex-wrap gap-4">
                    <div className="flex items-center gap-6">
                        <h1 className={`${monoton.className} text-3xl md:text-5xl`}>01</h1>
                        <span>Factory direct sales</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <h1 className={`${monoton.className} text-3xl md:text-5xl`}>02</h1>
                        <span>Over 20 years experience</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <h1 className={`${monoton.className} text-3xl md:text-5xl`}>03</h1>
                        <span>One to one online professional consultation (FOC)</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <h1 className={`${monoton.className} text-3xl md:text-5xl`}>04</h1>
                        <span>Various printing methods</span>
                    </div>
                </div>
            </div>
            {/*<CircleText text="over 20 years printing experiences" style={{ right: "0", bottom: "-100px", opacity: 0.5 }}/>*/}
        </ParallaxCard>
        <ParallaxCard color="#D3C3B9" i={2} progress={scrollYProgress}>
            <div className="flex flex-col gap-8 items-center px-8">
                <h1 className={`text-xl`}>WE PROVIDE</h1>
                <div className="flex gap-4">
                    <div className="flex flex-col gap-4">
                        <h1 className={`text-lg sm:text-xl`}>Printing method</h1>
                        <div className="flex items-center gap-6">
                            <h1 className={`${monoton.className} text-3xl`}>01</h1>
                            <span>Silkscreen printing </span>
                        </div>
                        <div className="flex items-center gap-6">
                            <h1 className={`${monoton.className} text-3xl`}>02</h1>
                            <span>Heatpress printing (DTF)</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <h1 className={`${monoton.className} text-3xl`}>03</h1>
                            <span>Embroidery</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <h1 className={`${monoton.className} text-3xl`}>04</h1>
                            <span>Sublimation printing </span>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className={`text-lg sm:text-xl`}>Printing purpose</h1>
                        <div className="flex items-center gap-6">
                            <h1 className={`${monoton.className} text-3xl`}>01</h1>
                            <span>Company uniform printing</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <h1 className={`${monoton.className} text-3xl`}>02</h1>
                            <span>Class uniform printing</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <h1 className={`${monoton.className} text-3xl`}>03</h1>
                            <span>Team uniforms</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <h1 className={`${monoton.className} text-3xl`}>04</h1>
                            <span>Event uniforms</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <h1 className={`${monoton.className} text-3xl`}>05</h1>
                            <span>Brand uniforms</span>
                        </div>
                    </div>
                </div>
            </div>
        </ParallaxCard>
        {/*<ParallaxCard color="#B58863" i={3} progress={scrollYProgress}>
            <div className="flex flex-col gap-8 items-center px-8">
                <h1 className={`text-xl`}>WHY DO CUSTOM T-SHIRT PRINTING?</h1>
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-6 py-4">
                        <h1 className={`${monoton.className} text-3xl md:text-5xl`}>01</h1>
                        <span>Raise the image of the company/brand as professional</span>
                    </div>
                    <div className="flex items-center gap-6 py-4">
                        <h1 className={`${monoton.className} text-3xl md:text-5xl`}>02</h1>
                        <span>Unique apparels with your own printed designs</span>
                    </div>
                    <div className="flex items-center gap-6 py-4">
                        <h1 className={`${monoton.className} text-3xl md:text-5xl`}>03</h1>
                        <span>Save your money & time</span>
                    </div>
                </div>
            </div>
        </ParallaxCard>*/}
        {/*<motion.div style={{scale: cardScale}} className="flex items-center h-screen sticky top-0">
            <motion.div style={{scale: cardScale1}} className="bg-blue-950 flex flex-col relative md:flex-row gap-8 items-center justify-center py-24 w-screen sm:rounded-3xl sm:w-[calc(100vw-12px)] md:w-[calc(100vw-80px)] max-w-[1000px] h-screen sm:h-auto sm:min-h-[700px] shadow-md shadow-blue-950/40">
                <div className="bg-slate-50 flex items-center justify-center h-[300px] w-[300px] sm:w-[400px] sm:h-[400px] shadow-md shadow-black/40">
                    <FramerMagnetic>
                        <button className="relative flex text-6xl">
                            <FaCirclePlay className="animate-ping absolute inline-flex h-full w-full opacity-75 text-blue-950" />
                            <FaCirclePlay className="relative inline-flex text-6xl text-blue-950" />
                        </button>
                    </FramerMagnetic>
                </div>
                <div className="flex flex-col gap-8 items-center max-w-[300px]">
                    <h1 className={`text-xl`}>WHO WE ARE?</h1>
                    <span className="text-justify">Founded in 2021, a clothing supplier named IMCreator who providing professional clothing design and printing service, help customers to customize unique design for their clothing.</span>
                    <button className="bg-white rounded-full py-3 px-8 shadow-md shadow-black/40 text-blue-950">More About Us</button>
                    <div
                        className="flex gap-8 text-2xl sm:text-5xl">
                        <FramerMagnetic><a className="duration-200 hover:opacity-60" href="https://www.facebook.com/tshirtprintingJB/" target="_blank"><FaFacebookF /></a></FramerMagnetic>
                        <FramerMagnetic><a className="duration-200 hover:opacity-60" href="https://www.instagram.com/tshirtprintingjb/" target="_blank"><FaInstagram /></a></FramerMagnetic>
                        <FramerMagnetic><RiWhatsappFill className="cursor-pointer duration-200 hover:opacity-60" onClick={() => window.open("https://wa.me/60167555707", "_blank")} /></FramerMagnetic>
                    </div>
                </div>
            </motion.div>
        </motion.div>
        <div ref={refCard2} className="flex items-center h-screen sticky top-0">
            <motion.div style={{scale: cardScale2}} className="bg-[#639cd9] flex flex-col gap-8 items-center justify-center py-24 relative w-screen sm:rounded-3xl sm:w-[calc(100vw-12px)] md:w-[calc(100vw-80px)] max-w-[1000px] sm:h-auto sm:min-h-[700px] shadow-md shadow-[#639cd9]/40">
                <h1 className={`text-xl`}>WHY PEOPLE CHOOSE US?</h1>
                <div className="divide-y-4 divide-dotted flex flex-col px-8 max-w-[550px]">
                    <div className="flex items-center gap-6 py-4">
                        <h1 className={`${monoton.className} text-yellow-400 text-3xl md:text-5xl`}>01</h1>
                        <span>Factory direct sales</span>
                    </div>
                    <div className="flex items-center gap-6 py-4">
                        <h1 className={`${monoton.className} text-yellow-400 text-3xl md:text-5xl`}>02</h1>
                        <span>A variety of fabris</span>
                    </div>
                    <div className="flex items-center gap-6 py-4">
                        <h1 className={`${monoton.className} text-yellow-400 text-3xl md:text-5xl`}>03</h1>
                        <span>Over 20 years experience and serving more than 1,319 small and medium-sized enterprises and more than 20 large enterprises</span>
                    </div>
                    <div className="flex items-center gap-6 py-4">
                        <h1 className={`${monoton.className} text-yellow-400 text-3xl md:text-5xl`}>04</h1>
                        <span>One to one online professional consultation (FOC)</span>
                    </div>
                    <div className="flex items-center gap-6 py-4">
                        <h1 className={`${monoton.className} text-yellow-400 text-3xl md:text-5xl`}>05</h1>
                        <span>Various printing methods</span>
                    </div>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-12">
                    <div className="flex flex-col items-center w-20 md:w-24">
                        <div className={`text-4xl md:text-6xl ${shadows_into_light.className}`}>
                            <CountUp enableScrollSpy={true} duration={3} start={0} end={20} />+
                        </div>
                        <div className="text-md md:text-lg text-center">Years<br />Experince</div>
                    </div>
                    <div className="flex flex-col items-center w-20 md:w-24">
                        <div className={`text-4xl md:text-6xl ${shadows_into_light.className}`}>
                            <CountUp enableScrollSpy={true} duration={1} start={0} end={1300} />+
                        </div>
                        <div className="text-md md:text-lg text-center">Customers<br />Serve</div>
                    </div>
                    <div className="flex flex-col items-center w-20 md:w-24">
                        <div className={`text-4xl md:text-6xl ${shadows_into_light.className}`}>
                            <CountUp enableScrollSpy={true} start={0} end={4} />+
                        </div>
                        <div className="text-md md:text-lg text-center">Printing<br />Techniques</div>
                    </div>
                    <div className="flex flex-col items-center w-20 md:w-24">
                        <div className={`text-4xl md:text-6xl ${shadows_into_light.className}`}>
                            <CountUp enableScrollSpy={true} start={0} end={7} />
                        </div>
                        <div className="text-md md:text-lg text-center">Days<br />Delivery</div>
                    </div>
                </div>
            </motion.div>
        </div>
        <div ref={refCard3} className="flex h-screen items-center sticky top-0">
            <motion.div style={{scale: cardScale3}} className="bg-[#5baaec] flex flex-col-reverse relative sm:flex-row gap-8 items-center justify-center py-24 w-screen sm:rounded-3xl sm:w-[calc(100vw-12px)] md:w-[calc(100vw-80px)] max-w-[1000px] h-screen sm:h-auto sm:min-h-[700px] shadow-md shadow-[#5baaec]/40">
                <div className="flex flex-col gap-8 items-center px-8">
                    <h1 className={`text-xl`}>HOW WE PROCESS?</h1>
                    <div className="flex items-center gap-2">
                        <span className="text-sm sm:text-lg">One to one professional consultation</span>
                        <h1 className={`${monoton.className} text-yellow-400 text-3xl md:text-5xl`}>01</h1>
                        <button className="bg-slate-200 flex font-bold items-center gap-2 px-6 py-3 rounded-full text-[#5baaec] text-sm sm:text-md shadow-sm shadow-slate-200/40"><LuPhone /> Contact Us</button>
                    </div>
                    <div className="flex items-center gap-2">
                        <button className="bg-slate-200 flex font-bold items-center gap-2 px-6 py-3 rounded-full text-[#5baaec] text-sm sm:text-md shadow-sm shadow-slate-200/40">How We Customize Your Shirt?</button>
                        <h1 className={`${monoton.className} text-yellow-400 text-3xl md:text-5xl`}>02</h1>
                        <span className="text-sm sm:text-lg">Design (Provide your design or we help you design)</span>
                    </div>
                    <div className="flex items-center gap-2">
                    <span className="text-sm sm:text-lg">Complete your payment</span>
                        <h1 className={`${monoton.className} text-yellow-400 text-3xl md:text-5xl`}>03</h1>
                    </div>
                    <div className="flex items-center gap-2">
                    <button className="bg-slate-200 flex font-bold items-center gap-2 px-6 py-3 rounded-full text-[#5baaec] text-sm sm:text-md shadow-sm shadow-slate-200/40">How We Print?</button>
                        <h1 className={`${monoton.className} text-yellow-400 text-3xl md:text-5xl`}>04</h1>
                        <span className="text-sm sm:text-lg">Start printing & packaging</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <TbTruckDelivery className="text-6xl" />
                        <h1 className={`${monoton.className} text-yellow-400 text-3xl md:text-5xl`}>05</h1>
                        <span className="text-sm sm:text-lg">7 days delivery</span>
                    </div>
                </div>
            </motion.div>
        </div>
        <div ref={refCard4} className="flex h-screen items-center sticky top-0">
            <motion.div style={{scale: cardScale4}} className="bg-[#526ed0] flex flex-col-reverse relative sm:flex-row gap-8 items-center justify-center py-24 w-screen sm:rounded-3xl sm:w-[calc(100vw-12px)] md:w-[calc(100vw-80px)] max-w-[1000px] h-screen sm:h-auto sm:min-h-[700px] shadow-md shadow-[#526ed0]/40">
                <div className="flex flex-col items-center gap-8">
                    <h1 className={`text-xl`}>HOW WE CUSTOMIZE YOUR SHIRT?</h1>
                    <div className="bg-slate-50 flex items-center justify-center h-[300px] w-[300px] sm:w-[400px] sm:h-[400px] overflow-hidden relative shadow-md shadow-black/40">
                        <motion.div className="absolute" style={{ scale: videoThnumbnailScale4 }}>
                            <Image alt="" width={500} height={500} src={"/assets/about/howwecustomizethumbnail.png"} />
                        </motion.div>
                        <FramerMagnetic>
                            <button className="relative flex text-6xl">
                                <FaCirclePlay className="animate-ping absolute inline-flex h-full w-full opacity-75 text-[#526ed0]" />
                                <FaCirclePlay className="relative inline-flex text-6xl text-[#526ed0]" />
                            </button>
                        </FramerMagnetic>
                    </div>
                </div>
            </motion.div>
        </div>
        <div ref={refCard5} className="flex h-screen items-center sticky top-0">
            <motion.div className="bg-[#484cb0] flex flex-col-reverse relative sm:flex-row gap-8 items-center justify-center py-24 w-screen sm:rounded-3xl sm:w-[calc(100vw-12px)] md:w-[calc(100vw-80px)] max-w-[1000px] h-screen sm:h-auto sm:min-h-[700px] shadow-md shadow-[#484cb0]/40">
                <div className="flex flex-col items-center gap-8">
                    <h1 className={`text-xl`}>HOW WE PRINT?</h1>
                    <div className="bg-slate-50 flex items-center justify-center h-[300px] w-[300px] sm:w-[400px] sm:h-[400px] overflow-hidden relative shadow-md shadow-black/40">
                        <motion.div className="absolute" style={{ scale: videoThnumbnailScale5 }}>
                            <Image alt="" width={500} height={500} src={"/assets/about/howweprintthumbnail.png"} />
                        </motion.div>
                        <FramerMagnetic>
                            <button className="relative flex text-6xl">
                                <FaCirclePlay className="animate-ping absolute inline-flex h-full w-full opacity-75 text-[#484cb0]" />
                                <FaCirclePlay className="relative inline-flex text-6xl text-[#484cb0]" />
                            </button>
                        </FramerMagnetic>
                    </div>
                </div>
            </motion.div>
        </div>*/}
    </div>)
}

export default About;