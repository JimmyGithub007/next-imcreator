import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { PiTShirtThin } from "react-icons/pi";
import { IoIosClose } from "react-icons/io";
import { GiShirtButton } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import { RootState } from "@/store";
//import { setFloor } from "@/store/slice/floorSlice";

const Work = () => {
    const dispatch = useDispatch();
    const { floor } = useSelector((state: RootState) => state.floor);
    const [ selectedId, setSelectedId ] = useState<string>("")

    useEffect(() => {
        setSelectedId("");
    }, [floor])

    return (<div id="floor3" className="bg-slate-100 flex flex-col gap-4 h-screen items-center justify-center relative text-blue-950">
        <div className="flex flex-col lg:flex-row gap-8 items-center sm:px-8 lg:pt-[64px]">
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
                    }
                }}
                className="border-4 border-blue-950 p-2 relative sm:p-4 rounded-md text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex items-center lg:block">
                P<br className="hidden lg:block" />R<br className="hidden lg:block" /><GiShirtButton className="text-2xl sm:text-4xl" />DUCT
                <PiTShirtThin className="absolute -rotate-12 right-2 top-8 text-4xl lg:text-6xl xl:text-8xl hidden lg:block" />
            </motion.div>
            <div className="flex gap-1 sm:gap-2 md:gap-2 lg:gap-4">
                {[0, 1, 2, 3, 4].map((v1, k1) => {
                    return <div className="flex flex-col gap-1 sm:gap-2 md:gap-2 lg:gap-4" key={k1}>
                        {
                            [1, 2, 3].map((v2, k2) => {
                                return <motion.img
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
                                    className="cursor-pointer w-[300px] md:w-[130px] lg:w-[150px]" alt="" src={`/assets/works/work${(v1 * 3) + v2}.jpg`}
                                />
                            })
                        }
                    </div>
                })
                }
            </div>
        </div>
        {/*<div className="flex gap-4">
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
                onClick={() => {
                    dispatch(setFloor(4));
                }}
                className="border-4 border-blue-950 duration-100 flex items-center py-2 px-4 rounded-md text-lg md:text-xl lg:text-2xl hover:bg-blue-950 hover:text-white">
                <FaArrowDown />
                CONTACT US
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
                MORE PRODUCTS
            </motion.button>
        </div>*/}
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