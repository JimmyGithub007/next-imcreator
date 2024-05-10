import Image from "next/image";
import { motion } from "framer-motion"
import { RiCustomerService2Line } from "react-icons/ri";
import { GrCertificate } from "react-icons/gr";
import { RiBuilding2Line } from "react-icons/ri";
import { IoShirtOutline } from "react-icons/io5";
import { BsPrinter } from "react-icons/bs";
import { FaTruckArrowRight } from "react-icons/fa6";

const Service = () => {
    const services = [
        { icon: <RiBuilding2Line className="text-4xl sm:text-7xl" />, text: 'Factory direct sales' },
        { icon: <GrCertificate className="text-4xl sm:text-7xl" />, text: 'Over 20 years experience' },
        { icon: <RiCustomerService2Line className="text-4xl sm:text-7xl" />, text: 'One-to-one professional online consultation' },
        { icon: <IoShirtOutline className="text-4xl sm:text-7xl" />, text: 'Various fabrics' },
        { icon: <BsPrinter className="text-4xl sm:text-7xl" />, text: 'Various printing methods' }
    ];

    return (<div id="floor2" className="bg-slate-100 flex flex-col font-bold items-center justify-center gap-4 lg:gap-8 h-screen text-blue-950 px-4 lg:pt-[64px]">
        <motion.h1
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 1,
                }
            }}
            className="font-bold text-2xl sm:text-4xl">OUR SERVICES</motion.h1>
        <motion.h1
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 1,
                    delay: 0.2
                }
            }}
            className="border-4 border-blue-950 p-4 rounded-md text-md sm:text-2xl max-w-[900px]">
            One-stop services from design, fabric selection, styles, garment construction, to packaging of finished products, and more.
        </motion.h1 >
        <div className="flex gap-2 sm:gap-4 items-center">
            <motion.div
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
                        delay: 0.3
                    }
                }}
                className="bg-blue-950 rounded-md p-4 shadow-md text-white sm:text-3xl text-center">
                CUSTOM<br />PROCESS
            </motion.div>
            {
                [1, 2, 3, 4, 5].map((value, key) => {
                    return <motion.div
                        key={key}
                        initial={{
                            opacity: 0,
                            x: 50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                type: "spring",
                                bounce: 0.4,
                                duration: 1,
                                delay: 0.3 + key * 0.1
                            }
                        }}
                        className="flex flex-col sm:flex-row items-center gap-4"
                    >
                        <Image className="overflow-hidden rounded-lg sm:rounded-3xl shadow-md" alt="" width={120} height={120} src={`/assets/services/service_process_${value}.png`} />
                        { key < 4 && <FaTruckArrowRight /> }
                    </motion.div>
                })
            }
        </div>
        <motion.h1
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                    type: "spring",
                    bounce: 0.4,
                    duration: 1,
                    delay: 0.4
                }
            }} className="font-bold text-xl sm:text-3xl">Why choose us?
        </motion.h1>
        <div className="bg flex items-center gap-2">
            {
                services.map((value, key) => {
                    return <motion.div
                        key={key}
                        initial={{
                            opacity: 0,
                            y: 50,
                        }}
                        whileInView={{
                            opacity: 1,
                            y: 0,
                            transition: {
                                type: "spring",
                                bounce: 0.4,
                                duration: 1,
                                delay: 0.3 + key * 0.1
                            }
                        }}
                        className="flex flex-col gap-4 items-center lg:w-48">
                        {value.icon}
                        <h1 className="text-md sm:text-xl text-center">{value.text}</h1>
                    </motion.div>
                })
            }
        </div>
    </div>)
}

export default Service;