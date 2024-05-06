import Slider from "@/widgets/Slider";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa6";

const Panel = () => {
    return (<div id="floor0" className="flex flex-col gap-24 h-screen items-center justify-center">
        <div className="flex items-center justify-center gap-12">
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
                className="text-3xl font-bold">
                一站式制服印刷
            </motion.h1>
            <div className="bg-slate-50 rounded-full shadow-sm w-[400px] h-[400px]"></div>
            <Slider />
{/*         <Image className="absolute" alt="" width={550} height={550} src={"/assets/panel/panel1.png"} />*/}
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
                className="border-4 border-blue-950 font-bold px-4 py-2 rounded-md text-2xl hover:bg-blue-950 hover:text-white duration-300">
                直接联系我们
            </motion.button>
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
            className="border-4 border-blue-950 flex font-bold items-center px-4 py-2 rounded-md text-2xl hover:bg-blue-950 hover:text-white duration-300">
            <FaArrowDown />
            关于我们
        </motion.button>
    </div>)
}

export default Panel;