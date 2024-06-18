import { useDispatch, useSelector } from "react-redux";
import { setIsOpen } from "@/store/slice/floorSlice";
import { RootState } from "@/store";

import styles from "./style.module.css";
import { useEffect } from "react";

const MenuToggleButton = () => {
    const { isOpen } = useSelector((state: RootState) => state.floor);
    const dispatch = useDispatch();

    useEffect(() => {
        if(isOpen) { document.documentElement.style.overflow = "hidden"; document.documentElement.style.height = "100vh"; }
        else { document.documentElement.style.overflow = "inherit"; document.documentElement.style.height = "inherit"; }
    }, [isOpen])

    return (<div onClick={() => {dispatch(setIsOpen(!isOpen))}} className="flex items-center justify-center gap-2 cursor-pointer w-8 h-8 z-10">
        <div className={`${styles.burger} ${isOpen ? styles.burgerActive : ""}`}></div>
    </div>)
}

export default MenuToggleButton;