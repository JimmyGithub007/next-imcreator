"use client";

import { usePathname, useRouter } from "next/navigation";
import { RiAdvertisementFill } from "react-icons/ri";
import { MdDashboard } from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { FaRegUser } from "react-icons/fa";

import { Lobster } from "next/font/google";
import { signOut } from "firebase/auth";
import { auth } from "@/firebase/config";
import Link from 'next/link';

const lobster = Lobster({ subsets: ["latin"], weight: '400' });

const Sidebar = () => {
    const router = useRouter();
    const pathname = usePathname();

    const Logout = () => {
        signOut(auth).then(() => {
            router.push("/admin/login");
        })
    }

    return (<div className="bg-slate-200 flex flex-col items-center gap-8 w-64 rounded-3xl shadow-md px-4 py-8 text-blue-950">
        <div className="flex flex-col">
            <div>IMCreator.</div>
            <div className={`text-xl ${lobster.className}`}>Admin Panel</div>
        </div>
        <div className="flex flex-col gap-2 w-full">
            <Link href="/admin/dashboard" className={`duration-300 flex font-bold gap-2 items-center px-4 py-2 border-blue-950 ${pathname == "/admin/dashboard" ? "border-l-4" : "hover:border-l-4"}`}><MdDashboard /> Dashboard</Link>
            <div>Landing Page Setting</div>
            <button className="duration-300 flex font-bold gap-2 items-center px-4 py-2 hover:border-l-4 border-blue-950"><RiAdvertisementFill /> Advertisement Banner</button>
            <button className="cursor-not-allowed duration-300 flex font-bold gap-2 items-center px-4 py-2 border-blue-950 text-slate-100">About Us</button>
            <button className="cursor-not-allowed duration-300 flex font-bold gap-2 items-center px-4 py-2 border-blue-950 text-slate-100">Galleryy</button>
            <button className="cursor-not-allowed duration-300 flex font-bold gap-2 items-center px-4 py-2 border-blue-950 text-slate-100">Contact Info</button>
            <div>Admin Setting</div>
            <button className="cursor-not-allowed duration-300 flex font-bold gap-2 items-center px-4 py-2 border-blue-950 text-slate-100">Users</button>
            <Link href="/admin/profile" className={`duration-300 flex font-bold gap-2 gap-2 items-center px-4 py-2 border-blue-950 ${pathname == "/admin/profile" ? "border-l-4" : "hover:border-l-4"}`}><FaRegUser /> My Profile</Link>
            <button onClick={Logout} className="bg-blue-950 flex gap-2 items-center justify-center px-4 py-2 rounded-3xl shadow-md shadow-blue-950/40 text-white">Logout <LuLogOut /></button>
        </div>
    </div>)
}

export default Sidebar;