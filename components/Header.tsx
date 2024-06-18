import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion";;
import { setIsOpen } from "@/store/slice/floorSlice";

import MenuToggleButton from "@/utils/MenuToggleButton";
import { Menu } from ".";

const Header = ({ hideHeader }: { hideHeader: boolean }) => {
    const dispatch = useDispatch();

    return (<motion.div className={`duration-100 fixed w-screen left-0 z-50`}>
        <motion.div className="bg-slate-50 flex h-12 items-center justify-between px-8 w-full z-100">
            <h1 className="font-bold text-xl z-10">IMCreator.</h1>
            {/*<MenuToggleButton />*/}
        </motion.div>
        <Menu />
    </motion.div>)
}

export default Header;