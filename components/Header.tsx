import { useDispatch, useSelector } from "react-redux";
import { HiMenuAlt3 } from "react-icons/hi";
import { motion } from "framer-motion";;
import { setIsOpen } from "@/store/slice/floorSlice";

import Image from "next/image"
import { RootState } from "@/store";

const Header = () => {
    const dispatch = useDispatch();
    const { floor } = useSelector((state: RootState) => state.floor);

    return (<div className={`bg-white duration-300 fixed top-0 w-full z-10 ${floor > 0 ? "h-16" : "h-28"}`}>
        <div className="duration-300 flex h-full items-center justify-between px-4">
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
                onClick={() => dispatch(setIsOpen(true)) }
                className="bg-slate-100 p-2 rounded-xl shadow-sm text-2xl md:hidden">
                <HiMenuAlt3 />
            </motion.button>
        </div>
    </div>)
}

export default Header;