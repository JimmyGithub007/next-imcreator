"use client";

import { FaPhoneFlip } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
import { Monoton } from "next/font/google";
const monoton = Monoton({ subsets: ["latin"], weight: '400' });
import CustomSwiper from "@/utils/CustomSwiper";

const Panel = () => {
    return (<div id="floor0" className="bg-slate-50 flex flex-col-reverse lg:flex-row gap-4 md:gap-8 min-h-screen w-screen items-center justify-center relative z-10">
        <div className="absolute bg-blue-950 w-8 h-10 bottom-2 sm:bottom-4 rounded-full flex justify-center items-center">
            <div className="border-white border-2 flex h-8 items-center justify-center rounded-3xl w-6 text-4xl z-10">
                <div className="animate-scroll bg-white h-1 rounded-full w-1"></div>
            </div>
        </div>
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 lg:gap-10 justify-center max-w-[600px] px-4 sm:px-0">
            <h1 className={`text-4xl sm:text-5xl md:text-6xl`}><span className={`text-blue-950 ${monoton.className}`}>One Stop</span> Tshirt <br />Printing <span className={`text-blue-950 ${monoton.className}`}>Service</span> <br />in Johor Bahru</h1>
            <h1 className="text-gray-500 text-sm sm:text-md">Welcome to IMCreator, our factory produces fabrics in-house and designs & manufactures clothes according to customer requirements. We are the only JB that assists customers in &quot;tailoring&quot; their own exclusive corporate uniforms, ensuring you never clash outfits when stepping out.</h1>
            <div className="flex gap-2 justify-center">
                <button className="bg-blue-950 flex items-center gap-4 px-5 py-3 rounded-full shadow-sm text-white text-sm sm:text-md">SEE WHAT WE DO <FaArrowRight /></button>
                <button className="flex font-bold items-center gap-4 px-5 py-3 rounded-full text-blue-950 text-sm sm:text-md">CONTACT US <FaPhoneFlip /></button>
            </div>
        </div>
        <div className="cursor-pointer h-[300px] w-[300px] lg:h-[400px] lg:w-[400px] rounded-3xl shadow-2xl overflow-hidden">
            <CustomSwiper />
        </div>
    </div>)
}

export default Panel;