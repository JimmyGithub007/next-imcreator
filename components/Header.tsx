import { useDispatch, useSelector } from "react-redux";
import { HiMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";;
import { setFloor, setIsOpen } from "@/store/slice/floorSlice";
import { RootState } from "@/store";

import Image from "next/image"

const Header = () => {
    const dispatch = useDispatch();
    const { floor } = useSelector((state: RootState) => state.floor);

    return (<div className={`bg-white duration-300 fixed top-0 w-full z-10 ${floor > 0 ? "h-16" : "h-28"}`}>
        <div className="duration-300 flex h-full items-center justify-between px-8">
            <div className={`duration-300 overflow-hidden ${floor > 0 ? "h-[50px]" : "h-[100px]"}`}>
                <Image className={`duration-300 rounded-md ${floor > 0 ? "-translate-y-[25px] w-[100px]" : "-translate-y-[50px] w-[200px]"}`} alt="logo" width={200} height={200} src={"/assets/logo.jpg"} />
            </div>
            <motion.button
                whileHover={{ scale: 1.2, rotate: 360 }}
                whileTap={{
                    scale: 0.8,
                    rotate: -90,
                    borderRadius: "100%"
                }}
                onClick={() => dispatch(setIsOpen(true))}
                className="bg-slate-100 p-2 rounded-xl shadow-sm text-2xl md:hidden">
                <HiMenuAlt3 />
            </motion.button>
            <div className="font-bold gap-4 hidden md:flex">
                {
                    ["主页", "关于我们", "我们提供的服务", "成品展示", "联系我们"].map((value, key) => (
                        <motion.button 
                            initial={{
                                opacity: 0,
                            }}
                            animate={{
                                opacity: 1,
                                transition: {
                                    duration: 0.5,
                                    delay: key*0.1
                                }
                            }}
                            key={key} onClick={() => { dispatch(setFloor(key)) }} 
                            className={`duration-200 hover:text-slate-300 ${key === floor ? "text-slate-400" : "text-blue-950"}`}>
                            {value}
                        </motion.button>
                    ))
                }
            </div>
        </div>
    </div>)
}

export default Header;