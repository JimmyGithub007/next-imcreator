import { useContext } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { ShareContext } from "@/app/page";
import { motion } from "framer-motion";
import Image from "next/image";

const Header = () => {
    const { setIsOpen } = useContext(ShareContext);

    return (<div className="bg-white fixed h-16 top-0 w-full z-10">
        <div className="flex h-full items-center justify-between px-4">
            <div className="overflow-hidden h-[50px]">
                <Image className="rounded-md -translate-y-[25px]" alt="logo" width={100} height={100} src={"/assets/logo.jpg"} />
            </div>
            <motion.button 
                whileHover={{ scale: 1.2, rotate: 360 }} 
                whileTap={{
                    scale: 0.8,
                    rotate: -90,
                    borderRadius: "100%"
                }}
                onClick={() => setIsOpen(true) }
                className="bg-slate-100 p-2 rounded-xl shadow-sm text-2xl md:hidden">
                <HiMenuAlt3 />
            </motion.button>
        </div>
    </div>)
}

export default Header;