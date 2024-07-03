"use client";

import { ReactNode, useEffect, useState } from "react";
//import { Loading } from ".";
import { usePathname } from "next/navigation";
//import { useSelector } from "react-redux";
//import { RootState } from "@/store";
import { motion } from "framer-motion";
import Sidebar from "./Sidebar";
import withAdminPageHOC from "@/hoc/withAdminPageHOC";
//import { useDispatch } from "react-redux";
//import { setPageLoading } from "@/store/slice/floorSlice";

const Shell = ({ children }: { children: ReactNode }) => {
    const pathname = usePathname();
    //const dispatch = useDispatch();
    //const { pageLoading } = useSelector((state: RootState) => state.floor);

    /*useEffect(() => {
        dispatch(setPageLoading(true));
    }, [pathname])*/

    if(pathname == "/" || pathname.includes("/quotation") || pathname == "/admin/login") return children;

    return (<motion.div className="bg-slate-100 flex items-center">
        <Sidebar />
        <div className="flex flex-col items-center pl-64 w-screen overflow-y-scroll">
            {children}
            <motion.footer
                initial={{
                    opacity: 0,
                    y: 50,
                }}
                animate={{
                    opacity: 1,
                    y: 0,
                    transition: {
                        delay: 0.5,
                        duration: 0.5,
                    }
                }}
                className="bg-black flex items-center justify-center h-12 text-gray-300 w-full z-10">
                Imcreator 2024 All Rights Reserved ©
            </motion.footer>
        </div>
    </motion.div>)
}

export default Shell;