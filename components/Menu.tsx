import { useContext, useState } from "react";
import { ShareContext } from "@/app/page";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { IoIosClose } from "react-icons/io";



const Menu = () => {
    const { floor, setFloor, isOpen, setIsOpen } = useContext(ShareContext);

    return (<AnimatePresence>
        {isOpen &&
            <motion.div
                initial={{ y: "-100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{
                    bounce: 0,
                    duration: 0.3
                }}
                className="bg-slate-200 fixed h-screen left-0 top-0 w-screen z-20">
                <div className="flex flex-col items-center gap-4 font-bold text-2xl pt-[64px]">
                    {
                        ["主页", "关于我们", "我们提供的服务", "成品展示", "联系我们"].map((value, key) => (
                            <button key={key} onClick={() => { setFloor(key); setIsOpen(false) }} className={`duration-200 hover:text-slate-300 ${key === floor ? "text-slate-400" : "text-blue-950"}`}>{value}</button> 
                        ))
                    }
                    <motion.button
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        whileTap={{
                            scale: 0.8,
                            rotate: -90,
                            borderRadius: "100%",
                        }}
                        transition={{
                            duration: 0.2
                        }}
                        className="duration-200 hover:text-slate-300 text-6xl"
                        onClick={() => setIsOpen(false)}>
                        <IoIosClose />
                    </motion.button>
                </div>
            </motion.div>}
    </AnimatePresence>)
}

export default Menu;