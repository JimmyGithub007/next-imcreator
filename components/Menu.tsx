import { IoIosClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { RootState } from "@/store";
import { setFloor, setIsOpen } from "@/store/slice/floorSlice";

const Menu = () => {
    const dispatch = useDispatch();
    const { floor, isOpen } = useSelector((state: RootState) => state.floor);

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
                className="bg-slate-200 fixed h-screen left-0 top-0 w-screen z-40">
                <div className="flex flex-col items-center gap-4 font-bold text-2xl pt-[64px]">
                    {
                        ["HOME", "ABOUT US", "OUR SERVICES", "PRODUCT", "CONTACT US"].map((value, key) => (
                            <button key={key} onClick={() => { dispatch(setFloor(key)); dispatch(setIsOpen(false)) }} className={`duration-200 hover:text-slate-300 ${key === floor ? "text-slate-400" : "text-blue-950"}`}>{value}</button> 
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
                        onClick={() => dispatch(setIsOpen(false))}>
                        <IoIosClose />
                    </motion.button>
                </div>
            </motion.div>}
    </AnimatePresence>)
}

export default Menu;