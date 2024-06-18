import FramerMagnetic from "@/utils/FramerMagnetic";

import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { MdArrowOutward, MdOutlineAccessTime  } from "react-icons/md";
import { RiWhatsappFill } from "react-icons/ri";
import { LuPhone, LuMapPin  } from "react-icons/lu";

import { Merienda } from "next/font/google";
import Image from "next/image";
const merienda = Merienda({ subsets: ["latin"], weight: '400' });

const Footer = () => {
    return (<div className="flex flex-col w-screen">
        <div className="bg-blue-950 flex flex-col h-[300px] items-center justify-center text-white w-full z-10">
            <h1>Got Question?</h1>
            <a href={`mailto:sales@imcreator.asia`} target="_blank" className="cursor-pointer flex gap-4 underline text-3xl md:text-6xl">
                sales@imcreator.asia <MdArrowOutward />
            </a>
        </div>
        <div className="min-h-[calc(100vh-300px)] w-full">
            <div className="bg-black bottom-0 fixed flex flex-col gap-8 min-h-[calc(100vh-300px)] items-center justify-center text-gray-300 w-full px-8">
                <h1>Visit & Contact Us</h1>
                <div className="flex flex-col sm:items-center gap-2 text-xl md:text-3xl">
                    <div className="flex gap-2 items-center"><LuMapPin className="text-3xl" />Address: 5,Jalan Rosmerah 2/5, Johor Bahru, Malaysia</div>
                    <div className="flex gap-2 items-center"><LuPhone />Phone Number: +(60)16-755 5707</div>
                    <div className="flex gap-2 items-center"><MdOutlineAccessTime />Working Housrs: <span className={`text-orange-300 ${merienda.className}`}>Always Open</span></div>
                </div>
                <div className="flex gap-8 text-2xl sm:text-5xl">
                    <FramerMagnetic><a className="duration-200 hover:opacity-60" href="https://www.facebook.com/tshirtprintingJB/" target="_blank"><FaFacebookF /></a></FramerMagnetic>
                    <FramerMagnetic><a className="duration-200 hover:opacity-60" href="https://www.instagram.com/tshirtprintingjb/" target="_blank"><FaInstagram /></a></FramerMagnetic>
                    <FramerMagnetic><RiWhatsappFill className="cursor-pointer duration-200 hover:opacity-60" onClick={() => window.open("https://wa.me/60167555707", "_blank")} /></FramerMagnetic>
                </div>
                <span className="text-gray-500 text-md">Imcreator 2024 All Rights Reserved ©</span>
            </div>
        </div>
    </div>)
}

export default Footer;