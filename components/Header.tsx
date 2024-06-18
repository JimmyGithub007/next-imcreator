import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";;
//import { setIsOpen } from "@/store/slice/floorSlice";

import MenuToggleButton from "@/utils/MenuToggleButton";
import { Menu } from ".";
import { RootState } from "@/store";

const Header = ({ hideHeader }: { hideHeader: boolean }) => {
    //const dispatch = useDispatch();
    const { isOpen } = useSelector((state: RootState) => state.floor);

    return (<motion.div className={`bg-slate-100 duration-300 fixed left-0 mix-blend-difference w-screen z-50`}>
        <motion.div className="flex h-12 items-center justify-between px-8 w-full">
            <h1 className="font-bold text-xl z-10">IMCreator.</h1>
            <MenuToggleButton />
        </motion.div>
    </motion.div>)
}

export default Header;