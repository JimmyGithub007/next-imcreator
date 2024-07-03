"use client";

import { usePathname, useRouter } from "next/navigation";
import { RiAdvertisementFill } from "react-icons/ri";
import { LuContact } from "react-icons/lu";
import { MdDashboard, MdOutlineRequestQuote } from "react-icons/md";
import { TbUserSquareRounded, TbUsers } from "react-icons/tb";

import { Lobster } from "next/font/google";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config";
import { useEffect, useState } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import { setPageLoading } from "@/store/slice/floorSlice";
import { useDispatch } from "react-redux";
import { motion } from "framer-motion";

const lobster = Lobster({ subsets: ["latin"], weight: '400' });

const Sidebar = () => {
    const dispatch = useDispatch();
    const [ page, setPage ] = useState<string>("dashboard");
    const [ open, setOpen ] = useState<boolean>(false);
    const router = useRouter();
    const pathname = usePathname();

    const Logout = () => {
        signOut(auth).then(() => {
            router.push("/admin/login");
        })
    }

    const changePage = (pageName: string) => {
        setPage(pageName);
        dispatch(setPageLoading(true));
        router.push(`/admin/${pageName}`);
    }

    useEffect(() => {
        if(pathname) {
            setPage(pathname.replace("/admin/", ""));
        }
    }, [pathname])

    useEffect(() => {
        dispatch(setPageLoading(true));
    }, [])

    return (<motion.div
        initial={{
            opacity: 0,
            x: -50,
        }}
        animate={{
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.5,
            }
        }}
        className="bg-[#1c2c3f] fixed flex flex-col gap-8 h-screen items-center px-4 py-8 shadow-2xl text-white top-0 w-64 z-50">
        <div className="flex flex-col">
            <div>IMCreator.</div>
            <div className={`text-xl ${lobster.className}`}>Admin Panel</div>
        </div>
        <div className="flex flex-col gap-2 w-full">
            <button onClick={() => page !== "dashboard" && changePage("dashboard") } className={`duration-300 flex font-bold gap-2 items-center px-4 py-2 border-white ${page == "dashboard" ? "border-l-4" : "hover:border-l-4"}`}><MdDashboard /> Dashboard</button>
            <button onClick={() => page !== "quotation" && changePage("quotation") } className={`duration-300 flex font-bold gap-2 items-center px-4 py-2 border-white ${page == "quotation" ? "border-l-4" : "hover:border-l-4"}`}><MdOutlineRequestQuote /> Quotation</button>
            <div>Landing Page Setting</div>
            <button onClick={() => page !== "banners" && changePage("banners") } className={`duration-300 flex font-bold gap-2 items-center px-4 py-2 border-white ${page == "banners" ? "border-l-4" : "hover:border-l-4"}`}><RiAdvertisementFill /> Banners</button>
            <button onClick={() => page !== "contact" && changePage("contact") } className={`duration-300 flex font-bold gap-2 items-center px-4 py-2 border-white ${page == "contact" ? "border-l-4" : "hover:border-l-4"}`}><LuContact /> Contact</button>
            <button className="cursor-not-allowed duration-300 flex font-bold gap-2 items-center px-4 py-2 border-white text-slate-400">About Us</button>
            <button className="cursor-not-allowed duration-300 flex font-bold gap-2 items-center px-4 py-2 border-white text-slate-400">Gallery</button>
            <div>Admin Setting</div>
            <button onClick={() => page !== "users" && changePage("users") } className={`duration-300 flex font-bold gap-2 items-center px-4 py-2 border-white ${page == "users" ? "border-l-4" : "hover:border-l-4"}`}><TbUsers /> Users</button>
            <button onClick={() => page !== "profile" && changePage("profile") } className={`duration-300 flex font-bold gap-2 items-center px-4 py-2 border-white ${page == "profile" ? "border-l-4" : "hover:border-l-4"}`}><TbUserSquareRounded /> My Profile</button>
        </div>
        <button onClick={() => setOpen(true) } className="bg-slate-100 duration-300 px-6 py-2 rounded-lg shadow-lg shadow-black/40 text-blue-950 w-full hover:bg-slate-100/90">Logout</button>
        <Dialog
            open={open}
            onClose={() => setOpen(false) }
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle id="alert-dialog-title">
                Confirm Logout
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                Are you sure want to logout?
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpen(false) } color="primary">No</Button>
                <Button onClick={() => Logout() } color="secondary" autoFocus>
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    </motion.div>)
}

export default Sidebar;