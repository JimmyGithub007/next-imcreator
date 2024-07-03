"use client";
import { FC } from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";
import Link from "next/link";

interface QuotationSuccessProps {
    params: {
        id: string;
    };
}

const QuotationSuccess: FC<QuotationSuccessProps> = ({ params }) => {
    const { id } = params;

    return (
        <motion.div 
            initial={{
                opacity: 0,
                y: 100,
            }}
            animate={{
                opacity: 1,
                y: 0,
                transition: {
                    duration: 0.5,
                }
            }}
            className="bg-slate-100 flex h-screen items-center justify-center w-screen">
            <div className="flex flex-col overflow-hidden rounded-lg shadow-sm shadow-white w-[500px]">
                <div className="bg-lime-200 flex items-center justify-center p-4 text-white text-7xl h-[200px]">
                    <IoMdCheckmarkCircleOutline />
                </div>
                <div className="bg-white flex flex-col gap-4 h-[280px] items-center justify-center p-4 text-center">
                    <div className="flex flex-col">
                        <div className="font-bold text-2xl">Great!</div>
                        <div>Your request was sent successfully,</div>
                        <div>our people will contact you as soon as possible.</div>
                        <div>Your reference id: <b>{id}</b></div>
                    </div>
                    <div>For very urgent assistance or quotation, please copy the above reference id and <button className="text-[#25d366]">whatsapp us</button></div>
                    <Link href={`/quotation`} className="bg-blue-950 duration-300 px-6 py-3 rounded-lg shadow-md shadow-blue-950/40 text-white hover:bg-blue-950/90">Request another quotation</Link>
                </div>
            </div>
        </motion.div>
    );
}

export default QuotationSuccess;
